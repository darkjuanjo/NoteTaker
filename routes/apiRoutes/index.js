const router = require('express').Router();
const notesRoutes = require('./notesRoute');

router.use(notesRoutes);

module.exports = router;
