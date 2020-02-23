const Blog = require('../models/blog');
const AsyncLock = require('async-lock');
const lock = new AsyncLock;

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
    console.log(blogId);
    Blog.findById(blogId, (err, foundBlog) => {
        if (err) {
            return res.status(422).send(err);
        }
        return res.json(foundBlog);
    })  
}

//ENDPOINT - POST DATA TO MONGODB
exports.createBlog = (req, res) => {
    lock.acquire(key, function(done) {       
        const blogData = req.body;
        const blog = new Blog(blogData);
        if (req.user) {
            blog.userId = req.user.sub;
            blog.author = req.user.name;
        }
        console.log(blogData);
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