const express = require("express");
const employeeRouter = require('./routes/employee.route')
const employeeController = require('./controllers/employee.controller')
const mongoDbConnection = require('./config/db')

const app = express();
mongoDbConnection

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/employees", employeeRouter)

//api/get-employees :GET
//api/getemployees/:id :GET
//api/employees :POST
//api/employees/:id :PATCH
//api/employees/:id :DELETE


//route not found error
app.use((req, res, next) => {
  res.status(404).json({
    message: "route not found",
  });
});
//handling server error
app.use((err,req, res, next) => {
    res.status(500).json({
      message: "something broke",
    });
  });
  

module.exports = app;
