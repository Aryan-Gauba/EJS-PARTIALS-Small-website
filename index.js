import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

// Recreate __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ... your app = express() setup ...

// Use the absolute paths
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

/* Write your code here:
Step 1: Render the home page "/" index.ejs
Step 2: Make sure that static files are linked to and the CSS shows up.
Step 3: Add the routes to handle the render of the about and contact pages.
  Hint: Check the nav bar in the header.ejs to see the button hrefs
Step 4: Add the partials to the about and contact pages to show the header and footer on those pages. */

app.get("/",(req,res)=>{
  res.render("index.ejs")
});

app.get("/about",(req,res)=>{
  res.render("about.ejs")
});

app.get("/contact",(req,res)=>{
  res.render("contact.ejs")
});

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

export default app;