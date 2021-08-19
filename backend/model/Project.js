const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Project = new Schema({
  project_id: {
    type: Number
  },
  name: {
    type: String
  },
  start_date: {
    type: Date
  },
  end_date: {
    type: Date
  },
  leader: {
    type: String
  },
  accountant: {
    type: String
  },  
  report: {
    type: String
  }
}, {
  collection: 'project'
})

module.exports = mongoose.model('Project', Project)