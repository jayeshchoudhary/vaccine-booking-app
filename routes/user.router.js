var express = require("express");
const { getAllAppointmentByUser } = require("../model/Appointment");
const { userSignUp, validateLogin, editUser } = require("../model/User");
const User = require("../model/User");
var router = express.Router();

router.post("/signup", async function (req, res) {
  try {
    const data = await userSignUp(req.body);
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

router.post("/login", async function (req, res) {
  try {
    const data = await validateLogin(req.body);
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

router.get("/my-appointments/:userId", async function (req, res) {
  try {
    const { userId } = req.params;
    const data = await getAllAppointmentByUser(userId);
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

router.put("/update-profile", async function (req, res) {
  try {
    const data = await editUser(req.body.userId, req.body);
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

router.get("/:email", async function (req, res) {
  try {
    const { email } = req.params;
    const data = await User.getUserDetailsByEmail(email);
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
