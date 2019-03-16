const express = require('express');
const router = express.Router();

//Item Model
const students = require('../../models/student');

//@route GET api/items
//@desc Get items
//@access Public
router.get('/', (req,res) => {
    console.log('GET request');
    students.find()
        .sort({date: -1})
        .then(items => res.json(items));
});

//@route POST api/items
//@desc Create An Item
//@access Public
router.post('/', (req,res) => {
    console.log('POST request');
    const newItem = new students({
        name : req.body.name
    });
    newItem.save()
        .then(item => res.json(item));
});

//@route DELETE api/items
//desc Delete an item
//@access Public
router.delete('/:id', (req,res) => {
    console.log('Delete request');
    item.findById(req.params.id)
        .then(item => item.remove().then(()=>{
            res.json({success: true})
        }))
        .catch(err => res.status(404).json({success: false}));
});

module.exports = router;