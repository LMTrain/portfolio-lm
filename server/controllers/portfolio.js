const Portfolio = require('../models/portfolio');

//ENDPOINT - GET ALL DATA FROM MONGODB
exports.getPortfolios = (req, res) => {
    Portfolio.find({}, (err, allPortfolios) => {
        if (err) {
            return res.status(422).send(err);
        }
        return res.json(allPortfolios);
    })
}

//ENDPOINT - POST DATA TO MONGODB
exports.savePortfolio = (req, res) => {
    const portfolioData = req.body;   
    const userId = req.user && req.user.sub;
    const portfolio = new Portfolio(portfolioData);
    portfolio.userId = userId;
    console.log(portfolioData);

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
   
    portfolio.findById(portfolioId, (err, foundPortfolio) => {
        console.log(foundPortfolio);
        if (err) {
            return res.status(422).send(err);
        }
        foundPortfolio.set(portfolioData);
        foundPortfolio.save((err, savedPortfolio) => {
            console.log(savedPortfolio);
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
    console.log(portfolioId);

    Portfolio.deleteOne({_id: portfolioId}, (err, deletedPortfolio) => {
        if (err) {                
            return res.status(422).send(err);
        }
        console.log(deletedPortfolio);
        return res.json({status: 'DELETED'});
    })
}