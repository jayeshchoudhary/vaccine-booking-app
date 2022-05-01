const express = require("express");
const { getAllHospitals, addNewHospital } = require("../model/Hospital");
const router = express.Router();

router.get("/all-hospitals", async function (req, res, next) {
  try {
    const data = await getAllHospitals();
    res.send({
      success: true,
      data,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: error.message,
      data: null,
    });
  }
});

router.post("/", async function (req, res, next) {
  try {
    const data = await addNewHospital(req.body);
    res.send({
      success: true,
      data,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: error.message,
      data: null,
    });
  }
});

module.exports = router;
