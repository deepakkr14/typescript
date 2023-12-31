import {Router} from 'express'
import {Todo} from '../models/todo';

const router = Router()
let todos:Todo[]=[]

router.get('/',(req,res,next)=>{
    res.status(200).json({todos:todos})
})

router.post('/todo',(req,res,next)=>{
    const newTodo:Todo={
        id:new Date().toISOString(),
        text:req.body.text,
    };
})
router.put('/todo/:todoId',(req,res,next)=>{
    const tid= req.params.todoId;
    const todoIndex=todos.findIndex((todoItem)=> todoItem.id===tid);
    if(todoIndex>=0){
        todos[todoIndex]={
            id:todos[todoIndex].id,text:req.body.text
        }
return res.status(200).json({message:'Updated todo',todos:todos})
}
res.status(404).json({message:'could not found todo for this id'});
})

router.delete('/todo/:todoId',(req,res,next)=>{
    todos=todos.filter(todoitem=>todoitem.id!==req.params.todoId);
    res.status(200).json({message:'Deleted todo',todos:todos})
})
export default router;