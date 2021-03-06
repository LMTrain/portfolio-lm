const Portfolio = require('../models/portfolio');

//ENDPOINT - GET ALL DATA FROM MONGODB
exports.getPortfolios = (req, res) => {

    Portfolio.find({})
            .sort({'completion': -1})
            .exec((err, allPortfolios) => {
        if (err) {
            return res.status(422).send(err);
        }
        return res.json(allPortfolios);
    })
    // Portfolio.find({}, (err, allPortfolios) => {
    //     if (err) {
    //         return res.status(422).send(err);
    //     }
    //     return res.json(allPortfolios);
    // })
}

//ENDPOINT - GET DATA BY ID FROM MONGODB
exports.getPortfolioById = (req, res) => {  
    const portfolioId = req.params.id;

    Portfolio.findById(portfolioId)
                .select('-__v')
                .exec((err, foundPortfolio) => {
        if (err) {
            return res.status(422).send(err);
        }
        return res.json(foundPortfolio);
    });

    // Portfolio.findById(portfolioId, (err, foundPortfolio) => {        
    //     if (err) {
    //         return res.status(422).send(err);
    //     }        
    //     return res.json(foundPortfolio);
    // })
}

//ENDPOINT - POST DATA TO MONGODB
exports.savePortfolio = (req, res) => {
    const portfolioData = req.body;     
    const userId = req.user && req.user.sub;
    const portfolio = new Portfolio(portfolioData);
    portfolio.userId = userId; 

    portfolio.save((err, createdPortfolio) => {
        if (err) {
            return res.status(422).send(err);
        }
        return res.json(createdPortfolio);
    });
}

//ENDPOINT - UPDATE DATA IN MONGODB
exports.updatePortfolio = (req, res) => {
    const portfolioId = req.params.id;
    const portfolioData = req.body;
   
    Portfolio.findById(portfolioId, (err, foundPortfolio) => {   
        if (err) {
            return res.status(422).send(err);
        }
        foundPortfolio.set(portfolioData);
        foundPortfolio.save((err, savedPortfolio) => { 
            if (err) {               
                return res.status(422).send(err);
            }           
            return res.json(savedPortfolio);
        });
    })
}

//ENDPOINT - DELETE DATA IN MONGODB
exports.deletePortfolio = (req, res) => {
    const portfolioId = req.params.id;

    Portfolio.deleteOne({_id: portfolioId}, (err, deletedPortfolio) => {
        if (err) {                
            return res.status(422).send(err);
        }
        return res.json({status: 'DELETED'});
    })
}