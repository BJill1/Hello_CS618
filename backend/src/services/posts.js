import { Post } from "/workspaces/Hello_CS618/backend/src/db/models/posts.js"
import { initDatabase } from '/workspaces/Hello_CS618/backend/src/db/init.js'
initDatabase()
//Imports the model of a post from the models/posts.js file

//Creates a new post and saves it to the database
export async function createPost({title, author, content, tags}) {
    const post = new Post({title, author, content, tags})
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
export async function updatePost(postId, {title, author, content, tags}){
    return await Post.findOneAndUpdate(
        { _id: postId },
        {$set: {title, author, content, tags}},
        {new: true}
    )
}
export async function deletePost(postId){
    return await Post.deleteOne({_id: postId})
}


