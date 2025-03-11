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
        postBody: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
        link: `http://localhost:3000/posts/1`
    }
];

function getFormattedDate(){
    return new Date().toLocaleString();
}

app.get("/", (req,res) =>{
    res.render("index.ejs", {posts: posts});
});

app.get("/create", (req,res) => {
    res.render("form_page.ejs", 
        {
            formTitle: "Create post", 
            formActionLink: "/create#posts",
            btnValue: "Create"
        });
});
app.post("/create", (req,res) => {
    const newPost = {
        title: req.body["postTitle"],
        createdAt: getFormattedDate(),
        postBody: req.body["postBody"],
        link: `${req.protocol}://${req.get("host")}/posts/${posts.length + 1}`
    }

    posts.push(newPost);
    res.redirect("/");
});

app.get("/posts/:postId", (req,res) => {
    const postId = req.params.postId - 1;
    if(postId < posts.length && postId >= 0){
        res.render("view_post_page.ejs", {post: posts[postId], postId: (postId + 1)});
    }else{
        res.render("view_post_page.ejs");
    }
})

app.get("/posts/:postId/edit", (req,res) => {
    const postId = req.params.postId - 1;
    if(postId < posts.length && postId >= 0){
        const post = posts[postId];
        res.render("form_page.ejs", 
            {
                formTitle: "Edit post", 
                formActionLink: `/posts/${postId+ 1}/edit`,
                btnValue: "Edit",
                postTitleData: post.title,
                postBodyData: post.postBody
            });
    }else{
        res.redirect("/");
    }
})

app.post("/posts/:postId/edit", (req,res) => {
    const postId = req.params.postId - 1;
    
    const post = posts[postId];
    post.postBody = req.body.postBody;
    post.title = req.body.postTitle;

    res.redirect("/#posts");
})

app.get("/posts/:postId/delete", (req,res) => {
    
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});