const PartyModel = require("../models/Party.js");

const checkPartyBudget = (budget, services) => {

    const priceSum = services.reduce((sum, service) => sum + service.price, 0);

    if(priceSum > budget){
        return false;
    }
    return true;
};

const partyController = {
    create: async(req, res) => {
        try {
            
            const party = {
                title: req.body.title,
                author: req.body.author,
                description: req.body.description,
                budget: req.body.budget,
                image: req.body.image,
                services: req.body.services
            }

            if(party.services && !checkPartyBudget(party.budget, party.services)){
                res.status(406).json({msg: "O seu orçamento é insuficiente"});
                return;
            }

            const response = await PartyModel.create(party)
            res.status(201).json({response})

        } catch (error) {
            console.log(error)
        }
    },

    getAll: async(req, res) => {
        try {
            const parties = await PartyModel.find()

            res.json(parties);
        } catch (error) {
            console.log(error);
        }
    },

    get: async(req, res) => {
        try {
            const id = req.params.id;

            const parties = await PartyModel.findById(id);

            if(!parties){
                res.status(404).json({msg: "Serviço não encontrado"});
                return;
            }

            res.json(parties);

        } catch (error) {
            console.log(error)
        }
    },

    delete: async(req, res) => {
        try {
            const id = req.params.id;

        const parties = await PartyModel.findByIdAndDelete(id)

        if(!parties){
            res.status(404).json({msg: "Serviço não encontrado"});
            return;
        }

        res.status(201).json(parties);
        } catch (error) {
            console.log(error);
        }
    },

    update: async(req, res) => {
        try {
            const id = req.params.id;

            const parties = {
                title: req.body.title,
                author: req.body.author,
                description: req.body.description,
                budget: req.body.budget,
                image: req.body.image,
                services: req.body.services
            };
    
            const partiesUpdate = await PartyModel.findByIdAndUpdate(id, parties);
    
            if(!partiesUpdate){
                res.status(404).json({msg: "Serviço não encontrado"});
                return;
            }
    
            res.status(201).json({partiesUpdate});
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = partyController;