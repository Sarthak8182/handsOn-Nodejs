import express, { json } from "express";
import validator from "validator";
import { UserModel } from "../models/users.mjs"

const Router = express.Router();
Router.get("/", async (req, res) => {
    try {
        const users = await UserModel.find();
        // res.json(users);
        res.render("users", { users : users });
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error.");
    } 
});

Router.get("/add-user", (req, res)=>{
    res.render("add-user");
})

// /users
Router.post("/add-user", async (request, response) => {
    try {
        const body = request.body;
        const {email, firstName, lastName} = body;
        

        if(!validator.isEmail(email)){
            response.status(401).send("Incorrect email"); 
            return false;
        }
        if(!validator.isEmpty(firstName)){
            response.status(401).send("Incorrect firstName"); 
            return false;
        }
        if(!validator.isEmpty(lastName)){
            response.status(401).send("Incorrect lastName"); 
            return false;
        }
        const newUser = new UserModel(body)

        await newUser.save()
        
        response.redirect("/users")
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error.");
    } 
});

export default Router;