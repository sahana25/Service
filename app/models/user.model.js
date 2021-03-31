const { isValidObjectId } = require("mongoose");

module.exports = mongoose => {
    const User = mongoose.model(
      "user",
      mongoose.Schema(
        {
          id: Object,
          Company: String,
          firstName: String,
          lastName: String,
          email: String,
          password: String,
        },
        { timestamps: true }
      )
    );
  
    return User;
  };