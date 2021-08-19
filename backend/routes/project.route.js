const express = require('express');
const app = express();
const projectRoute = express.Router();
let ProjectModel = require('../model/Project');


projectRoute.route('/').get((req, res) => {
  projectModel.find((error, project) => {
    if (error) {
      return next(error)
    } else {
      res.json(project)
      console.log('Projects Retrieved!')
    }
  })
})


projectRoute.route('/create-project').post((req, res, next) => {
  ProjectModel.create(req.body, (err, project) => {
    if (err) {
      return next(err)
    } else {
      res.json(project)
      console.log('Project Created!')
    }
  })
});


projectRoute.route('/fetch-project/:project_id').get((req, res) => {
  ProjectModel.findById(req.params.id, (err, project) => {
    if (err) {
      return next(err)
    } else {
      res.json(project)
      console.log('Project Retrieved!')
    }
  })
})


projectRoute.route('/update-project/:project_id').put((req, res, next) => {
  ProjectModel.findByIdAndUpdate(req.params.project_id, {
    $set: req.body
  }, (err, project) => {
    if (err) {
      return next(err);
    } else {
      res.json(project)
      console.log('Project updated!')
    }
  })
})

projectRoute.route('/delete-project/:id').delete((req, res, next) => {
  ProjectModel.findByIdAndRemove(req.params.id, (error, project_id) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: project
      })
      console.log('Project deleted!')
    }
  })
})

module.exports = projectRoute;