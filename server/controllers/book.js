const Book = require('../models/book');

//ENDPOINT - GET ALL DATA FROM MONGODB
exports.getBooks = (req, res) => {
    Book.find({}, (err, allBooks) => {
        if (err) {
            return res.status(422).send(err);
        }
        return res.json(allBooks);
    })
}

//ENDPOINT - POST DATA TO MONGODB
exports.saveBook = (req, res) => {
    const bookData = req.body;
    const book = new Book(bookData);
    console.log(bookData);

    book.save((err, createdBook) => {
        if (err) {
            return res.status(422).send(err);
        }
        return res.json(createdBook);
    });
}

//ENDPOINT - UPDATE DATA IN MONGODB
exports.updateBook = (req, res) => {
    const bookId = req.params.id;
    const bookData = req.body;
    console.log(bookId);
    console.log(bookData);

    Book.findById(bookId, (err, foundBook) => {
        console.log(foundBook);
        if (err) {
            return res.status(422).send(err);
        }
        foundBook.set(bookData);
        foundBook.save((err, savedBook) => {
            console.log(savedBook);
            if (err) {
                console.log(savedBook);
                return res.status(422).send(err);
            }
            console.log(savedBook);
            console.log(foundBook);
            return res.json(foundBook);
        });
    })
}

//ENDPOINT - DELETE DATA IN MONGODB
exports.deleteBook = (req, res) => {
    const bookId = req.params.id;
    console.log(bookId);

    Book.deleteOne({_id: bookId}, (err, deletedBook) => {
        if (err) {                
            return res.status(422).send(err);
        }
        console.log(deletedBook);
        return res.json({status: 'DELETED'});
    })
}