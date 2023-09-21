const { UserModel } = require("../../Model/User.model");
const bcrypt = require("bcrypt");

async function registerController(req, res) {
    const { name, email, password, city, age } = req.body;

    // Check if all required fields are provided
    if (!name || !email || !password || !city || !age) {
        return res.status(400).json({ msg: "All fields are required." });
    }
    
    try {
        // Hash the password
        const hash = await bcrypt.hash(password, 5);
        
        // Create a new user
        const user = new UserModel({ name, email, password: hash, city, age });
        
        // Save the user to the database
        await user.save();
        
        res.status(200).json({msg: "New User is Registered" });
    } catch (err) {
        res.status(500).json({ msg: "Something went wrong", "error": err.message });
    }
}

module.exports = {
    registerController
};
