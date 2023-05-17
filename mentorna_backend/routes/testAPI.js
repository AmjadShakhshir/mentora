var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
    res.json({
        message: "API is working properly",
        title: "Hanna",
        name: "Mentorna"
    });
});

module.exports = router;