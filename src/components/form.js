import React from "react";

const form=(props)=>{
  const inputTextHandler = (e)=>{
    console.log(e.target.value)
    props.setInputText(e.target.value)
  };
  const submitTodoHandler = (e)=>{
    e.preventDefault();
  };
    return (
      
        <form>
      <input onChange = { inputTextHandler} type="text" class="todo-input" />
      <button onClick ={submitTodoHandler} class="todo-button" type="submit">
        <i class="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>

    )
}
export default form;