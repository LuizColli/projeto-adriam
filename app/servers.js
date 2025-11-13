const express = require('express');
const client = require('prom-client');

const app = express();

client.collectDefaultMetrics();

const counter = new client.Counter({
    name: "app_request_total",
    help: "contador de requisições recebidas"
});

app.get('/', (req, res) => {
    counter.inc();
    res.send("Prometheus + Grafana + Kubernetes (teste2)");
});

app.get('/metrics', async (req, res) => {
    res.set('Content-Type', client.register.contentType);
    res.end(await client.register.metrics());
});

app.listen(3000, () => {
    console.log('App running on port 3000');
});
