const model = require("../services/models/book").model

async function createBook(body) {
    body["displayID"] = (await model.countDocuments({})+1) //Set ID of Book
    return await model.create(body) || false
}

async function findBook(IDtoFind) {
    return await model.findOne({displayID:IDtoFind}) || false
}

async function changeBookdetails(body, id) {
    const doc = await findBook(id)

    for (let x in body) {
        x = x.toString()
        doc[x] = body[x]
    }

    doc["__v"] = doc["__v"]+1
    doc.save()

    return doc
}

async function deleteBook(id) {
    if (!await findBook(id)) {return false}
    return await model.deleteOne({displayID:id}) || false
}

module.exports.createBook = createBook
module.exports.findBook = findBook
module.exports.changeBookdetails = changeBookdetails
module.exports.deleteBook = deleteBook