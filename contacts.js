// Импорт внутренних модулей node (fs, path)
const fs = require('fs');
const path = require('path');
// ------------------------------

const contactsPath = path.resolve('./db', 'contacts.json');

function listContacts() {
    fs.readFile(contactsPath, 'utf-8', (error, data) => {
        if (error) {
            return console.log(error);
        };
        
        const contacts = JSON.parse(data);
        console.table(contacts);
    });
};

function getContactById(contactId) {
    fs.readFile(contactsPath, 'utf-8', (error, data) => {
        if (error) {
           console.log(error);
        };

        const contacts = JSON.parse(data);
        const findContactById = contacts.find(contact => contact.id === contactId);
        if (findContactById) {
            console.table(findContactById);
        } else {
            console.log('Contact not found!');
        };
    });
};

function removeContact(contactId) {
    fs.readFile(contactsPath, 'utf-8', (error, data) => {
        if (error) {
            console.log(error);
        };

        const contacts = JSON.parse(data);
        const removeContactById = contacts.filter(contact => contact.id !== contactId);
        console.table(removeContactById);

        fs.writeFile(contactsPath, JSON.stringify(removeContactById), error => {
            if (error) {
                console.log(error);
            };
            console.table(`Contact with id:${contactId} was removed!`);
            return removeContactById;
        });
    });
};

function addContact(name, email, phone) {
     fs.readFile(contactsPath, 'utf-8', (error, data) => {
        if (error) {
            console.log(error);
        };
         
        const contacts = JSON.parse(data);
        const addNewContact = {
            name,
            email,
            phone,
            id: contacts.length + 1
        };
        contacts.push(addNewContact);
         
        fs.writeFile(contactsPath, JSON.stringify(contacts), error => {
            if (error) {
                return console.log(error);
            };

            console.table(contacts);
            console.log(`Contacts ${name} added successfully!`);
        });
    });
};

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact
};