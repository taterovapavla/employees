import { getTribes } from "../../api/tribes";
import {
  Await,
  defer,
  useAsyncValue,
  useLoaderData,
  useNavigate,
} from "react-router-dom";
import { Tribe } from "../../types";
import { Suspense } from "react";

export async function loader() {
  const tribesPromise = getTribes();

  return defer({
    tribesPromise,
  });
}

export function TribeList() {
  const data = useLoaderData() as { tribesPromise: Promise<Tribe[]> };

  return (
    <div>
      <div className="tribes-list-header">
        <h2>Tribes </h2>
      </div>
      <Suspense fallback={<>Loading...</>}>
        <Await resolve={data.tribesPromise} errorElement={<p>Error...</p>}>
          <TribesTable />
        </Await>
      </Suspense>
    </div>
  );
}

function TribesTable() {
  const tribes = useAsyncValue() as Tribe[];
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
        {tribes?.map((tribes) => (
          <tr key={tribes.id} onClick={() => handleRowClick(tribes.id)}>
            <td>{tribes.id}</td>
            <td>{tribes.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
