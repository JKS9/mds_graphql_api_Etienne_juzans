const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: true
    }
}, {
  collection: 'Todo',
  minimize: false,
  versionKey: false
}).set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id
    delete ret._id
  }
})

module.exports = Schema