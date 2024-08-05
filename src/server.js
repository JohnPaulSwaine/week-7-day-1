const express = require ("express")
// ES5 syntax required. Cant use import yet.
const app = express()
// convention to remap express to app.
app.use("/", express.static("website1"))
// command needed to generate server.
app.use("/website2", express.static("website2"))

app.listen(5001, () => {console.log("listening on port 5001.")})
// first parameter is the port to listen on. second parameter is a function to execute when the server starts.
