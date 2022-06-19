const mongoose = require('mongoose')
const config = require('./config.json')

// mongoose.connect(config.mongo_uri , {
//     useNewUrlParser: true ,
//     useUnifiedTopology: true
// }).then(() => {
//     console.log('Connected to the DB.')
// }).catch((error) => {
//     console.log(error)
// })

module.exports = async () => {
    await mongoose.connect(config.mongo_uri , {
      useNewUrlParser: true ,
      useUnifiedTopology: true ,
    })
    
    return mongoose
}