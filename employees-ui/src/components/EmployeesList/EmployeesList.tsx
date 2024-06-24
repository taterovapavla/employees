import { getEmployees } from "../../api/employees";
import {
  Await,
  defer,
  useAsyncValue,
  useLoaderData,
  useNavigate,
} from "react-router-dom";
import { Employee } from "../../types";
import { Suspense } from "react";

export async function loader() {
  const employeesPromise = getEmployees();

  return defer({
    employeesPromise,
  });
}

export function EmployeeList() {
  const data = useLoaderData() as { employeesPromise: Promise<Employee[]> };

  return (
    <div>
      <div className="employee-list-header">
        <h2>Employees </h2>
      </div>
      <Suspense fallback={<>Loading...</>}>
        <Await resolve={data.employeesPromise} errorElement={<p>Error...</p>}>
          <EmployeesTable />
        </Await>
      </Suspense>
    </div>
  );
}

function EmployeesTable() {
  const employees = useAsyncValue() as Employee[];
  const navigate = useNavigate();

  const handleRowClick = (id: number) => {
    navigate(`${id}`);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {employees?.map((employee) => (
          <tr key={employee.id} onClick={() => handleRowClick(employee.id)}>
            <td>{employee.id}</td>
            <td>{employee.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/* import { useLoaderData } from "react-router-dom";
import { getEmployees } from "../../api/employees";

export async function loader() {
  const employees = await getEmployees();
  return { employees };
}

export function EmployeesList() {
  const { employees } = useLoaderData();
  return (
    <ul>
      {(employees: Employee[])=> employees.map((employee) => (
        <li key={employee.id} className="employee">
          {employee.name}
        </li>
      ))}
    </ul>
  );
}
 */
