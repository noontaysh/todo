import React from "react";
import {updateArrayObject} from "../utilities/objectHelpers";
import { v4 as uuidv4 } from 'uuid';

const ADD_TASK = 'ADD_TASK'
const DELETE_TASK = 'DELETE_TASK'
const MARK_DONE = 'MARK_DONE'
const UN_MARK = 'UN_MARK'

let initialState = {
    todoData: []
}

// state.todoData.some(el => el.id === state.todoData.length || el.id === state.todoData.length + 1) ? state.todoData.length + 2 : state.todoData.length
const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                todoData: [
                    ...state.todoData,
                    {id: uuidv4() ,content: action.content, markedDone: false}
                ]
            }
        case DELETE_TASK:
            return {
                ...state,
                todoData: state.todoData.filter(t => t.id !== action.taskId)
            }
        case MARK_DONE:
            return {
                ...state,
                todoData: updateArrayObject(state.todoData, action.taskId, 'id', {markedDone: true})
            }
        case UN_MARK:
            return {
                ...state,
                todoData: updateArrayObject(state.todoData, action.taskId, 'id', {markedDone: false})
            }
        default:
            return state
    }
}

export const addTask = (content) => ({type: ADD_TASK, content})
export const deleteTask = (taskId) => ({type: DELETE_TASK, taskId})
export const markDone = (taskId) => ({type: MARK_DONE, taskId})
export const unMark = (taskId) => ({type: UN_MARK, taskId})

export default todoReducer