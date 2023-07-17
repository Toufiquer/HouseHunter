import React, { useEffect } from "react";
import HouseOwnerDashboard from "./HouseOwner/HouseOwnerDashboard";
import HouseRenterDashboard from "./HouseRenter/HouseRenterDashboard";

const Dashboard = () => {
  const [isHouseOwner, setIsHouseOwner] = React.useState(false);
  useEffect(() => {
    setIsHouseOwner((pre) => !pre);
  }, []);
  return (
    <div>
      {isHouseOwner ? <HouseOwnerDashboard /> : <HouseRenterDashboard />}
    </div>
  );
};

export default Dashboard;
