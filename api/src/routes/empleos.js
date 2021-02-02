const express = require("express");
const router = express.Router();

//----------Modelos----------

const Empleo = require("../models/empleos");
//const Empresa = require("../models/enterprise");

//----------Rutas----------

//-----Crear un empleo
router.post("/", async (req, res) => {
  const {
    enterprise,
    title,
    description,
    remote,
    location,
    linkedIn,
  } = req.body;
  const offerCard = new Empleo({
    enterprise,
    title,
    description,
    remote,
    location,
    linkedIn,
  });

  try {
    const newOffer = await offerCard.save();
    res.status(201).json(newOffer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
//--------------------

//-----Traer un empleo
router.get("/:id", (req, res) => {
  const { id } = req.params;
  empleo = Empleo.findById(id)
    .then((empleo) => {
      if (!empleo) {
        return res
          .status(404)
          .json({ message: "El empleo solicitado no existe" });
      } else res.json(empleo);
    })
    .catch((error) => res.status(500).json({ message: error.message }));
});
//--------------------

//-----Traer todos los empleos
router.get("/", async (req, res) => {
  try {
    const empleos = await Empleo.find();
    res.json(empleos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//----------------------------

//-----Eliminar empleo
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Empleo.findById(id)
    .then((empleo) => {
      empleo.remove();
      res.json({ message: "Oferta eliminada exitosamente" });
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
});
//--------------------

//-----Editar un empleo
router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const { title, description, remote, location, linkedIn } = req.body;
  let update = {};
  if (title) {
    update = { ...update, title };
  }
  if (description) {
    update = { ...update, description };
  }
  if (location) {
    update = { ...update, location };
  }
  if (linkedIn) {
    update = { ...update, linkedIn };
  }
  if (remote) {
    update = { ...update, remote };
  }
  Empleo.findByIdAndUpdate(id, update, { new: true })
    .then((empleo) => {
      res.json(empleo);
    })
    .catch((error) => {
      res.status(400).json({ message: error.message });
    });
});
//---------------------

module.exports = router;
