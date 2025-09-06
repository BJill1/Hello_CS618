import mongoose, { Schema } from 'mongoose'
const postSchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: String,
    tags: [String],
  },
  { timestamps: true },
)
export const Post = mongoose.model('Post', postSchema)
