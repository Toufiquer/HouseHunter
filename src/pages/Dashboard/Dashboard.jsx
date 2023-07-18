import React, { useContext, useEffect } from "react";
import HouseOwnerDashboard from "./HouseOwner/HouseOwnerDashboard";
import HouseRenterDashboard from "./HouseRenter/HouseRenterDashboard";
import { AuthContext } from "../../layout/Main/Main";

const Dashboard = () => {
  const [isHouseOwner, setIsHouseOwner] = React.useState(true);

  const [currentUser, setCurrentUser] = useContext(AuthContext);
  useEffect(() => {
    setIsHouseOwner(true);
    if (currentUser.userRole === "house_Owner") {
      setIsHouseOwner(true);
    } else {
      setIsHouseOwner(false);
    }
  }, [currentUser]);
  return (
    <div>
      {isHouseOwner ? <HouseOwnerDashboard /> : <HouseRenterDashboard />}
    </div>
  );
};

export default Dashboard;
