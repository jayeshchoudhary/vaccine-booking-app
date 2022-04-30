const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const connectToDB = require("./db/dbConnection");

const PORT = 3000;
const app = express();

const usersRouter = require("./routes/user.router");
const appointmentRouter = require("./routes/appointment.router");
const hospitalRouter = require("./routes/hospital.router");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/users", usersRouter);
app.use("/appointment", appointmentRouter);
app.use("/hospital", hospitalRouter);

connectToDB();

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
