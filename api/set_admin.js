const mongoose = require("mongoose");
const User = require("./models/user"); // Replace with your User model file path
const connectDB = require("./db/connect");

const update = async () => {
  await connectDB(process.env.MONGO_URI);

  // Update admin field for a specific user
  User.updateOne(
    { _id: "655cdaca1545b778d1e71d02" }, // Replace with the user's ID
    { $set: { role: "admin" } },
    (err, result) => {
      if (err) {
        console.error(err);
      } else {
        console.log("Admin field updated successfully");
        //   mongoose.disconnect();
      }
    }
  );
};

update();
