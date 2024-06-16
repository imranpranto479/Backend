const Employee = require("../models/employee.model");

const createEmployee = async (req, res) => {
  try {
    const newEmployee = new Employee({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
    });
    await newEmployee.save();
    res.status(201).json({
      message: "Employee info added successfully!",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllEmployee = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getOneEmployee = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    const formattedEmployee = {
      fullname: `${employee.firstName} ${employee.lastName}`,
      email: employee.email,
      phone: employee.phoneNumber,
    };
    res.status(200).json(formattedEmployee);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateEmployee = async (req, res) => {
  const { firstName, lastName, phoneNumber } = req.body;
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    employee.firstName = firstName || employee.firstName;
    employee.lastName = lastName || employee.lastName;
    employee.phoneNumber = phoneNumber || employee.phoneNumber;
    await employee.save();
    res.json(employee);
  } catch (err) {
    res.status(500).json({ error: error.message });
  }
};

const toggleBlockEmployee = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    employee.isBlocked = !employee.isBlocked;
    await employee.save();
    res.json(employee);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.deleteOne({ _id: req.params.id });
    res.status(200).json({
      message: "Employee is deleted!",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllEmployee,
  createEmployee,
  getOneEmployee,
  updateEmployee,
  toggleBlockEmployee,
  deleteEmployee,
};
