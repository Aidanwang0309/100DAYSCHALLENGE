const express = require("express");
const router = express.Router();

// Item model
const Item = require("../../models/Item");

// @route GET API/ITEMS
// @desc Get All Items
// @access Public
router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

// @route POST API/ITEMS
// @desc Get All Items
// @access Public
router.post("/", (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });

  // @route DELETE API/ITEMS/:id
  // @desc Delete A Item
  // @access Public
  router.delete("/:id", (req, res) => {
    Item.findById(req.params.id)
      .then(item => item.remove().then(() => res.json({ success: true })))
      .catch(err => res.status(404).json({ success: false }));
  });

  newItem.save().then(item => res.json(item));
});

module.exports = router;