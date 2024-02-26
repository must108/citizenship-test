import * as sql from 'mysql2';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

const connection = sql.createConnection({
    host: "YOUR_HOSTNAME_HERE",
    user: "YOUR_USERNAME_HERE",
    password: "YOUR_PASSWORD_HERE",
    database: "YOUR_DB_HERE"
});

connection.connect((err: any) => {
    if(err){
        console.log("error connecting to mysql " + err.stack);
        return;
    }
    console.log("connected to mysql as id " + connection.threadId);
});

app.get('/getting', (req, res) => {
    const randQuestion = req.query.questionId;

    const sqlQuery = 'select * from questions where question_id = ?'
    connection.query(sqlQuery, [randQuestion], (err: any, result: any) => {
        if(err){
            console.error('error getting data from mysql' + err.stack);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        console.log('question got!');
        res.json(result);
    });
});

app.get('/getans', (req, res) => {
    const quest = req.query.questionId;

    const sqlQuery = 'select * from answers where question_id = ?';
    connection.query(sqlQuery, [quest], (err: any, result: any) => {
        if(err) {
            console.error('error getting data from mysql' + err.stack);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        console.log('answer got!');
        res.json(result);
    });
});

app.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`);
});
