import { Link } from "react-router-dom";
import swal from "sweetalert";

// eslint-disable-next-line react/prop-types
const TableRow = ({ id = 0 }) => {
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
            <div className="font-bold">Hart Hagerty</div>
            <div className="text-sm opacity-50">United States</div>
          </div>
        </div>
      </td>
      <td>
        Zemlak, Daniel and Leannon
        <br />
        <span className="badge badge-ghost badge-sm">
          Desktop Support Technician
        </span>
      </td>
      <td>Purple</td>
      <th>
        <button
          onClick={() => handleDelete(id)}
          className="btn btn-ghost btn-xs bg-red-500 hover:bg-red-600 mr-2"
        >
          Delete
        </button>
        <Link
          to="update/:id"
          className="btn btn-ghost btn-xs bg-blue-500 hover:bg-blue-600"
        >
          Update
        </Link>
      </th>
    </tr>
  );
};

export default TableRow;
