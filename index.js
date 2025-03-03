import express from  "express";
import bodyParser from "body-parser";

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
const port = 3000;

app.get("/", (req,res) =>{
    res.render("index.ejs");
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})