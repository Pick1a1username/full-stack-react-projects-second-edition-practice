import bodyParser from 'body-parser'
import compress from 'compression'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import path from 'path'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import StaticRouter from 'react-router-dom/StaticRouter'
import { ServerStyleSheets, ThemeProvider } from '@material-ui/styles'

import Template from './../template'
import authRoutes from './routes/auth.routes'
import devBundle from './devBundle'
import MainRouter from './../client/MainRouter'
import theme from './../client/theme'
import userRoutes from './routes/user.routes'


const app = express()

devBundle.compile(app)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compress())
app.use(helmet())
app.use(cors())

// app.get('/', (req, res) => {
//   res.status(200).send(Template())
// })
app.use('/', userRoutes)
app.use('/', authRoutes)
app.get('*', (req, res) => {
  const sheets = new ServerStyleSheets()
  const context = {}
  const markup = ReactDOMServer.renderToString(
    sheets.collect(
          <StaticRouter location={req.url} context={context}>
            <ThemeProvider theme={theme}>
              <MainRouter />
            </ThemeProvider>
          </StaticRouter>
        )
    )
    if (context.url) {
      return res.redirect(303, context.url)
    }
    const css = sheets.toString()
    res.status(200).send(Template({
      markup: markup,
      css: css
    }))
})

app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({"error" : err.name + ": " + err.message})
  }else if (err) {
    res.status(400).json({"error" : err.name + ": " + err.message})
    console.log(err)
  }
})

const CURRENT_WORKING_DIR = process.cwd()
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))

export default app