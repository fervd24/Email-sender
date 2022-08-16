const { Router } = require("express");
const postMail = require("../controllers/contact");
const router = Router();

router.post('/',postMail);

module.exports = router;