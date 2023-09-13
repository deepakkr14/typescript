import {Router} from 'express'
import {Todo} from './todo';

const router = Router()
type RequestedBody= {text:string}
type RequestedParams ={ todoId:string}
let todos:Todo[]=[]

router.get('/',(req,res,next)=>{
    res.status(200).json({todos:todos})
})

router.post('/todo',(req,res,next)=>{
    const body=req.body as RequestedBody
    const newTodo:Todo={
        id:new Date().toISOString(),
        text:req.body.text,
    };
})
router.put('/todo/:todoId',(req,res,next)=>{
    const body=req.body as RequestedBody;
    const params=req.params as RequestedParams;
    const tid= params.todoId;
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
    const params=req.params as RequestedParams;
    todos=todos.filter(todoitem=>todoitem.id!==params.todoId);
    res.status(200).json({message:'Deleted todo',todos:todos})
})
export default router;