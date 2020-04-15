const Resume = require('../models/resume');

//ENDPOINT - GET ALL DATA FROM MONGODB
exports.getResumes = (req, res) => {

    Resume.find({})
            .sort({"startDate":-1})
            .exec((err, allResumes) => {
        if (err) {
            return res.status(422).send(err);
        }
        return res.json(allResumes);
    })
   
}

//ENDPOINT - GET DATA BY ID FROM MONGODB
exports.getResumeById = (req, res) => {  
    const resumeId = req.params.id;
    console.log(resumeId);
    Resume.findById(resumeId)
                .select('-__v')
                .exec((err, foundResume) => {
        if (err) {
            return res.status(422).send(err);
        }
        return res.json(foundResume);
    });

}

//ENDPOINT - POST DATA TO MONGODB
exports.saveResume = (req, res) => {
    const resumeData = req.body;
    console.log("CONTROLLER", resumeData)   
    const userId = req.user && req.user.sub;
    const resume = new Resume(resumeData);
    resume.userId = userId;
    console.log("THIS IS RESUME DATA", resumeData);

    resume.save((err, createdResume) => {
        if (err) {
            return res.status(422).send(err);
        }
        return res.json(createdResume);
    });
}

//ENDPOINT - UPDATE DATA IN MONGODB
exports.updateResume = (req, res) => {
    const resumeId = req.params.id;
    const resumeData = req.body;
   
    Resume.findById(resumeId, (err, foundResume) => {
        console.log("FOUND RESUME---", foundResume);
        if (err) {
            return res.status(422).send(err);
        }
        foundResume.set(resumeData);
        foundResume.save((err, savedResume) => {
            console.log("YES YES YES---", savedResume);
            if (err) {               
                return res.status(422).send(err);
            }           
            return res.json(savedResume);
        });
    })
}

//ENDPOINT - DELETE DATA IN MONGODB
exports.deleteResume = (req, res) => {
    const resumeId = req.params.id;
    console.log(resumeId);

    Resume.deleteOne({_id: resumeId}, (err, deletedResume) => {
        if (err) {                
            return res.status(422).send(err);
        }
        console.log(deletedResume);
        return res.json({status: 'DELETED'});
    })
}