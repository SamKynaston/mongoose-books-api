//Imports
const express = require("express")
const router = express.Router()

//Controller
const findBookBasedOnID = require("../controllers/books.controller").findBookBasedOnID
const findBookBasedOnTitle = require("../controllers/books.controller").findBookBasedOnTitle
const createBook = require("../controllers/books.controller").createBook
const updateBook = require("../controllers/books.controller").changeBookdetails
const deleteBook = require("../controllers/books.controller").deleteBook
const getAllBooks = require("../controllers/books.controller").getAllBooks
const deleteAllBooks = require("../controllers/books.controller").deleteAllBooks

router.get('/all', async(req, res) => {
    let books = await getAllBooks()
    return res.status(200).json({body:books})
})

router.get('/find/ID/:ID', async(req,res) => {
    let book = await findBookBasedOnID(req.params.ID)
    if (!book) {return res.status(404).json({body:"book not found!"})}

    return res.status(200).json({body:book})
})

router.get('/find/title/:title', async(req,res) => {
    let book = await findBookBasedOnTitle(req.params.title)
    if (!book) {return res.status(404).json({body:"book not found!"})}

    return res.status(200).json({body:book})
})

router.post('/create', async(req,res) => {
    let newBook = await createBook(req.body)

    if (!newBook) {return res.status(500).json({body:"book not created!"})}
    return res.status(200).json({body:newBook})
})

router.patch('/update/id/:ID', async(req, res) => {
    let updatedBook = await updateBook(req.body, req.params.ID)

    if (!updatedBook) {return res.status(500).json({body:"book not updated!"})}
    return res.status(200).json({body:updatedBook})
})

router.delete('/delete/id/:ID', async(req, res) => {
    let status = await deleteBook(req.params.ID)

    if (!status) {return res.status(500).json({body:"book not deleted!"})}
    return res.status(200).json({body:"deleted"})
})

router.delete('/purge', async(req, res) => {
    let status = await deleteAllBooks()

    if (!status) {return res.status(500).json({body:"books not deleted!"})}
    return res.status(200).json({body:"deleted all books!"})
})

module.exports.router = router