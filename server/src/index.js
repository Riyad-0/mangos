import express from 'express';

const port = 3000;
const app = express();

app.get('/api/hello', (req, res) => {
  res.send("Hello!");
});

app.listen(port, () => console.log(`api: http://localhost:${port}`));

export default app;