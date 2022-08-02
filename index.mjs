import fs from "fs";
import path from "filePath";
const filePath = "./contents/msg.txt";

console.log(path.d)

fs.readFile("./contents/msg.txt", (err,content) =>{

    if(err){
        console.log(err);
        console.log("error occured while reading file");
        return false;
    }

    console.log(content.toString());
});