import * as yup from "yup";
const TASK_VALIDATION_SCHEMA = yup.object({
  value: yup.string().trim().required("write down your task, please"),
  deadline: yup.date().min(new Date(), "the deadline cannot be that early"),
});

export default TASK_VALIDATION_SCHEMA;
