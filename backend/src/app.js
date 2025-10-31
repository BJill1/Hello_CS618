import cors from "cors"
import express from 'express'
import { postsRoutes } from "./routes/posts.js"
import { userRoutes } from './routes/users.js'
import { eventRoutes } from './routes/events.js'
import bodyParser from "body-parser"
import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'
import { typeDefs, resolvers } from './graphql/index.js'
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
})


const app = express()
app.use(cors())

apolloServer
  .start()
  .then(() => app.use('/graphql', expressMiddleware(apolloServer)))

app.use(bodyParser.json())

postsRoutes(app)
userRoutes(app)
eventRoutes(app)

app.get('/', (req, res) => {
  res.send('Hello from Express!')
})
export { app }

