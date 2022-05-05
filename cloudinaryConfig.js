import cloudinary from 'cloudinary'

cloudinary.config({
    cloud_name: '',
    api_key: '',
    api_secret: ''
})

const uploads = (file) => {
    return new Promise(resolve => {
        cloudinary.uploader.upload(file, (result) => {
            resolve({ url: result.url, id: result.public_id })
        }, { resource_type: "auto" })
    })
}
export default uploads
