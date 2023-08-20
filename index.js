import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.get('/hello',(req, res, next)=>{
    res.json({message: 'Hello World'})
})

app.listen(process.env.PORT,()=> console.log('server started'))