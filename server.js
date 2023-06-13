// const apm = require('elastic-apm-node').start();

const express = require('express');
require("dotenv").config();

const methodOverride = require("method-override");
const bodyParser = require("body-parser").json();
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const cors = require("cors");


const app = express();
const port = process.env.PORT;


//middleware-every request goes through it
app.use(cors());
app.use(bodyParser);
app.use(cookieParser());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

const routes = require("./routes");

app.use("/", routes.system);
app.use("/v1/users", routes.users);

// const morgan = require('morgan');
//
// morgan.token('param', function (req, res) { return JSON.stringify(req.params) });
// app.use(morgan(':remote-addr - :remote-user ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent" :response-time :param'));
//
//
// const client = require('prom-client');
//
// const collectDefaultMetrics = client.collectDefaultMetrics;
// collectDefaultMetrics({ timeout: 5000 });
//
// const counter = new client.Counter({
//     name: 'node_request_operations_total',
//     help: 'The total number of processed requests'
// });
//
// app.use((req, res, next) => {
//     counter.inc();
//     next();
// });
//
// app.get('/metrics', (req, res) => {
//     res.set('Content-Type', client.register.contentType);
//     res.end(client.register.metrics());
// });
//
// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });
//
// const { Client } = require('@elastic/elasticsearch')
// const client = new Client({ node: process.env.ELKPath })
//
// app.use((req, res, next) => {
//     client.index({
//         index: 'my-index',
//         body: {
//             // your log data
//         }
//     }, (err, result) => {
//         if (err) console.log(err);
//     });
//     next();
// });
//
// const http = require('http')
// const winston = require('winston')
// const ecsFormat = require('@elastic/ecs-winston-format')
//
// const logger = winston.createLogger({
//     level: 'debug',
//     format: ecsFormat({ convertReqRes: true }),
//     transports: [
//         //new winston.transports.Console(),
//         new winston.transports.File({
//             //path to log file
//             filename: 'logs/log.json',
//             level: 'debug'
//         })
//     ]
// })
//
// const server = http.createServer(handler)
// server.listen(3000, () => {
//     logger.info('listening at http://localhost:3000')
// })
//
// function handler (req, res) {
//     res.setHeader('Foo', 'Bar')
//     res.end('ok')
//     logger.info('handled request', { req, res })
// }

const server = app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
});
function gracefulShutdown() {
    console.log('\nStarting graceful shutdown...');
    server.close(() => {
        console.log('Server closed');
        // If you're using a database, you should also close the database connection here
        process.exit();
    });

    // If server hasn't finished in a given time, force it closed
    setTimeout(() => {
        console.error('Could not close connections in time, forcefully shutting down');
        process.exit(1);
    }, 30 * 1000); // 30 seconds
}

// Listen for the signals and run the graceful shutdown function
process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);