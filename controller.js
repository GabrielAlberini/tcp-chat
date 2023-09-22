// Recibe las solicitudes de los usuarios y las deriva al modelo para que encuentre los datos necesarios para llevar a cabo cierta acción. El controlador (controller.js) nunca debe tener acceso directo a la base de datos, sino a través del modelo (model.js). Sólamente le dice al modelo qué hacer mediante solicitudes.

// Importar el modelo
// Vincular las solicitudes de los usuarios con las funciones del modelo.

import * as model from "./model.js";

const getHistory = () => "Traer todos los mensajes";
const eraseHistory = () => "Borrar todos los mensajes";
const pushMessage = (message) =>
  "Pushea el mensaje ingresado por el usuario a la base de datos y lo escribe permanentemente en el JSON";
