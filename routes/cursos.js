const express = require("express");
const { Curso } = require("../models");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const cursos = await Curso.findAll({
      // Ordena os cursos pelo título em ordem alfabética
      order: [["titulo", "ASC"]],
      raw: true
    });

    res.render("cursos/listar", {
      titulo: "Cursos cadastrados",
      cursos,
      possuiCursos: cursos.length > 0,
      quantidade: cursos.length
    });
  } catch (erro) {
    next(erro);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const curso = await Curso.findByPk(req.params.id, { raw: true });

    if (!curso) {
      return res.status(404).render("404", {
        titulo: "Curso não encontrado",
        caminho: `/cursos/${req.params.id}`
      });
    }

    return res.render("cursos/detalhar", {
      titulo: curso.titulo,
      curso
    });
  } catch (erro) {
    return next(erro);
  }
});

module.exports = router;
