const router = require("express").Router();
const bookRoutes = require("./books");
const userRoutes = require("./api");

// Book routes
router.use("/books", bookRoutes);
router.use("/users", userRoutes);

module.exports = router;
