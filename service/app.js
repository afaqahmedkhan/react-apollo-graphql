const express = require("express");
const app = express();
const exposure_data = require("./dummy_data/exposure_data");
const person_data = require("./dummy_data/person_data");
const facility_data = require("./dummy_data/facility_data");

app.get("/my-service/person/:input", (req, res) => {
  const result = person_data.find((person) => person.id === req.params.input);
  return res.send(result);
});

app.get("/my-service/facility/:val1", (req, res) => {
  const result = facility_data.find(
    (facility) => facility.val1 === req.params.val1
  );
  return res.send(result);
});

app.get("/my-service/exposure/:val2", (req, res) => {
  const result = exposure_data.find(
    (exposure) => exposure.val2 === req.params.val2
  );
  return res.send(result);
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`server has started on port: ${PORT}`));
