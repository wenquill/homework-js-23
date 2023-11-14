import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import { connect } from "react-redux";
import { addTask } from "../../store/slices/ToDoSlice";
import TASK_VALIDATION_SCHEMA from "../../utils/validationSchemas";

function ToDoForm({ createTask }) {
  const initialValues = {
    value: "",
    deadline: "",
  };

  function handleSubmit(values, { resetForm }) {
    createTask(values);
    console.log(values);
    resetForm();
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={TASK_VALIDATION_SCHEMA}
    >
      <Form>
        <label>
          <Field name="value" type="text" placeholder="Add new task..."></Field>
          <button type="submit">Add</button>
          <ErrorMessage name="value" component="div"></ErrorMessage>
        </label>

        <label>
          <Field name="deadline" type="date"></Field>
          <ErrorMessage name="deadline" component="div"></ErrorMessage>
        </label>
      </Form>
    </Formik>
  );
}

const mapDispatchToProps = (dispatch) => ({
  createTask: (data) => dispatch(addTask(data)),
});

export default connect(null, mapDispatchToProps)(ToDoForm);
