import {connect} from "react-redux";
import {addTask, deleteTask, markDone, unMark} from "../redux/todoReducer";
import TodoForm from "./TodoForm";

let mapStateToProps = (state) => {
    return {
        todoData: state.todo.todoData
    }
}

const TodoContainer = connect(mapStateToProps,{addTask, unMark, markDone, deleteTask})(TodoForm)

export default TodoContainer