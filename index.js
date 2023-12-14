import express from "express"
import path from "path"
import { fileURLToPath } from "url"

const app = express()
app.use(express.static("public"))

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const port = process.env.PORT || 3000

app.get("/graphql", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

app.listen(port, () => console.log(`GraphQL playground running on port ${port}`))