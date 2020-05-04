const mongoose = require('mongoose')
const todoItem = require('../models/todoItem');
const todoItemModel = mongoose.model('todoItem', todoItem);

module.exports = {
  allItem: () => {
    let allToDo = todoItemModel.find();
    console.log(allToDo)
    return allToDo
  },
  createToDo: ({input}) => {
    let body = {
      name: input.name,
      status: input.status
    }
    return todoItemModel.create(body);
  },
  updateTodo: ({_id, input}) => {
    let body = {
      name: input.name,
      status: input.status
    }
    return todoItemModel.findOneAndUpdate({_id}, body, {
      new: true
    })
  },
  deleteToDo: ({_id}) => {
    return todoItemModel.findOneAndDelete({_id})
  }
};
