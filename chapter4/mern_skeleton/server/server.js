import app from './express'
import mongoose from 'mongoose'

import config from './../config/config'

mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri, { useNewUrlParser: true, 
                                    useCreateIndex: true,         
                                    useUnifiedTopology: true } ) 

mongoose.connection.on('error', (err) => {
  throw new Error(`unable to connect to database ${config.mongoUri}: ${err}`)
})

app.listen(config.port, (err) => {
  if (err) {
    console.log(err)
  }
  console.info('Server started on port %s.', config.port)
})