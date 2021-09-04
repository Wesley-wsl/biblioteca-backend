const posts = {
    books: [],

    newBook(
        id = Math.floor(Math.random() * 100 + 1),
        titulo,
        editora,
        foto,
        autores
    ) {
        this.books.push({ id, titulo, editora, foto, autores });
    },

    getBooks() {
        return this.books;
    },

    updateBook(id, titulo, editora, foto, autores) {
        this.books.forEach((book, index) => {
            if (book.id == id) {
                this.books[index] = {
                    id: Number(id),
                    titulo,
                    editora,
                    foto,
                    autores,
                };
            }
        });
    },

    delete(id) {
        this.books.forEach((book, index) => {
            if (book.id == id) {
                this.books.splice(index, 1);
            }
        });
    },
};

export default posts;
