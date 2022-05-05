import mongoose from 'mongoose'

const imageUpload = mongoose.Schema({
    url: {
        type: String,
        required: true
    }
})

const mynod = mongoose.model('imageUpload', imageUpload)
export default mynod