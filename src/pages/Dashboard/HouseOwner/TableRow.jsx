import { Link } from "react-router-dom";
import swal from "sweetalert";

// eslint-disable-next-line react/prop-types
const TableRow = ({ data }) => {
  const {
    _id,
    address,
    availabilityDate,
    bathrooms,
    bedrooms,
    city,
    description,
    email,
    phoneNumber,
    picture,
    rentPerMonth,
    roomSize,
  } = data || {};

  console.log(data);
  const handleDelete = async () => {
    const willDelete = await swal({
      title: "Are you sure?",
      text: "Are you sure that you want to delete this file?",
      icon: "warning",
      dangerMode: true,
    });
    console.log(willDelete);
  };
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src="https://daisyui.com/tailwind-css-component-profile2@56w.png"
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{address}</div>
          </div>
        </div>
      </td>
      <td>
        <br />
        <span className="badge badge-ghost badge-sm">{description}</span>
      </td>
      <td>{rentPerMonth}</td>
      <td>{bathrooms}</td>
      <td>{bedrooms}</td>
      <th className="text-black">
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-ghost btn-xs bg-red-500 hover:bg-red-600 mr-2"
        >
          Delete
        </button>
        <Link
          to={`update/${_id}`}
          className="btn btn-ghost btn-xs bg-blue-500 hover:bg-blue-600 mr-2"
        >
          Update
        </Link>
        <Link
          to={`details/${_id}`}
          className="btn btn-ghost btn-xs bg-green-500 hover:bg-green-600"
        >
          Details
        </Link>
      </th>
    </tr>
  );
};

export default TableRow;
