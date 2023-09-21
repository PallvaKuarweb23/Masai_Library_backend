const { BookModel } = require("../../../Model/Book.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function bookpost(req, res) {
    try {
        const { title, body, user, userID, live } = req.body;

        // Check if any of the required fields are blank
        if (!title || !body || !user || !userID || live === undefined) {
            return res.status(400).json({ "msg": "All fields are required." });
        }

        const article = new BookModel({
            title,
            body,
            user,
            userID,
            live
        });

        await article.save();

        res.status(200).json({ "msg": "Article is added", article });
    } catch (err) {
        res.status(401).json({ "msg": err.message });
    }
}

module.exports = {
    bookpost
};
