require("dotenv").config()

const development = {
    app:{
        port: process.env.PORT || 4000
    },
    db:{
        url: process.env.DB_URL || "mongodb://localhost:27017/employeeDB"
    }
}

module.exports = development