//get request and response types from express package
import { Request, Response } from "express";
import User from "../models/user";

const createCurrentUser = async (req: Request, res: Response) => {
    

    try {
        // check if user exsits if user exsits return 200(OK) 
        const { auth0Id } = req.body;
        const existingUser = await User.findOne( {auth0Id} )

        if(existingUser) {
            return res.status(200).send();
        }
        // create user if they dont
        const newUser = new User(req.body)
        await newUser.save();

        // retunr the user object to the client 201(CREATED) toObject turns into to javascript object
        res.status(201).json(newUser.toObject());

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error Creating User" })
    }
}



export default {
    createCurrentUser
};