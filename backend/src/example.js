import { initDatabase } from './db/init.js'
import { Post } from './db/models/posts.js'
import dotenv from 'dotenv'
dotenv.config()
initDatabase()

const newPost = new Post({
  title: 'Some greetings',
  content: 'How are you doing?',
  author: 'Iliasu',
  tags: ['Other'],
})

const Posted = await newPost.save()

await Post.findByIdAndUpdate(Posted._id, {
  $set: { title: 'Hello again, Mongoose!' }
})

const savedPosts = await Post.find()
console.log(savedPosts)
