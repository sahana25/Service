module.exports = app => {
    const users = require("../controllers/user.controller.js");
  
    var router = require("express").Router();
  
    // Create a new User
    router.post("/", users.create);
    // Find all Users
    router.get("/", users.findAll);
    //Find single User
    router.get("/:id",users.findOne);
    //Update a user by ID
    router.post("/:id",users.update);
    //Delete a user by ID
    router.delete("/:id",users.delete);

    app.use('/api/users',router);

}
  
 
  
