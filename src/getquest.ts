import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

const app = express();
const port = 3000;

dotenv.config({ path: '.env' });

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

app.get('/getting', async (req, res) => {
    const randQuestion = req.query.questionId;

    try {
        const { data, error } = await supabase
            .from('questions')
            .select('*')
            .eq('question_id', randQuestion?.toString());

        if (error) {
            throw error;
        }

        console.log('answer got!');
        res.json(data);
    } catch (err: any) {
        console.error('error getting data from supabase: ' + err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/getans', async (req, res) => {
    const quest = req.query.questionId;

    try {
        const { data, error } = await supabase 
            .from('answers')
            .select('*')
            .eq('question_id', quest);

        if (error) {
            throw error;
        }

        console.log('answer got!');
        res.json(data);
    } catch (err: any) {
        console.error('error getting data from supabase: ', err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`);
});
