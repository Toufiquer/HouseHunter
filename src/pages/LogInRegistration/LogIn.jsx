import React from "react";

const LogIn = () => {
  const email = React.useRef();
  const password = React.useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("email:", email.current?.value);
    console.log("password:", password.current?.value);
  };

  return (
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
  );
};

export default LogIn;
