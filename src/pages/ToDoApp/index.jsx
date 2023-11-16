import React from 'react'
import ToDoForm from '../../components/ToDoForm'
import ToDoList from '../../components/ToDoList'
import { connect } from 'react-redux'
import styles from './ToDoApp.module.css'

function ToDoApp ({ toDo }) {
   return (
      <main className={styles.container}>
         <h1 className={styles.title}>Todo App</h1>
         <ToDoForm />
         <ToDoList />
         <p className={styles.pendingTasks}>
            You have {toDo.numberOfTasks} pending{' '}
            {toDo.numberOfTasks === 1 ? 'task' : 'tasks'}
         </p>
      </main>
   )
}

const mapStateToProps = state => {
   return state
}

export default connect(mapStateToProps, null)(ToDoApp)
