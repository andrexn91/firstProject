const express = require('express');
const app = express();
const port = 3000;

let prenotazioni = [
    {id: 1, nome: 'Mario Rossi', data: '2024-07-01', ora: '10:00', campo: 'Campo 1'},
    {id: 2, nome: 'Luigi Verdi', data: '2024-07-02', ora: '12:00', campo: 'Campo 2'}
];

app.use(express.json());

app.get('/api/prenotazioni', (req, res) => {
    res.json(prenotazioni);
});

app.post('/api/prenotazioni', (req, res) => {
    const nuovaPrenotazione = req.body;
    nuovaPrenotazione.id = prenotazioni.length ? prenotazioni[prenotazioni.length - 1].id + 1 : 1;
    prenotazioni.push(nuovaPrenotazione);
    res.status(201).json(nuovaPrenotazione);
});

app.delete('/api/prenotazioni/:id', (req, res) => {
    const id = parseInt(req.params.id);
    prenotazioni = prenotazioni.filter(prenotazione => prenotazione.id !== id);
    res.status(204).send();
});

app.listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`);
});
