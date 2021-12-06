import  Express  from "express";

const app = Express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello word");
});

app.listen(port, () => {
  console.log(`escuchando puerto ${port}`);
});
