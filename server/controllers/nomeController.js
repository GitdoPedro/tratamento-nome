const sequelize        = require('../config/db')
const createNameModel  = require('../models/nameModel');
const Name             = createNameModel(sequelize,sequelize.Sequelize.DataTypes);


const nameController = {
    async create(req, res) {
        try {
            const name  = await Name.create(req.body);
            
            return res.status(201).json(name);
        } catch (error) {
            console.error(req);
            return res.status(400).json(
                { error: 'Failed to create the name', details: error.message });
        }
    },

    async listAll(req, res) {
        try {
            const names = await Name.findAll();
            return  res.status(200).json(names);
        } catch (error) {
            console.error(error);
            return res.status(500).json(
                { message: 'Error retrieving names', error });
        }
    },

    async findById(req, res) {
        try {
            const name = await Name.findByPk(req.params.id);
            if (name) {
                return res.status(200).json(name);
            } else {
                return res.status(404).json(
                    { message: 'name not found' });
            }
        } catch (error) {
            return res.status(500).json(
                { message: 'Error retrieving name', error });
        }
    },

    
    async update(req, res) {
        try {
            const updatedName = await Name.update(req.body, {
                where: { id: req.params.id },
            });
            if (updatedName[0]) {
                return res.status(200).json(
                    { message: 'Name updated successfully' });
            } else {
                return res.status(404).json(
                    { message: 'Name not found' });
            }
        } catch (error) {
            return res.status(500).json(
                 { message: 'Error updating name', error });
        }
    },

   async delete(req, res) {
        try {
            const deletedName = await Name.destroy({ where: { id: req.params.id } });
            if (deletedName) {
                res.status(204).json({ message: 'Name deleted successfully' });
            } else {
                res.status(404).json({ message: 'Name not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error deleting name', error });
        }
    }

};

module.exports = nameController;