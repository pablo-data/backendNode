const Model = require('./model');

function addMessage(message) {
    const myMessage = new Model(message);
    myMessage.save();
}

async function getMessages(filterUser) {
    return new Promise((resolve, reject) => {
        let filter = {};
         if(filterUser !== null){
        filter = { user: filterUser}
        }
        Model.find(filter)
        //para buscar lo que tenga id y lo popula
        .populate('user')
        .exec((error, populated) => {
            if(error) {
                reject(error);
                return false;
            }

            resolve(populated);
        })
    })
    
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