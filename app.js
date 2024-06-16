const express = require("express");
const employeeRouter = require("./routes/employee.route");
const mongoDbConnection = require("./config/db");

const app = express();
mongoDbConnection;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/employees", employeeRouter);

//route not found error
app.use((req, res, next) => {
  res.status(404).json({
    message: "route not found",
  });
});
//handling server error
app.use((err, req, res, next) => {
  res.status(500).json({
    message: "something broke",
  });
});

module.exports = app;
