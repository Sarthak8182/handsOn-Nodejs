import express, { json } from "express";
import validator from "validator";
import { UserModel } from "../models/users.mjs"

const Router = express.Router();
Router.get("/", async (req, res) => {
    try {
        const users = await UserModel.find();
        // res.json(users);
        res.json(users);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error.");
    } 
});

// /users
Router.post("/users", async (request, response) => {
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

        const doc = await newUser.save()
        
        response.json(doc)
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error.");
    } 
});

Router.post("/login", (req, res)=>{
        res.send({})
})
export default Router;