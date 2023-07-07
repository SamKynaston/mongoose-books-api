const mongoose = require("mongoose")

async function database() {
    await mongoose.connect(process.env.MONGOOSE_LINK, {
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(() => {
        console.log("[MONGOOSE] Connected to MongoDB Session")
    })
}

module.exports.db = database