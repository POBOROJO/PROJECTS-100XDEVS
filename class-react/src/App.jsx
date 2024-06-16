import {useState} from "react";

// todo application
// todo
// {
//   todos :[{title: "todo 1", description: "todo 1 description", complete: false,}]
// }


//!Note - anytime a parent re-renders its child also re-renders
function App(){
  const [todos, setTodos] = useState([{
    title: "Go to gym from 7-9",
    description: "Do the assignments",
    complete: true,
  },{
    title: "Study DSA",
    description: "Do a post",
    complete: false,
  }]);

  function addTodo(){
    //[1,2]
    // [..todos,3] => [1,2,3]
    setTodos([...todos,{
      title:"new Todo",
      description:"new description",
    }])
  }

  return(
    <div>
      { /* <Todo title={todos[0].title} description={todos[0].description}></Todo>
      <Todo title={todos[1].title} description={todos[1].description}></Todo> */}
      <button onClick={addTodo}>Add new todo</button>
      {todos.map(function (todo){
        return <Todo title={todo.title} description={todo.description}></Todo>
      })}
    </div>
  )
}

function Todo (props) {
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}
export default App
// function App() {
//   const[count, setCount] =useState(0);

//   return(
//     <div>
//       <Custombutton count={count} setCount={setCount}></Custombutton>
//     </div>
//   )
// }
// function Custombutton(props){
//   function OnclickHandler(){
//     props.setCount(props.count+1);
//   }

//   return <button onClick={OnclickHandler}>
//     Counter {props.count}
//   </button>
// }