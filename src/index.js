const myLib = require('./deploy')
const express = require('express')
const app = express()


const commitRef = process.env.APP_COMMIT_REF || 'N/A'
const commitBranch = process.env.APP_BUILD_BRANCH || 'N/A'
const buildDate = process.env.APP_BUILD_DATE || new Date().toISOString()

app.get('/', (req, res) => {
    const message = myLib.helloDeploy()
    const text = `${message}! We're at branch ${commitBranch} commit ${commitRef} which was built at ${buildDate}`
    res.send(text)
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))