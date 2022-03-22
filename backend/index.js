const express = require('express');
const cors = require('cors');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/lists', (req, res) => {
    try {
        const lists = JSON.parse(fs.readFileSync('./db.json', 'utf-8'));
        return res.json(lists);
    } catch (error) {
        res.status(500).json(error);
    }
});

app.post('/lists', (req, res) => {
    try {
        const lists = JSON.parse(fs.readFileSync('./db.json', 'utf-8'));
        const { title, author } = req.body;
        lists.push({
            id: uuidv4(),
            title,
            author
        });
        fs.writeFileSync('./db.json', JSON.stringify(lists));
        return res.json({ message: 'success' });
    } catch (error) {
        res.status(500).json(error);
    }
});

app.delete('/lists/:id', (req, res) => {
    try {
        const lists = JSON.parse(fs.readFileSync('./db.json', 'utf-8'));
        const { id } = req.params;
        const listsFiltered = lists.filter((list) => list.id.toString() !== id.toString());
        fs.writeFileSync('./db.json', JSON.stringify(listsFiltered));
        return res.json({ message: 'success' });
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = app;

const PORT = 3001;
app.listen(PORT, () => console.log(`PORT: ${PORT}`));