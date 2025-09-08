import { initDatabase } from '/workspaces/Hello_CS618/backend/src/db/init.js'
initDatabase()
import { Post } from '/workspaces/Hello_CS618/backend/src/db/models/posts.js'

const newPost = new Post({
  title: 'Hello Mongoose',
  content: 'This is the content of my first post.',
  author: 'Jill Bagwoh',
  tags: ['Mongoose', 'MongoDB'],
})

const Posted = await newPost.save()

await Post.findByIdAndUpdate(Posted._id, {
  $set: { title: 'Hello again, Mongoose!' }
})

const savedPosts = await Post.find()
console.log(savedPosts)
