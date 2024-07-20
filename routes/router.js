const router = require("express").Router()

// Services router
const servicesRouter = require("./services.js");
router.use("/", servicesRouter);

// Partis routes
const partyRouter = require("./parties.js");
router.use("/", partyRouter);

module.exports = router;