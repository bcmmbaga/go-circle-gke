const myLib = require('./simple_test')
const express = require('express')
const app = express()


const commitRef = process.env.APP_COMMIT_REF || 'N/A'
const buildDate = process.env.APP_BUILD_DATE || new Date().toISOString()

app.get('/', (req, res) => {
    const message = myLib.helloKubernetes()
    const text = `${message}! We're at commit ${commitRef} which was built at ${buildDate}`
    res.send(text)
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))