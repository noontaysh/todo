import {connect} from "react-redux";
import {addTask} from "../redux/todoReducer";
import TodoForm from "./TodoForm";


const TodoContainer = connect(null,{addTask})(TodoForm)

export default TodoContainer