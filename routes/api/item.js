const express = require('express');
const router = express.Router();

// @route GET api/items
// @desc Get All Items
//@acess public
router.get('/', (req, res) => {
    
});

// @route POST api/items
// @desc create item
//@acess public
router.post('/', (req, res) => {
    
});

// @route POST api/items:id
// @desc delete an item
//@acess public
router.delete('/:id', (req, res) => {
    
});

module.exports = router;