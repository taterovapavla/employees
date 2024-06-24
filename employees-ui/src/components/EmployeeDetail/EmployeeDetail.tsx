import {
  LoaderFunctionArgs,
  json,
  useLoaderData,
  Link,
  redirect,
  ActionFunctionArgs,
} from "react-router-dom";
import {
  createEmployee,
  deleteEmployee,
  getEmployee,
} from "../../api/employees";
import { NotFoundPage } from "../../shared/NotFoundPage";
import { Employee } from "../../types";

/* import userAvatar from "/user-avatar.png"; */

/* export async function action({ params }: ActionFunctionArgs) {
  if (!params.id) {
    return;
  }
  await deleteEmployee(params.id);
  return redirect("/");
} */

/* export async function action({ params }: ActionFunctionArgs) {
  const employee = await editEmployee();
  return redirect(`/employees/${id}/edit`);
} */

export async function loader({ params }: LoaderFunctionArgs) {
  if (!params.id) {
    throw new Error("No employee ID provided");
  }
  const data = await getEmployee(params.id);
  return json(data);
}

export function EmployeeDetails() {
  const employee = useLoaderData() as Employee | null;

  const handleDelete = async () => {
    if (!confirm("Please confirm you want to delete this record")) {
      return;
    }
    if (employee) {
      try {
        await deleteEmployee(employee.id.toString());
      } catch (error) {
        console.error("Error deleting employee:", error);
      }
    }
  };

  return (
    <>
      {employee ? (
        <div className="employee">
          {/* <div>
            <img key={employee.avatar} src={userAvatar} alt="employee avatar" />
          </div> */}
          <div>
            <h1>{employee.name}</h1>
            <p>{employee.title}</p>
            <div>
              <Link to="edit" className="edit-button">
                Edit
              </Link>
              <button className="edit-button" onClick={() => handleDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      ) : (
        <NotFoundPage />
      )}
    </>
  );
}

/* import {
  Await,
  LoaderFunctionArgs,
  useLoaderData,
  defer,
} from "react-router-dom";
import { getEmployee } from "../../api/employees";
import { Employee } from "../../types";

export async function loader({ params }: LoaderFunctionArgs) {
  if (!params.id) {
    throw new Error("No employee id provided");
  }
  const data = getEmployee(params.id);
  return defer({
    employeePromise: data,
  });
}

export function EmployeeDetail() {
  const data = useLoaderData() as { employeePromise: Promise<Employee> };
  return (
    <div className="employee">
      <Await resolve={data.employeePromise}>
        {(employee) => <p>Employee ID: {employee.id}</p>}
      </Await>
    </div>
  );
}


 */
