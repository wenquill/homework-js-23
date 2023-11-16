import React from 'react'
import { connect } from 'react-redux'
import { MdDelete } from 'react-icons/md'
import {
   changeNumberOfTasks,
   deleteTask,
   markAsDone,
} from '../../store/slices/ToDoSlice'
import styles from './ToDoTask.module.css'

function ToDoTask ({ toDo, todo, removeTask, markDone, toggleNumberOfTasks }) {
   const isDoneHandler = (id, checked) => {
      markDone(id, { isDone: checked })
      toggleNumberOfTasks(checked)
   }

   function removeTaskHandler (id, isDone) {
      removeTask(id)
      if (!isDone) {
         toggleNumberOfTasks(!isDone)
      }
   }

   return (
      <li className={styles.listItem}>
         <label className={styles.label}>
            <input
               className={styles.checkbox}
               type='checkbox'
               checked={todo.isDone}
               onChange={({ target: { checked } }) =>
                  isDoneHandler(todo.id, checked)
               }
            />
            <div className={styles.text}>
               <span className={todo.isDone ? styles.done : undefined}>
                  {todo.value}
               </span>
               <span className={styles.deadline}>
                  {todo.deadline
                     ? `due to: ${todo.deadline.split('-').join('.')}`
                     : 'without a term'}
               </span>
            </div>
         </label>

         <button
            className={styles.deleteBtn}
            onClick={() => removeTaskHandler(todo.id, todo.isDone)}
         >
            <MdDelete size='25' className={styles.deleteIcon} />
         </button>
      </li>
   )
}

const mapStateToProps = state => {
   return state
}

const mapDispatchToProps = dispatch => ({
   removeTask: id => dispatch(deleteTask(id)),
   markDone: (id, data) => dispatch(markAsDone({ id, data })),
   toggleNumberOfTasks: isChecked => dispatch(changeNumberOfTasks(isChecked)),
})
export default connect(mapStateToProps, mapDispatchToProps)(ToDoTask)
