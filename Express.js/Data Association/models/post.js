const mongoose = require('mongoose');

mongoose.connect(`mongodb://127.0.0.1:27017/testingdatabase`);

const postsSchema = mongoose.Schema({
    postdata: String,
    user: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user"
        }
    ],
    data: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("post", postsSchema);