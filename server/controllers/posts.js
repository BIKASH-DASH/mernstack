import {postMessage} from '../models/postMessage'
export const getPosts = async  (req, res) => {
    try {
        const postMessages = await postMessage.find();
        return res.status(200).json(postMessages);

    } catch (error) {
        res.status(404).json({message:error.message})
        
    }
}

export const createPost = async (req,res)=>{
    const bodPost = res.body; 
    const newPostMessage = new postMessage(bodPost);

    try {
        await newPostMessage.save();
        res.status(201).json(newPostMessage)
    } catch (error) {
        res.status(409).json({message:error.message })
    }
}