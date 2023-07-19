import React, { useContext } from "react";
import { AuthContext } from "../../layout/Main/Main";
import { useAddLogInMutation } from "../../redux/features/users/usersApi";
import { Navigate } from "react-router-dom";
import DisplayCenter from "../../components/DisplayCenter/DisplayCenter";
import Loading from "../../components/Loading/Loading";

const LogIn = () => {
  const [currentUser, setCurrentUser] = useContext(AuthContext);

  const [addLogIn, { isSuccess, isLoading, isError, data }] =
    useAddLogInMutation();
  const email = React.useRef();
  const password = React.useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.current?.value && password.current?.value) {
      const data = {
        email: email.current.value,
        password: password.current.value,
      };
      addLogIn(data);
    }
  };

  // decide what to render
  let content;
  if (isLoading && !isError) {
    content = <Loading />;
  } else if (!isLoading && isError) {
    content = <DisplayCenter>Ops! Some thing went wrong</DisplayCenter>;
  } else if (isSuccess) {
    if (data.isError) {
      localStorage.setItem("userData", JSON.stringify({}));
      content = <DisplayCenter>{data.message}</DisplayCenter>;
    } else {
      const localData = {
        token: data.token,
        email: data.data.email,
        userRole: data.data.userRole,
      };
      setCurrentUser(localData);
      localStorage.setItem("userData", JSON.stringify(localData));
      return <Navigate to="/dashboard" />;
    }
  } else {
    content = (
      <>
        <div>
          <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
            <label className="label">
              <span className="label-text">What is your Email?</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              ref={email}
              className="input input-bordered input-primary w-[400px]"
            />
            <label className="label">
              <span className="label-text">What is your Password?</span>
            </label>
            <input
              type="password"
              ref={password}
              placeholder="Password"
              className="input input-bordered input-primary w-[400px]"
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-outline btn-primary input input-bordered input-primary w-[400px]"
            />
          </form>
        </div>
      </>
    );
  }

  return content;
};

export default LogIn;
