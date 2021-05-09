import express from "express";
const router = express.Router();
import aws from "aws-sdk";
var ses = new aws.SES({ region: "us-east-2" });

router.get("/upload", function (req, res) {
  res.send("/upload called successfully... from 1");
});

router.post("/email", function (req, res) {
  const { email } = req.body;
  console.log("req", req.body);
  sesTest(email)
    .then((val) => {
      console.log("got this back", val);
      res.send("Successfully Sent Email");
    })
    .catch((err) => {
      res.send("/error");

      console.log("There was an error!", err);
    });
});

function sesTest(email) {
  var params = {
    Destination: {
      ToAddresses: [email]
    },
    Message: {
      Body: {
        Text: { Data: "Test" }
      },

      Subject: { Data: "Test Email" }
    },
    Source: "icystorm@gmail.com"
  };

  return ses.sendEmail(params).promise();
}

export default router;
