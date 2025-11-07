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
    await mongoose.connect(url);
    console.log("Connected to MongoDB Successfully ✅");

    // ---------------- CREATE ----------------
    const students = [
      { Name: "Anuram", Roll: 21, Marks: 95 },
      { Name: "Varma", Roll: 22, Marks: 88 },
      { Name: "Kiran", Roll: 23, Marks: 76 },
      { Name: "Sai", Roll: 24, Marks: 92 },
      { Name: "Rohit", Roll: 25, Marks: 81 }
    ];

    await Student.insertMany(students);
    console.log("✅ Multiple Students Inserted!");

    // ---------------- READ ----------------
    const allStudents = await Student.find();
    console.log("\n📌 All Students:");
    console.log(allStudents);

    // Find only students with Marks > 80
    const topStudents = await Student.find({ Marks: { $gt: 80 } });
    console.log("\n🏆 Students with marks > 80:");
    console.log(topStudents);

    // ---------------- UPDATE ----------------
    await Student.updateMany({ Marks: { $lt: 85 } }, { Marks: 85 });
    console.log("\n✅ Updated marks of students scoring below 85!");

    // Show updated results
    const updatedStudents = await Student.find();
    console.log("\n📌 After Update:");
    console.log(updatedStudents);

    // ---------------- DELETE ----------------
    await Student.deleteOne({ Name: "Sai" });
    console.log("\n🗑️ Deleted student: Sai");

    await Student.deleteMany({ Marks: 85 });
    console.log("🗑️ Deleted students who had Marks = 85");

    // Final Data
    const finalData = await Student.find();
    console.log("\n📌 Final Data in DB:");
    console.log(finalData);

  } catch (err) {
    console.error(err);
  }
}

Crud();
