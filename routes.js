const routes = require('next-routes')
                                                    
module.exports = routes()
.add('cvNew', '/portfolios/cvnew')
.add('portfolioNew', '/portfolios/new')                                  
.add('portfolio', '/portfolio/:id')  
.add('portfolioEdit', '/portfolios/:id/edit')
.add('userBlogs', '/blogs/dashboard')
.add('blogEditor', '/blogs/new')
.add('blogDetails', '/blogs/:slug') 
.add('blogEditorUpdate', '/blogs/:id/edit')               
