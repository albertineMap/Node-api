// Filename: api-routes.js
// Initialize express router
const router = require('express').Router();
let contactController = require('../Controller/ContactController');

// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to my first api with nodejs!'
    });
});

// Contact routes
router.route('/contacts')
    .get(contactController.index)
    .post(contactController.new);
    
router.route('/contacts/:contact_id')
    .get(contactController.view)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete);



// router.get('/', (req,res) =>{
//     PostsModel.find((err,docs) =>{
//         console.log(docs)
//         if(!err) res.send(docs)
//         else console.log("Error find : "+ err);
//     })
// })

// router.post('/ ', (req,res) =>{
//     const newRecord = new PostsModel({
//         author : req.body.author,
//         message: req.body.message
//     });

//     newRecord.save((err, docs) =>{
//         if(!err) res.send(docs);
//         else console.log("Error create: "+ err);

//     })
// })

module.exports = router;



