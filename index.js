// Импорт модулей 
const { listContacts, getContactById, removeContact, addContact } = require('./contacts'); /*CommonJS modules */
// const contactsList = require('./contacts');
// import { listContacts, getContactById, removeContact, addContact } from './contacts.mjs'; /*- ECMAScript modules*/
// require - синхронный модуль, import - асинхронный
// -----------------------------------------------------
// const yargs = require('yargs/yargs')
const argv = require('yargs').argv;

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      listContacts()
      break;

    case 'get':
      getContactById(id)
      break;

    case 'add':
      addContact(name, email, phone)
      break;

    case 'remove':
      removeContact(id)
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);