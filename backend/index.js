const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;
const redirect_uri = process.env.REDIRECT_URI;

app.get('/auth/monday', (req, res) => {
    const authURL = `https://auth.monday.com/oauth2/authorize?client_id=fc53585ee621653bb635dd52f72a2dfc`;
    res.redirect(authURL);
});

app.get('/auth/callback', async (req, res) => {
    const code = req.query.code;
    try {
        const response = await axios.post('https://auth.monday.com/oauth2/token', {
            client_id: client_id,
            client_secret: client_secret,
            redirect_uri: redirect_uri,
        });
        const accessToken = response.data.access_token;
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(process.env.PORT || 4000, () => {
    console.log(`Server is running on port ${process.env.PORT || 4000}`);
});
