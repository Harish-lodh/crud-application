const mongoose = require("mongoose");

const DB = process.env.DATABASE;
// Function to connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to DB successfully");
    } catch (error) {
        console.error("DB connection error:", error.message);
    }
};

// Call the connection function
connectDB();
