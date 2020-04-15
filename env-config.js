const prod = process.env.MODE_ENV === 'production';

module.exports = {
    'process.env.BASE_URL': prod ? 'https//https://lm-porfolio.herokuapp.com' : 'http://localhost:3000',
    'process.env.NAMESPACE': 'https://lm-porfolio.herokuapp.com',
    'process.env.CLIENT_ID': 'bGOaWGQAd73mPygXMen4XkptBMrglXRY'
}