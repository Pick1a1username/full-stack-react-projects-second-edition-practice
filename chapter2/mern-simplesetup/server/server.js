import express from 'express'
import { MongoClient } from 'mongodb'
import path from 'path'
import devBundle from './devBundle'
import template from './../template'

const app = express()

const CURRENT_WORKING_DIR = process.cwd()
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))

app.get('/', (req, res) => {
    res.status(200).send(template())
 })

let port = process.env.PORT || 3000
app.listen(port, function onStart(err) {
 if (err) {
  console.log(err) 
 }
 console.info('Server started on port %s.', port)
})

devBundle.compile(app)

const url = process.env.MONGODB_URI ||
  'mongodb://localhost:27017/mernSimpleSetup'
MongoClient.connect(url, (err, db)=>{
  if (err) {
      console.log("Failed to connect db: " + err)
      return
  }
  console.log("Connected successfully to mongodb server")
  db.close()
})