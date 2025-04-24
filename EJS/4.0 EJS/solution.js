import express from "express";
const app = express();
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}
);
app.get("/", (req, res) => {
  const today = new Date();
  const day = today.getDay();
  let weekde = "";
  let adv = "";
  if (day === 0 || day === 6) {
    weekde = "Weekend";
    adv = "Take a rest!";
  }
  else {
    weekde = "Weekday";
    adv = "Work hard!";
  }
  // instead of sender, we use res.render to send the response to the client using the EJS
  res.render("solution.ejs",{
  dayType: weekde,
  advice: adv});
  });