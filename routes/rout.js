const express = require('express');
const router = express.Router();

const Doc = require('../model/doc-model');

// router.post('/creat', (req,res)=>{
//     const newDoc = new Doc({
//         title: req.body.title,
//         image: req.body.image,
//         // fields:[req.body.fields]
//     });
//     newDoc.save().then(doc=>{
//         res.json(doc);
//     })
// })
router.post("/creat", (req, res)=>{
    Doc.create(req.body)
      .then(mugger => {
        res.send(mugger);
      });
  });
module.exports = router;
