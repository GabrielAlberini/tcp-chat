// Recibe las directivas de controller.js y se conecta con las base de datos (history.json en nuestro caso) para procesar la información y retornar los valores solicitados. Es decir, que el modelo (model.js) se encarga de crear, leer, actualizar y borrar datos de la base de datos.

// Importar FS.
// Leer el JSON.
// Desarrollar 3 funciones que permitan leer, borrar y actualizar el JSON.
// Exportar las funciones usando la sintaxis de ECMAScript Modules (export {...}).

const getHistory = () => "Trae todo el historial del JSON";
const eraseHistory = () => "Borra el archivo JSON y lo deja con [{}]";
const pushMessage = (message) =>
  "Actualiza la base de datos agregándole un objeto mensaje";
