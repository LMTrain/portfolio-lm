const Blog = require('../models/blog');
const slugify = require('slugify');
const AsyncLock = require('async-lock');
const lock = new AsyncLock;

exports.getBlogs = (req, res) => {

    Blog.find({status: 'published'}, function(err, publishedBlogs) {
        if (err) {
            return res.status(422).send(err);
        }
        return res.json(publishedBlogs);
    });
}

exports.getBlogBySlug = (req, res) => {
    const slug = req.params.slugs;

    Blog.find({slug}, function(err, foundBlog) {
        if (err) {
            return res.status(422).send(err);
        }
        return res.json(foundBlog);
    });
}
//ENDPOINT - GET ALL DATA FROM MONGODB
// exports.getBlog = (req, res) => {

//     Blog.find({})
//             .sort({'startDate': 1})
//             .exec((err, allBlogs) => {
//         if (err) {
//             return res.status(422).send(err);
//         }
//         return res.json(allBlogs);
//     })
    
// }

//ENDPOINT - GET DATA BY ID FROM MONGODB
exports.getBlogById = (req, res) => {  
    const blogId = req.params.id;   
    Blog.findById(blogId, (err, foundBlog) => {
        if (err) {
            return res.status(422).send(err);
        }
        return res.json(foundBlog);
    })  
}

exports.getUserBlogs = (req, res)  => {
    const userId = req.user.sub;

    Blog.find({userId}, function(err, userBlogs) {
        if (err) {
            return res.status(422).send(err);
        }
        return res.json(userBlogs);
    });
}

exports.updateBlog = (req, res) => {
    const blogId = req.params.id;
    const blogData = req.body;
   
    Blog.findById(blogId, function(err, foundBlog) {
        if (err) {
            return res.status(422).send(err);
        }

        if (blogData.status && blogData.status === 'published' && !foundBlog.slug) {

            foundBlog.slug = slugify(foundBlog.title, {
                                replacement: '-',    // replace spaces with replacement
                                remove: null,        // regex to remove characters
                                lower: true,         // result in lower case
                            });
        }



        foundBlog.set(blogData);
        foundBlog.updatedAt = new Date();
        foundBlog.save(function(err, foundBlog) {
            if (err) {
                return res.status(422).send(err);
            }
            return res.json(foundBlog);
        });
    });
}

//ENDPOINT - POST DATA TO MONGODB
exports.createBlog = (req, res) => {
    const lockId = req.query.lockId;

    if (!lock.isBusy(lockId)) {

        lock.acquire(lockId, function(done) {       
            const blogData = req.body;
            const blog = new Blog(blogData);
            if (req.user) {
                blog.userId = req.user.sub;
                blog.author = req.user.name;
            }
       
            blog.save((err, createdBlog) => {
                setTimeout(() => done(), 5000);
                if (err) {
                    return res.status(422).send(err);
                }
                return res.json(createdBlog);
            }); 
        }, function(err, ret) {
            // lock released       
            err && console.error(err)
        });    
    } else {
        return res.status(422).send({message: 'Blog is Saving...'});
    }    
}

exports.deleteBlog = (req, res) => {
    const blogId = req.params.id;

    Blog.deleteOne({_id: blogId}, function(err) {
        if (err) {
            return res.status(422).send(err);
        }
        res.json({status: 'deleted'});
    })
}

//ENDPOINT - UPDATE DATA IN MONGODB
// exports.updateBlog = (req, res) => {
//     const blogId = req.params.id;
//     const blogData = req.body;
   
//     Blog.findById(blogId, (err, foundBlog) => {
//         console.log("YES YES YES---", foundBlog);
//         if (err) {
//             return res.status(422).send(err);
//         }
//         foundBlog.set(blogData);
//         foundBlog.save((err, savedBlog) => {
//             console.log("YES YES YES---", savedBlog);
//             if (err) {               
//                 return res.status(422).send(err);
//             }           
//             return res.json(savedBlog);
//         });
//     })
// }

//ENDPOINT - DELETE DATA IN MONGODB
// exports.deleteBlog = (req, res) => {
//     const blogId = req.params.id;
//     console.log(blogId);

//     Blog.deleteOne({_id: blogId}, (err, deletedBlog) => {
//         if (err) {                
//             return res.status(422).send(err);
//         }
//         console.log(deletedBlog);
//         return res.json({status: 'DELETED'});
//     })
// }