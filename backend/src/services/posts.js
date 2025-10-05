import { Post } from '../db/models/posts.js'
//Imports the model of a post from the models/posts.js file

//Creates a new post and saves it to the database
export async function createPost(userId, {title, content, tags}) {
    const post = new Post({title, author: userId, content, tags})
    return await post.save()
}
async function listPosts(
    //query = {} creates an empty object by default if no query is provided
    query = {},
    {sortBy = 'createdAt', sortOrder = 'descending'} = {},){
        return await Post.find(query).sort({[sortBy]: sortOrder})
    }
export async function listAllPosts(options){
    return await listPosts({}, options)
}
export async function listPostsByAuthor(author, options){
    return await listPosts({author}, options)
}
export async function listPostsByTag(tags, options){
    return await listPosts({ tags }, options)
}
export async function getPostById(postId){
    return await Post.findById(postId)
}
export async function updatePost(userId, postId, {title, content, tags}){
    return await Post.findOneAndUpdate(
        { _id: postId, author: userId },
        {$set: {title, content, tags}},
        {new: true}
    )
}
export async function deletePost(userId, postId){
    return await Post.deleteOne({_id: postId, author: userId})
}


