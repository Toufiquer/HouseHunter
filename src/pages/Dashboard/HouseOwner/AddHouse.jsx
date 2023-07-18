import React from "react";

const AddHouse = () => {
  const email = React.useRef();
  const password = React.useRef();
  const address = React.useRef();
  const city = React.useRef();
  const bedrooms = React.useRef();
  const bathrooms = React.useRef();
  const roomSize = React.useRef();
  const picture = React.useRef();
  const availabilityDate = React.useRef();
  const rentPerMonth = React.useRef();
  const phoneNumber = React.useRef();
  const description = React.useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("email:", email.current?.value);
    console.log("password:", password.current?.value);
    console.log("address:", address.current?.value);
    console.log("city:", city.current?.value);
    console.log("bedrooms:", bedrooms.current?.value);
    console.log("bathrooms:", bathrooms.current?.value);
    console.log("roomSize:", roomSize.current?.value);
    console.log("picture:", picture.current?.value);
    console.log("availabilityDate:", availabilityDate.current?.value);
    console.log("rentPerMonth:", rentPerMonth.current?.value);
    console.log("phoneNumber:", phoneNumber.current?.value);
    console.log("description:", description.current?.value);
  };
  return (
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
      <label className="label">
        <span className="label-text">Address</span>
      </label>
      <input
        type="text"
        placeholder="Address"
        ref={address}
        className="input input-bordered input-primary w-[400px]"
      />
      <label className="label">
        <span className="label-text">City</span>
      </label>
      <input
        type="text"
        placeholder="City"
        ref={city}
        className="input input-bordered input-primary w-[400px]"
      />
      <label className="label">
        <span className="label-text">Bedrooms</span>
      </label>
      <input
        type="number"
        placeholder="Bedrooms"
        ref={bedrooms}
        className="input input-bordered input-primary w-[400px]"
      />
      <label className="label">
        <span className="label-text">Bathrooms</span>
      </label>
      <input
        type="number"
        placeholder="Bathrooms"
        ref={bathrooms}
        className="input input-bordered input-primary w-[400px]"
      />
      <label className="label">
        <span className="label-text">Room Size</span>
      </label>
      <input
        type="text"
        placeholder="Room Size"
        ref={roomSize}
        className="input input-bordered input-primary w-[400px]"
      />
      <label className="label">
        <span className="label-text">Picture</span>
      </label>
      <input
        type="file"
        ref={picture}
        className="input input-bordered input-primary w-[400px]"
      />
      <label className="label">
        <span className="label-text">Availability Date</span>
      </label>
      <input
        type="date"
        placeholder="Availability Date"
        ref={availabilityDate}
        className="input input-bordered input-primary w-[400px]"
      />
      <label className="label">
        <span className="label-text">Rent Per Month</span>
      </label>
      <input
        type="number"
        placeholder="Rent Per Month"
        ref={rentPerMonth}
        className="input input-bordered input-primary w-[400px]"
      />
      <label className="label">
        <span className="label-text">Phone Number</span>
      </label>
      <input
        type="tel"
        placeholder="Phone Number"
        ref={phoneNumber}
        className="input input-bordered input-primary w-[400px]"
      />
      <label className="label">
        <span className="label-text">Description</span>
      </label>
      <textarea
        placeholder="Description"
        ref={description}
        className="input input-bordered input-primary w-[400px]"
      />
      <input
        type="submit"
        value="Submit"
        className="btn btn-outline btn-primary input input-bordered input-primary w-[400px]"
      />
    </form>
  );
};

export default AddHouse;
