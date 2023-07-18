import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useAddUserMutation } from "../../redux/features/users/usersApi";
import Loading from "../../components/Loading/Loading";
import DisplayCenter from "../../components/DisplayCenter/DisplayCenter";

const Registration = () => {
  const [addUser, { isSuccess, isLoading, isError, error, data }] =
    useAddUserMutation();
  console.log(isSuccess, error);
  const options = [
    { value: "house_Owner", text: "House Owner" },
    { value: "house_Renter", text: "House Renter" },
  ];

  const name = React.useRef();
  const phone = React.useRef();
  const email = React.useRef();
  const password = React.useRef();
  const conPassword = React.useRef();
  const [role, setRole] = React.useState(options[0].value);
  const [isAgree, setIsAgree] = React.useState(true);

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      name.current?.value &&
      phone.current?.value &&
      email.current?.value &&
      password.current?.value &&
      conPassword.current?.value &&
      role
    ) {
      const data = {
        name: name.current.value,
        phone: phone.current.value,
        email: email.current.value,
        password: password.current.value,
        role,
      };
      addUser(data);
    }
  };

  // decide what to render
  let content;
  if (isLoading && !isError) {
    content = <Loading />;
  } else if (!isLoading && isError) {
    content = <DisplayCenter>Ops! Some thing went wrong</DisplayCenter>;
  } else if (isSuccess) {
    console.log(data);
    if (data.isError) {
      content = <DisplayCenter>{data.message}</DisplayCenter>;
    } else {
      return <Navigate to="/" />;
    }
  } else {
    content = (
      <div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 ">
          {" "}
          <label className="label">
            <span className="label-text">What is your Name?</span>
          </label>
          <input
            type="text"
            ref={name}
            placeholder="Name"
            className="input input-bordered input-primary w-[400px]"
          />{" "}
          <label className="label">
            <span className="label-text">Who are You?</span>
          </label>
          <select
            className="input input-bordered input-primary w-[400px]"
            value={role}
            onChange={handleChange}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>{" "}
          <label className="label">
            <span className="label-text">What is your Phone?</span>
          </label>
          <input
            type="text"
            ref={phone}
            placeholder="Phone"
            className="input input-bordered input-primary w-[400px]"
          />{" "}
          <label className="label">
            <span className="label-text">What is your Email?</span>
          </label>
          <input
            type="email"
            ref={email}
            placeholder="Email"
            className="input input-bordered input-primary w-[400px]"
          />{" "}
          <label className="label">
            <span className="label-text">What is your Password?</span>
          </label>
          <input
            type="password"
            ref={password}
            placeholder="Password"
            className="input input-bordered input-primary w-[400px]"
          />
          <label className="label">
            <span className="label-text">Confirm Password?</span>
          </label>
          <input
            type="password"
            ref={conPassword}
            placeholder="Password"
            className="input input-bordered input-primary w-[400px]"
          />
          <div className="flex items-center ">
            <input
              readOnly
              type="radio"
              name="radio-2"
              className="radio radio-primary"
              checked={isAgree}
              onClick={() => setIsAgree((pre) => !pre)}
            />
            <label className="label">
              <span className="label-text">
                Agree with <Link className="underline">trams</Link> and{" "}
                <Link className="underline">condition</Link>
              </span>
            </label>
          </div>
          <input
            type="submit"
            value="Submit"
            className="btn btn-outline btn-primary input input-bordered input-primary w-[400px]"
          />
        </form>
      </div>
    );
  }
  return content;
};

export default Registration;
