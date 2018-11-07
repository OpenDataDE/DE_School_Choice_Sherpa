const express = require('express');
const server = express();
const knex = require('knex');
const morgan = require('morgan');
const helmet = require('helmet');
const dbConfig = require('./knexfile');
const db = knex(dbConfig.development);

server.use(helmet());
server.use(express.json())
server.use(morgan('combined'));

server.get('/api/school', async (req, res) => {
    try{
        const response =  await db('School_Directory');
        res.status(201).json(response);
    } catch(err){
        res.status(500).json({ message: "Cannot get from server"});
    }
})

const PORT = 5000;
server.listen(PORT, () => {
    console.log(`server is listening at port: ${PORT}`);
})