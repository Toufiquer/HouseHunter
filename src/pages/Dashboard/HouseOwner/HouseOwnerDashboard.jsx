import { Link } from "react-router-dom";
import Drawer from "../../../components/Drawer/Drawer";
import TableView from "./TableView";

const HouseOwnerDashboard = () => {
  const menu = (
    <>
      <Link to="addHouse" className="hover:underline mx-2">
        Add House
      </Link>
      <Link className="hover:underline mx-2">Item 2</Link>
      <Link className="hover:underline mx-2">Item 3</Link>
    </>
  );

  return (
    <div>
      <Drawer menu={menu} content={<TableView />}></Drawer>
    </div>
  );
};

export default HouseOwnerDashboard;
