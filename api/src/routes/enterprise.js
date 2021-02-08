const express = require('express');
const router = express.Router();
const Empresa = require('../models/enterprise');
const Empleo = require("../models/empleos");

//Get all enterprise
router.get('/', async (req, res) => {
    try {
        const empresas = await Empresa.find();
        res.json(empresas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//Get one enterprise
router.get('/:id', (req, res) => {
    const { id } = req.params;
    empresa = Empresa.findById(id).then(empresa => {
        if (!empresa) {
            return res.status(404).json({ message: 'Cannot find enterprise' });
        } else res.json(empresa);
    })
        .catch(
            error => res.status(500).json({ message: error.message })
        );
});



module.exports = router;