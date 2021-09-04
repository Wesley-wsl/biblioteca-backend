import express from "express";
import posts from "../model/posts.js";

const router = express.Router();

router.get("/obras/", (req, res) => {
    res.send(posts.getBooks());
});

router.post("/obras", (req, res) => {
    const { id, titulo, editora, foto, autores } = req.body;

    if (!titulo || !editora || !foto || !autores) {
        res.status(400).send({
            status: "Error",
            txt: "titulo, editora, foto e autores são valores obrigatórios. Há algum valor faltando.",
        });
    } else {
        res.send(posts.newBook(id, titulo, editora, foto, autores));
    }
});

router.put("/obras/:id", (req, res) => {
    const id = req.params.id;
    const { titulo, editora, foto, autores } = req.body;

    if (isNaN(id))
        res.status(400).json({
            status: "Error",
            txt: "ID Precisa ser um número.",
        });

    if (!titulo || !editora || !foto || !autores) {
        res.status(400).send({
            status: "Error",
            txt: "titulo, editora, foto e autores são valores obrigatórios. Há algum valor faltando.",
        });
    } else {
        res.json(posts.updateBook(id, titulo, editora, foto, autores));
    }
});

router.delete("/obras/:id", (req, res) => {
    const id = req.params.id;

    if (isNaN(id))
        res.status(400).json({
            status: "Error",
            txt: "ID Precisa ser um número.",
        });

    res.json(posts.delete(id));
});

export default router;
