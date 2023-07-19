import { useContext } from "react";
import DisplayCenter from "../../../components/DisplayCenter/DisplayCenter";
import Loading from "../../../components/Loading/Loading";
import { AuthContext } from "../../../layout/Main/Main";
import { useGetHousesQuery } from "../../../redux/features/houses/housesApi";
import TableRow from "./TableRow";

const TableView = () => {
  const { data, isLoading, isError } = useGetHousesQuery();

  const [currentUser, setCurrentUser] = useContext(AuthContext);
  // decide what to render
  const displayData = data?.data
    ?.filter((curr) => curr.email === currentUser.email)
    .map((curr) => <TableRow key={curr._id} data={curr} />);
  let content;
  if (isLoading && !isError) {
    content = <Loading />;
  } else if (!isLoading && isError) {
    content = <DisplayCenter>Ops! Some thing went wrong</DisplayCenter>;
  } else {
    content = (
      <>
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
                  <th>Address</th>
                  <th>Description</th>
                  <th>Monthly Rent</th>
                  <th>Bathrooms</th>
                  <th>Bedrooms</th>
                  <th>Update or Delete</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>{displayData}</tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
  return content;
};

export default TableView;
