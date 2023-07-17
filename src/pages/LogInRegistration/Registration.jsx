import React from "react";
import { Link } from "react-router-dom";

const Registration = () => {
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
    console.log(event.target.value);
    setRole(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name.current?.value);
    console.log("role:", role);
    console.log("phone:", phone.current?.value);
    console.log("email:", email.current?.value);
    console.log("password:", password.current?.value);
    console.log("conPassword:", conPassword.current?.value);
  };
  return (
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
          type="phone"
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
};

export default Registration;
