const db = require('mongoose');
const Model = require('./model');

const uri = 'ingresar';

db.Promise = global.Promise;

db.connect(uri, {useNewUrlParser:true,
useUnifiedTopology: true })
.then(() => console.log('[db] Conectada con éxito'))
.catch(err => console.error('[db]', err));

function addMessage(message) {
    const myMessage = new Model(message);
    myMessage.save();
}

async function getMessages(filterUser) {
    let filter = {};
    if(filterUser !== null){
        filter = { user: filterUser}
    }
   const messages = await Model.find(filter);
   return messages;
}

async function updateText(id, message){
    const foundMessage = await Model.findOne({
        _id: id
    });

    foundMessage.message = message; 
    const newMesssage = await foundMessage.save();
    return newMesssage;
}

async function removeMessage(id) {
    const exist = await Model.deleteOne({
        _id: id
    });

    return exist;
}

module.exports = {
    add: addMessage,
    list: getMessages,
    updateText: updateText,
    remove: removeMessage,
}