import {Note} from '../models/note.js'

function create(req, res) {
  req.body.owner = req.user.profile
  Note.create(req.body)
  .then(note => {
    Note.findById(note._id)
    .populate('note')
    .then(populatedNote => {
      res.json(populatedNote)
    })
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({err: err.errmsg})
  })
}

function index(req, res) {
  Note.find({})
  .populate('note')
  .then(notes => {
    res.json(notes)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({err: err.errmsg})
  })
}

export{
  create,
  index,
}