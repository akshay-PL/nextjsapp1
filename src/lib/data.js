// TEMPORARY DATA

import { connect } from "mongoose";
import { Post } from "./models";
import { connectToDb } from "./utils";

//const users = [
  //  { id: 1, name: 'j' },
  // { id: 2, name: 'jq' }
//];

//const posts = [
   // { id: 1, title: 'post1', body: '..aascac.', userId: 1 },
   // { id: 2, title: 'post2', body: '..aascac.', userId: 1 },
   // { id: 3, title: 'post3', body: '..aascac.', userId: 2 },
  //  { id: 4, title: 'post4', body: '..aascac.', userId: 2 }
//];

export const getPosts = async () => {
    try{
        connectToDb();
        const posts = await Post.find()
        return posts;
    }catch(err){
        console.log(err);
        throw new Error("Faileed to fetch posts");
    }  
};

export const getPost = async (slug) => {
    try{
        connectToDb();
        const post = await Post.find({slug:slug});
        return post;
    }catch(err){
        console.log(err);
        throw new Error("Faileed to fetch post!");
    }  
};
export const getUser = async (id) => {
    try {
        await connectToDb(); // Wait for the database connection to be established
        const user = await User.findById(id);
        return user;
    } catch (err) {
        console.error(err);
        throw new Error("Failed to fetch user");
    }  
};
export const getUsers = async () => {
    try{
        connectToDb();
        const users = await User.findById()
        return users;
    }catch(err){
        console.log(err);
        throw new Error("Faileed to fetch users");
    }  
};

