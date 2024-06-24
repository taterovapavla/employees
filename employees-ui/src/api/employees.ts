import { employees } from "../mocks/employees";
import { Employee } from "../types";

export async function getEmployees(): Promise<Employee[]> {
  try {
    const employeesResponse = await fetch("/api/employees");
    return await employeesResponse.json();
  } catch (error) {
    console.log({ error });
  }
  return [];
}

export async function getEmployee(id: string): Promise<Employee | undefined> {
  try {
    const employeesResponse = await fetch(`/api/employees/${id}`);
    return await employeesResponse.json();
  } catch (error) {
    console.log({ error });
  }
  return employees.find((employee) => employee.id === Number(id));
}

export async function createEmployee(employee: Partial<Employee>) {
  try {
    const response = await fetch("/api/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employee),
    });

    if (!response.ok) {
      throw new Error("Failed to create employee");
    }

    const newEmployeeId = await response.json();
    console.log("Employee created successfully with ID:", newEmployeeId);
    return newEmployeeId;
  } catch (error) {
    console.error(`Error creating employee: ${error}`);
    throw error; // Propagate the error to the caller
  }
}

/* export async function updateEmployee(
  id: string,
  updates: Partial<EmployeeToUpdate>
) {
  // TODO
  console.log(
    `Should call backend for editing employee ${id}, with new values: ${updates}`
  );
} */

export async function deleteEmployee(id: string) {
  try {
    const response = await fetch(`/api/employees/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Failed to delete employee with ID ${id}`);
    }

    const { affectedEntries } = await response.json();
    console.log(
      `Employee with ID ${id} deleted successfully. Affected entries: ${affectedEntries}`
    );
  } catch (error) {
    console.error(`Error deleting employee: ${error}`);
    throw error;
  }
}
