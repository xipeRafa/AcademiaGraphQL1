import express from 'express'
import compression from 'compression'
import cors from 'cors'
import { createServer } from 'http'





const app = express();
app.use(cors())
app.use(compression());

app.get('/', (req,res) => {
      res.send('Bienvenido al curso tonto')
})

const httpServer = createServer(app)

const PORT = 5000

httpServer.listen(
   {port : PORT},
   () => console.log(`hola tontos http://localhost:${PORT}`)
)
