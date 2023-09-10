require('dotenv').config();
const express = require('express');
const httpErrors = require('http-errors');

const app = express();
const cors = require('cors');

app.use(express.json());

app.use(cors());

const playerRoutes = require('./routes/player.route');

app.use('/api', playerRoutes);

app.use(async (req, _res, next) => {
    console.log(req, _res);
    next(httpErrors.NotFound(`Route not Found for [${req.method}] ${req.url}`));
});

// Common Error Handler
app.use((error, req, res, next) => {
    const responseStatus = error.status || 500;
    const responseMessage =
        error.message || `Cannot resolve request [${req.method}] ${req.url}`;
    if (res.headersSent === false) {
        res.status(responseStatus);
        res.send({
            error: {
                status: responseStatus,
                message: responseMessage,
            },
        });
    }
    next();
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is listening on the port ${PORT}`);
})