import { Formik, Form, Field, ErrorMessage } from 'formik'
import React from 'react'
import { IoAdd } from 'react-icons/io5'
import { connect } from 'react-redux'
import { addTask } from '../../store/slices/ToDoSlice'
import TASK_VALIDATION_SCHEMA from '../../utils/validationSchemas'
import styles from './ToDoForm.module.css'
import { changeNumberOfTasks } from '../../store/slices/ToDoSlice'

function ToDoForm ({ createTask, toggleNumberOfTasks }) {
   const initialValues = {
      value: '',
      deadline: '',
   }

   function handleSubmit (values, { resetForm }) {
      createTask(values)
      toggleNumberOfTasks(false)
      resetForm()
   }

   return (
      <Formik
         initialValues={initialValues}
         onSubmit={handleSubmit}
         validationSchema={TASK_VALIDATION_SCHEMA}
      >
         <Form className={styles.form}>
            <label className={styles.label}>
               <p className={styles.taskParam}>new task</p>
               <Field
                  className={styles.input}
                  name='value'
                  type='text'
                  placeholder='Add new task...'
               ></Field>
               <ErrorMessage
                  className={styles.error}
                  name='value'
                  component='div'
               ></ErrorMessage>
            </label>

            <label className={styles.label}>
               <p className={styles.taskParam}>due to</p>
               <Field
                  className={styles.input}
                  name='deadline'
                  type='date'
               ></Field>
               <ErrorMessage
                  className={styles.error}
                  name='deadline'
                  component='div'
               ></ErrorMessage>
            </label>
            <button className={styles.addBtn} type='submit'>
               <IoAdd />
            </button>
         </Form>
      </Formik>
   )
}

const mapDispatchToProps = dispatch => ({
   createTask: data => dispatch(addTask(data)),
   toggleNumberOfTasks: isAdded => dispatch(changeNumberOfTasks(isAdded)),
})

export default connect(null, mapDispatchToProps)(ToDoForm)
