//Imports
const express = require("express")
const router = express.Router()

//Controller
const findBook = require("../controllers/books.controller").findBook
const createBook = require("../controllers/books.controller").createBook
const updateBook = require("../controllers/books.controller").changeBookdetails
const deleteBook = require("../controllers/books.controller").deleteBook

router.get('/:ID', async(req,res) => {
    let book = await findBook(req.params.ID)
    if (!book) {return res.status(404).json({body:"book not found!"})}

    return res.status(200).json({body:book})
})

router.post('/create', async(req,res) => {
    let newBook = await createBook(req.body)

    if (!newBook) {return res.status(500).json({body:"book not created!"})}
    return res.status(200).json({body:newBook})
})

router.patch('/:ID', async(req, res) => {
    let updatedBook = await updateBook(req.body, req.params.ID)

    if (!updatedBook) {return res.status(500).json({body:"book not updated!"})}
    return res.status(200).json({body:updatedBook})
})

router.delete('/:ID', async(req, res) => {
    let status = await deleteBook(req.params.ID)

    if (!status) {return res.status(500).json({body:"book not deleted!"})}
    return res.status(200).json({body:"deleted"})
})

module.exports.router = router