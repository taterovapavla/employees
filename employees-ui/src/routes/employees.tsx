import {
  EmployeeDetails,
  loader as employeeLoader,
} from "../components/EmployeeDetail";
import {
  EmployeeList,
  loader as employeesLoader,
} from "../components/EmployeesList";
import { ErrorPage } from "../shared/ErrorPage";
import { EMPLOYEES_PATH } from "../utils/constants";
import { RouteObject } from "react-router-dom";
import { EmployeeEditForm } from "../components/EmployeeEditForm";

export const employeesRoutes: RouteObject[] = [
  {
    path: EMPLOYEES_PATH,
    element: <EmployeeList />,
    loader: employeesLoader,
    errorElement: <ErrorPage />,
  },
  {
    path: `${EMPLOYEES_PATH}/new`,
    element: <EmployeeEditForm />,
    errorElement: <ErrorPage />,
  },
  {
    path: `${EMPLOYEES_PATH}/:id`,
    element: <EmployeeDetails />,
    loader: employeeLoader,
  },
  {
    path: `${EMPLOYEES_PATH}/:id/edit`,
    element: <p>Should edit employee by id</p>,
    loader: employeeLoader,
    errorElement: <ErrorPage />,
  },
  {
    path: `${EMPLOYEES_PATH}/:id/delete`,
    element: <EmployeeDetails />,
    errorElement: <ErrorPage />,
  },
];
