import { useNavigate, Form, useLoaderData } from "react-router-dom";
import { Employee } from "../../types";
/* import "./EmployeeEditForm.css"; */

export function EmployeeEditForm() {
  const employee = useLoaderData() as Employee;
  return <EmployeeForm employee={employee} />;
}

function EmployeeForm({ employee }: { employee?: Employee }) {
  const navigate = useNavigate();

  return (
    <Form className="employee-form">
      <label>
        <span>ID</span>
        <span>{employee?.id}</span>
      </label>
      <label>
        <span>Name</span>
        <input
          placeholder="Full Name"
          aria-label="Full name"
          type="text"
          name="name"
          defaultValue={employee?.name}
        />
      </label>
      <label>
        <span>Title</span>
        <input
          placeholder="Title"
          aria-label="Title"
          type="text"
          name="title"
          defaultValue={employee?.title}
        />
      </label>
      <p>
        <button type="submit">Save</button>
        <button
          type="button"
          onClick={() => {
            navigate(-1);
          }}
        >
          Cancel
        </button>
      </p>
    </Form>
  );
}
