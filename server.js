import express from 'express'

const app = express()
const port = 5000

app.use(corse())
app.use(bodyParser.jason())

app.use((res,req,next)=>{
  console.log(" è arrivata una richiesta")
  next()
})
app.get('/hello', (req, res, next) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})