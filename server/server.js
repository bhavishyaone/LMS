import ENV from "./src/config/env.js";
import app from "./app.js";
import './src/config/db.js'

const startServer = ()=>{
    app.listen(ENV.PORT, console.log(`Server is running on port  ${ENV.PORT}`))
}
startServer();