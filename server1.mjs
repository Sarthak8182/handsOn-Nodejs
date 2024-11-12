import express from "express"
import fs from "fs";

const app = express();
app.use(express.json())
console.log(process.env.PORT)
const PORT = process.env.PORT || 3000;
// GET POST PUT DELETE

app.get("/", (request, response) => {
    fs.readFile("./phonebook.json", (err, data)=>{
        if(err){
            response.status(500).send("Internal server Error");
        return false;        
    }
    response.setHeader("content-type" , "application/json");
    response.send(data);
    })
})


app.post("/", (request, response) => {
    fs.readFile("./phonebook.json", (err, data)=>{
        if(err){
            response.status(500).send("Internal server Error");
        return false;        
    }
    const content = JSON.parse(data);
    content.push(request.body);

    fs.writeFile("./phonebook.json", JSON.stringify(content), () => { 
        response.send(content);
      });
    });
});


app.get("/products", (request, response) => {
    response.send("This is product page")
})

console.log(PORT)
app.listen(PORT, ()=>{
    console.log(`Server started at port ${PORT}`);
})