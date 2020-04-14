const routes = require('next-routes')
                                                    
module.exports = routes()
.add('CvNew', '/resumes/cvnew')
.add('portfolioNew', '/portfolios/new') 
.add('resume', '/resume/:id')                                 
.add('portfolio', '/portfolio/:id')  
.add('resumeEdit', '/resumes/:id/edit')
.add('portfolioEdit', '/portfolios/:id/edit')
.add('userBlogs', '/blogs/dashboard')
.add('blogEditor', '/blogs/new')
.add('blogDetails', '/blogs/:slug') 
.add('blogEditorUpdate', '/blogs/:id/edit')               
