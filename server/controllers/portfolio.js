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
    const portfolio = new portfolio(portfolioData);
    portfolio.userId = userId;
    console.log(portfolioData);

    portfolio.save((err, createdPortfolio) => {
        if (err) {
            return res.status(422).send(err);
        }
        return res.json(createdPortfolio);
    });
}