const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true,
});

const User = mongoose.model("User", {
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is not valid");
      }
    },
  },
  age: {
    type: Number,
    validate(value) {
      if (value < 0) {
        throw new Error("Age must be positive");
      }
    },
  },

  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 7,
    // validate(value) {
    //   if (value.include("password")) {
    //     throw new Error("email's length is not greater than 6");
    //   }
    // },
  },
});

const me = new User({
  name: "Dilshan",
  email: "yasindu@gmail.com",
  age: 27,
  password: "mypassword",
});

me.save()
  .then(() => {
    console.log(me);
  })
  .catch((error) => {
    console.log("Error", error);
  });

//define the model
const Task = mongoose.model("Task", {
  description: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

//create the  new instance of the model
const t = new Task({
  description: "Complete the Nodejs Course",
  completed: false,
});

//save the model to the database
t.save()
  .then(() => {
    console.log(t);
  })
  .catch((error) => {
    console.log(error);
  });
