export type Tribe = {
  id: number;
  name: string;
  department: string;
};

export type Employee = {
  id: number;
  name: string;
  title: string;
  tribe: Tribe;
  avatar?: string;
};

export type EmployeeToUpdate = Omit<Employee, "id">;
