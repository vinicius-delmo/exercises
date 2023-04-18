import express from 'express';
const router = express.Router();

const bikes = [
  { id: 1, marca: 'Caloi', modelo: '10' },
  { id: 2, marca: 'Scott', modelo: 'Spark' },
  { id: 3, marca: 'Trek', modelo: 'Marlin' },
];

router.get('/', (req, res) => {
  res.send(bikes);
});

router.get('/:id', (req, res) => {
  const bike = bikes.find(bike => bike.id === parseInt(req.params.id));
  res.send(bike);
});

router.post('/', (req, res) => {
  const bike = {
    id: bikes.length + 1,
    marca: req.body.marca,
    modelo: req.body.modelo,
  };
  bikes.push(bike);
  res.send(bike);
});

router.put('/:id', (req, res) => {
  const bike = bikes.find(bike => bike.id === parseInt(req.params.id));
  (bike.marca = req.body.marca),
    (bike.modelo = req.body.modelo),
    res.send(bike);
});

router.delete('/:id', (req, res) => {
  const bike = bikes.find(bike => bike.id === parseInt(req.params.id));
  const index = bikes.indexOf(bike);
  bikes.splice(index, 1);
  res.send(bike);
});

export default router;
