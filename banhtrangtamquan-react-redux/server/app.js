//require dependencies
const express = require("express")
const routes = require('./routes')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const cloudinary = require('cloudinary')
const app = express()
const router = express.Router()
// đoạn củ chuối này là connect đến database thôi
const url = process.env.MONGODB_URI || "mongodb://localhost:27017/banhtrangtamquan_db"
/** configure cloudinary */
cloudinary.config({
    cloud_name: 'dvoteyfga',
    api_key: '922272979514934',
    api_secret: '-_VBr410kekd4PCy65fEwjgXWsg'
})
/** connect to MongoDB datastore */
try {
    mongoose.connect(url, {
        //useMongoClient: true
    })    
} catch (error) {
    }
let port = 5000 || process.env.PORT
/** set up routes {API Endpoints} */
// đẩy object route vào này :v
routes(router)
/** set up middlewares */
app.use(cors())
app.use(bodyParser.json())
app.use(helmet())
//app.use('/static',express.static(path.join(__dirname,'static')))
app.use('/api', router)
/** start server */
app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});