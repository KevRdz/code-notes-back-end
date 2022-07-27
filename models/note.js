import mongoose from 'mongoose'

const Schema = new mongoose.Schema

const noteSchema = new Schema({
  topic: {type: String, required: true},
  importance: {type: String},
  note: {type: String},
  photo: {type: String}
},{
  timestamps: true,
})

const Note = mongoose.model('Note', noteSchema)

export { 
  Profile 
}
