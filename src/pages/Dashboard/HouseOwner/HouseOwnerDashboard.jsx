import { Link } from "react-router-dom";
import Drawer from "../../../components/Drawer/Drawer";
import Modal from "../../../components/Modal/Modal";
import AddHouse from "./AddHouse";
import TableView from "./TableView";

const HouseOwnerDashboard = () => {
  const menu = (
    <>
      <Link className="hover:underline mx-2">Item 1</Link>
      <Link className="hover:underline mx-2">Item 2</Link>
      <Link className="hover:underline mx-2">Item 3</Link>
    </>
  );

  return (
    <div>
      <Drawer
        menu={menu}
        content={<TableView />}
        modal={<Modal title={"Add House"} content={<AddHouse />} />}
      ></Drawer>
    </div>
  );
};

export default HouseOwnerDashboard;
