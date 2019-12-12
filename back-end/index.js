const server = require('./api/server')
require('dotenv').config()

const port = process.env.PORT || 8000

server.listen(port, () => {
    console.log(`
    ----------------------------------------------------------

            Server is live on http://localhost:${port}

    GraphQL IDE is live on http://localhost:${port}/playground

            Thanks to Nathan Thomas for providing the
                    reference to this API!

    -----------------------------------------------------------
    `)
})

