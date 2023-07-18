import TableRow from "./TableRow";

const TableView = () => {
  return (
    <div className="container mx-auto">
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Description</th>
              <th>Monthly Rent</th>
              <th>Update or Delete</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <TableRow />
            {/* row 2 */}
            <TableRow />
            {/* row 3 */}
            <TableRow />
            {/* row 4 */}
            <TableRow />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableView;
