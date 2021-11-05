const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());


app.post('/', (req, res) => {

    const {email} = req.body;

    const quickemailverification = require('quickemailverification')
        .client('b03646e3253469318d0b8b3dca50b09fe66b0eb594ed58cdf0ee649ca1c1')
        .quickemailverification(); // Replace API_KEY with your API Key

    // Email address which need to be verified
    quickemailverification.verify(email, function (err, response) {
        // Print response object

        res.json({reason: response.body.reason});
        
    });


});

app.listen(5000);