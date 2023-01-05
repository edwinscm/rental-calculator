const router = require("express").Router();
const database = require("../../postgresql/index");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/user/sign-up", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const sqlQuery = `INSERT INTO users (email, password) VALUES ('${req.body.email}', '${hashedPassword}')`;
    await database.query(sqlQuery);
    res.status(201).json("Sign up success");
  } catch (error) {
    res.status(401).json(error);
  }
});

router.post("/user/sign-in", async (req, res) => {
  try {
    const sqlQuery = `SELECT * FROM users WHERE email=$1`;
    const { rows } = await database.query(sqlQuery, [req.body.email]);
    const response = rows[0];
    const checkPassword = await bcrypt.compare(
      req.body.password,
      response.password
    );
    if (checkPassword) {
      const token = await jwt.sign(
        { id: response.user_id },
        "863247591871688EE154BAAD2F43EBE1C423236FC2F91977C304D1619F7376B3",
        {
          expiresIn: "900s",
        }
      );
      const { password, ...user } = response;
      res.status(201).json({ token, user });
    } else {
      res.status(401).json("Sign in failed");
    }
  } catch (error) {
    res.status(401).json(error);
  }
});

module.exports = router;
