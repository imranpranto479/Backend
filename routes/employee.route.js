const {
  getAllEmployee,
  createEmployee,
  getOneEmployee,
  deleteEmployee,
  updateEmployee,
  toggleBlockEmployee,
} = require("../controllers/employee.controller");
const {
  createEmployeeValidation,
  updateEmployeeValidation,
} = require("../helpers/employee.validation");
const validateRequest = require("../middlewares/validate.request");
const router = require("express").Router();

router.post("/", validateRequest(createEmployeeValidation), createEmployee);

router.get("/", getAllEmployee);
router.get("/:id", getOneEmployee);
router.put("/:id", validateRequest(updateEmployeeValidation), updateEmployee);

router.patch("/:id", toggleBlockEmployee);

router.delete("/:id", deleteEmployee);

module.exports = router;
