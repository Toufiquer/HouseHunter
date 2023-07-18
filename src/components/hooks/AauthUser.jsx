import { useState } from "react";

const AuthUser = () => {
  const [currentUser, setCurrentUser] = useState({ name: "" });
  return [currentUser, setCurrentUser];
};

export default AuthUser;
