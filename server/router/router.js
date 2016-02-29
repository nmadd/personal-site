var express = require('express');
var router = express.Router();
var ROOT = __dirname.slice(0,-14);

router.get('/', (req, res,next)=> {
    res.status('200').sendFile(ROOT + '/browser/public/index.html');
})


module.exports = router;