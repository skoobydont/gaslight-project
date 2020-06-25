const express = require('express')
const router = express.Router()

router.get('/users', async (req, res) => {
    try {
        res.json([
            { id: 1, username: "u1", dateCreated: Date.now() },
            { id: 2, username: "u2", dateCreated: Date.now() },
            { id: 3, username: "u3", dateCreated: Date.now() }
        ]);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
    
})

module.exports = router