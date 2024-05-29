
Vending Machine Frontend
Este proyecto contiene el front-end para una máquina expendedora, desarrollado con React y Material-UI. El front-end se comunica con el servidor Node.js para manejar las operaciones de inserción de monedas, devolución de monedas, consulta de inventario y compra de artículos.

Funcionalidades
Insertar Moneda: Permite al usuario insertar una moneda en la máquina.
Devolver Monedas: Permite al usuario devolver todas las monedas insertadas.
Consultar Inventario: Muestra al usuario el inventario actualizado de la máquina.
Comprar Artículo: Permite al usuario seleccionar y comprar un artículo disponible en la máquina.
Tecnologías Utilizadas
React
Material-UI
Axios
Componentes
CoinButton
Componente para insertar una moneda en la máquina.

ItemButton
Componente para comprar un artículo de la máquina.

Inventory
Componente para mostrar el inventario de la máquina.

Layout
Componente que proporciona la estructura general de la aplicación.



Estructura del Proyecto


├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── CoinButton.js
│   │   ├── Inventory.js
│   │   ├── ItemButton.js
│   │   └── Layout.js
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
└── README.md

Clona el repo

git clone https://github.com/tu-usuario/vending-machine-frontend.git


Instala las dependencias

cd vending-machine-frontend
npm install


Configura la URL del servidor


En el archivo src/api/config.js, ajusta la URL del servidor Node.js:
const BASE_URL = 'http://localhost:3000/api/v1/vending';
export default BASE_URL;

Ejecuta


npm start



