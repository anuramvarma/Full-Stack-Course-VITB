const mongoose = require("mongoose");
const url =
  "mongodb+srv://anuramvarma:Anuram123456@cluster0.kfxkraa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const StudentSchema = new mongoose.Schema({
  Name: String,
  Roll: Number,
  Marks: Number,
});

const Student = mongoose.model("Student", StudentSchema);

async function Crud() {
  try {
 await mongoose
  .connect(url)
  .then(() => console.log("Connected to MongoDB Successfully ✅"))
  .catch((err) => console.log(err));

    // Create
    const newStudent = await Student.create({
      Name: "Anuram",
        Roll:21,
        Marks:95
    });
    console.log("Data inserted");
    // Read
    const AllStudents=await Student.find({Name:"Anuram"});
    console.log(AllStudents);
    
    //Update
    await Student.updateOne({ Name: "Gowtham" }, { Marks: 99 });
    console.log("Marks Updated Successfully");
    //Delete
    await Student.deleteOne({ Name: "Anuram" });
    console.log("Deleted the data");
  }
  catch (err) {
    console.error(err);
  }
}
Crud();
