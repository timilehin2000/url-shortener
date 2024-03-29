const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const app = require("./app");

const databaseURI =
  process.env.NODE_ENV == "production"
    ? process.env.PROD_DATABASE
    : process.env.DEV_DATABASE;

const connectDB = async (cb = () => {}) => {
  try {
    await mongoose.connect(databaseURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("DATABASE is working");
    cb();
  } catch (err) {
    console.log(err);
  }
};

//error handling middleware functions
app.use((req, res, next) => {
  const err = new Error();
  err.message = "Not found";
  next(err);
});

app.use((err, req, res, next) => {
  res.json({
    error: {
      message: err.message,
    },
  });
});

const port = process.env.PORT;
const startServer = () =>
  app.listen(port, () => {
    console.log("app is running on port 3000");
  });

connectDB(startServer);
