const { MongoClient } = require("mongodb");

// MongoDB connection URL
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

// Database and collection name
const dbName = "collegeDB";
const collectionName = "students";

async function run() {
  try {
    // ✅ Connect to MongoDB
    await client.connect();
    console.log("✅ Connected to MongoDB successfully!");

    // Select database and collection
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // ✅ Insert multiple student records
    const students = [
      { name: "Pranav", age: 21, branch: "CSE", marks: 85 },
      { name: "Sneha", age: 20, branch: "IT", marks: 90 },
      { name: "Rohit", age: 22, branch: "ECE", marks: 78 }
    ];

    const result = await collection.insertMany(students);
    console.log(`✅ ${result.insertedCount} student records inserted successfully!`);

    // ✅ Display all records
    const allStudents = await collection.find().toArray();
    console.log("\n📚 Student Records in Database:");
    console.table(allStudents);
  } catch (err) {
    console.error("❌ Error:", err);
  } finally {
    await client.close();
  }
}

run();
