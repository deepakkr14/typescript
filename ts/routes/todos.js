"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = (0, express_1.Router)();
var todos = [];
router.get('/', function (req, res, next) {
    res.status(200).json({ todos: todos });
});
router.post('/todo', function (req, res, next) {
    var newTodo = {
        id: new Date().toISOString(),
        text: req.body.text,
    };
});
router.put('/todo/:todoId', function (req, res, next) {
    var tid = req.params.todoId;
    var todoIndex = todos.findIndex(function (todoItem) { return todoItem.id === tid; });
    if (todoIndex >= 0) {
        todos[todoIndex] = {
            id: todos[todoIndex].id, text: req.body.text
        };
        return res.status(200).json({ message: 'Updated todo', todos: todos });
    }
    res.status(404).json({ message: 'could not found todo for this id' });
});
router.delete('/todo/:todoId', function (req, res, next) {
    todos = todos.filter(function (todoitem) { return todoitem.id !== req.params.todoId; });
    res.status(200).json({ message: 'Deleted todo', todos: todos });
});
exports.default = router;
