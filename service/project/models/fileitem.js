var mongoose = require('mongoose');

var FileItemSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true, },
    name: { type: String, required: true, default: 'NoName' },
    type: { type: String, required: true, default: 'application/octet-stream', },
    size: { type: Number, required: true, default: 0, },
    createDate: { type: Date, required: false, default: Date.now(), },//YYYY-MM-DD HH:mm:ss
    isDeleted: { type: Boolean, required: true, default: false, },
});
FileItemSchema.static.getFileItemBasicInfo = function(file) {
    return {
        id: file._id,
        name: file.name,
        type: file.type,
        size: file.size,
        createDate: file.createDate.toLocaleString(),
    }
}

FileItemSchema.methods.getBasicInfo = function() {
    return {
        id:         this._id,
        name:       this.name,
        type:       this.type,
        size:       this.size,
        createDate: this.createDate.toLocaleString(),
    }
}
module.exports = mongoose.model('FileItem', FileItemSchema);