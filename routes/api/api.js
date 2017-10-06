
const router = require("express").Router();
const controller = require("../../controllers/controller");


router.route("/create")
  .post(controller.create);

router.route("/signIn/:username")
  .get(controller.findByUsername);

module.exports = router;
