const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    secret: "This is my secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

mongoose
  .connect("mongodb://127.0.0.1:27017/userAuth", {})
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", userSchema);

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.post("/registration", async (req, res) => {
  const { user_name, password } = req.body;

  if (user_name.length > 3 && password.length > 8) {
    try {
      const existingUser = await User.findOne({ username: user_name });

      if (existingUser) {
        res.status(400).send("A user with the same name already exists");
      } else {
        User.register(
          new User({ username: user_name }),
          password,
          (err, user) => {
            if (err) {
              console.error("Error registering user:", err);
              res.status(500).send("Server error");
            } else {
              res.status(200).end();
            }
          }
        );
      }
    } catch (err) {
      console.error("Error finding user:", err);
      res.status(500).send("Server error");
    }
  } else {
    res.status(400).json({ error: "Invalid username or password format" });
  }
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = new User({ username, password });

  req.login(user, (err) => {
    if (err) {
      console.error("Error logging in:", err);
      res.status(500).send("Server error");
    } else {
      passport.authenticate("local")(req, res, () => {
        res.status(200).send("Login successful");
      });
    }
  });
});

app.get("/test", async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).send("Server error");
  }
});

app.post("/logout", (req, res) => {
  if (req.isAuthenticated()) {
    req.logout();
    res.status(200).send("You have successfully logged out of your account");
  } else {
    res.status(401).send("You are not logged in");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
