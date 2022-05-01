const express = require("express");
const {
  getAppointmentDetailsById,
  updateAppointmentStatus,
  newAppointment,
  getAllAppointments,
} = require("../model/Appointment");
const router = express.Router();

router.post("/", async function (req, res) {
  try {
    const data = await newAppointment(req.body);
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

router.get("/all-appointments", async function (req, res) {
  try {
    const data = await getAllAppointments();
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

router.get("/:appointmentId", async function (req, res) {
  try {
    const { appointmentId } = req.params;
    const data = await getAppointmentDetailsById(appointmentId);
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

router.put("/:status/:appointmentId", async function (req, res) {
  try {
    const { appointmentId, status } = req.params;
    const data = await updateAppointmentStatus(appointmentId, status);
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
