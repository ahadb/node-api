const mongoose = require("mongoose")
const constants = require("../constants");

module.exports.formatMongoData = (data) => {
    if(Array.isArray(data)) {
        let dataList = []
        for(val of data) {
            dataList.push(val.toObject());
        }

        return dataList;
    }

    return data.toObject();
}

module.exports.checkObjectId = (id) => {
    if(!mongoose.Types.ObjectId.isValid(id)) {
        console.log("NOT======")
        throw new Error(constants.databaseMessage.INVALID_ID)
      }
}