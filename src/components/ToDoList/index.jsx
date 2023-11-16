import React from 'react'
import { connect } from 'react-redux'
import ToDoTask from '../ToDoTask'
import styles from './ToDoList.module.css'

function ToDoList ({ toDo }) {
   return (
      <>
         <h2 className={styles.title}>Task list</h2>
         <ul className={styles.list}>
            {toDo.map(todo => (
               <ToDoTask todo={todo} key={todo.id}></ToDoTask>
            ))}
         </ul>
      </>
   )
}

const mapStateToProps = state => {
   return state.toDo
}

export default connect(mapStateToProps)(ToDoList)
