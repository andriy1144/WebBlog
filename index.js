import express from  "express";
import bodyParser from "body-parser";

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
const port = 3000;

const posts = [
    {
        title: "First Post Title", 
        createdAt: getFormattedDate(), 
        postBody: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting."
    }
];

function getFormattedDate(){
    return new Date().toLocaleString();
}

app.get("/", (req,res) =>{
    res.render("index.ejs", {posts: posts});
});

app.get("/create", (req,res) => {
    res.render("create_page.ejs");
});
app.post("/create", (req,res) => {
    const newPost = {
        title: req.body["postTitle"],
        createdAt: getFormattedDate(),
        postBody: req.body["postBody"]
    }

    posts.push(newPost);
    res.redirect("/");
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});