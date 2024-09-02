#!/bin/bash

# Solicitar el nombre del componente
read -p "Introduce el nombre del componente: " COMPONENT_NAME

# Comprobar si se pasó el nombre del componente
if [ -z "$COMPONENT_NAME" ]; then
  echo "Por favor, proporciona un nombre para el componente."
  exit 1
fi

# Convertir el nombre del componente a minúsculas
COMPONENT_NAME_LOWER=$(echo "$COMPONENT_NAME" | tr '[:upper:]' '[:lower:]')

# Directorio de componentes
COMPONENTS_DIR="src/components"

# Crear el directorio del componente si no existe
mkdir -p "$COMPONENTS_DIR"

# Crear el archivo TypeScript del componente
COMPONENT_FILE="$COMPONENTS_DIR/${COMPONENT_NAME}.tsx"
cat <<EOL > "$COMPONENT_FILE"
import React from 'react';
import './${COMPONENT_NAME}.scss';

const ${COMPONENT_NAME}: React.FC = () => {
  return (
    <div className="${COMPONENT_NAME_LOWER}">
      <h1>${COMPONENT_NAME} Component</h1>
    </div>
  );
};

export default ${COMPONENT_NAME};
EOL

# Crear el archivo SCSS del componente
SCSS_FILE="$COMPONENTS_DIR/${COMPONENT_NAME}.scss"
cat <<EOL > "$SCSS_FILE"
.${COMPONENT_NAME_LOWER} {
  /* Estilos para el componente ${COMPONENT_NAME} */
}
EOL

# Crear el archivo de prueba del componente
TEST_FILE="$COMPONENTS_DIR/${COMPONENT_NAME}.test.tsx"
cat <<EOL > "$TEST_FILE"
import React from 'react';
import { render } from '@testing-library/react';
import ${COMPONENT_NAME} from './${COMPONENT_NAME}';

test('renders ${COMPONENT_NAME} component', () => {
  const { getByText } = render(<${COMPONENT_NAME} />);
  const linkElement = getByText(/${COMPONENT_NAME} Component/i);
  expect(linkElement).toBeInTheDocument();
});
EOL

# Confirmación de creación
echo "Componente ${COMPONENT_NAME} creado con éxito."