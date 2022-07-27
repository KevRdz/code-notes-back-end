import mongoose from 'mongoose'

const Schema = new mongoose.Schema

const noteSchema = new mongoose.Schema({
  topic: {type: String, required: true},
  note: {type: String},
},{
  timestamps: true,
})

const Note = mongoose.model('Note', noteSchema)

export { 
  Note
}
