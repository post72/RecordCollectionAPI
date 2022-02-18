const express = require("express");
const router = express.Router();
const recordData = require("../controllers/recordController");
const jwt = require("express-jwt");
const jwks = require("jwks-rsa");
require("dotenv").config();

jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: process.env.JWKSURI,
    }),
    audience: process.env.AUDIENCE,
    issuer: process.env.ISSUER,
    algorithms: ["RS256"],
});

// NO JWT CHECK FOR THIS ROUTE
router.get("/all", recordData.list_all_records);
// ROUTES ARE PROTECTED WITH JWT CHECK
router.get("/", jwtCheck, recordData.list_all_records);
router.post("/", jwtCheck, recordData.create_a_record);
router.get("/:recordId", jwtCheck, recordData.read_a_record);
router.put("/:recordId", jwtCheck, recordData.update_a_record);
router.delete("/:recordId", jwtCheck, recordData.delete_a_record);

module.exports = router;
