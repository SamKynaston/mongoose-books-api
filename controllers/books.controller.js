const model = require("../services/models/book").model

async function createBook(body) {
    body["displayID"] = (await model.countDocuments({})+1) //Set ID of Book
    return await model.create(body) || false
}

async function findBookBasedOnID(IDtoFind) {
    return await model.findOne({displayID:IDtoFind}) || false
}

async function findBookBasedOnTitle(titleToFind) {
    return await model.findOne({title:titleToFind}) || false
}

async function changeBookdetails(body, id) {
    const doc = await findBookBasedOnID(id)

    for (let x in body) {
        x = x.toString()
        doc[x] = body[x]
    }

    doc["__v"] = doc["__v"]+1
    doc.save()

    return doc
}

async function deleteBook(id) {
    if (!await findBookBasedOnID(id)) {return false}
    return await model.deleteOne({displayID:id}) || false
}

async function getAllBooks() {
    return await model.find();
}

module.exports.createBook = createBook
module.exports.findBookBasedOnID = findBookBasedOnID
module.exports.findBookBasedOnTitle = findBookBasedOnTitle
module.exports.changeBookdetails = changeBookdetails
module.exports.deleteBook = deleteBook
module.exports.getAllBooks = getAllBooks