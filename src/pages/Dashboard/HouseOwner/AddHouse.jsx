import React from "react";
import swal from "sweetalert";
import { useAddHouseMutation } from "../../../redux/features/houses/housesApi";
import Loading from "../../../components/Loading/Loading";
import DisplayCenter from "../../../components/DisplayCenter/DisplayCenter";

// check bd phone number
function isValidBangladeshPhoneNumber(phoneNumber) {
  // The regular expression for a Bangladesh phone number
  const regex = /^(01[3-9]\d{8}|\\+8801[3-9]\d{8})$/;

  // Check if the phone number matches the regular expression
  return regex.test(phoneNumber);
}
const AddHouse = () => {
  const [addHouse, { isSuccess, isLoading, isError }] = useAddHouseMutation();
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
  if (isSuccess) {
    swal("House Add success");
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const checkNumber = isValidBangladeshPhoneNumber(
      description.current?.value
    );
    if (!checkNumber) {
      swal("Phone Number must be Bangladeshi");
    } else {
      if (
        email.current?.value &&
        password.current?.value &&
        address.current?.value &&
        city.current?.value &&
        bedrooms.current?.value &&
        bathrooms.current?.value &&
        roomSize.current?.value &&
        picture.current?.value &&
        availabilityDate.current?.value &&
        rentPerMonth.current?.value &&
        phoneNumber.current?.value &&
        description.current?.value
      ) {
        const data = {
          email: email.current.value,
          password: password.current.value,
          address: address.current.value,
          city: city.current.value,
          bedrooms: bedrooms.current.value,
          bathrooms: bathrooms.current.value,
          roomSize: roomSize.current.value,
          picture: picture.current.value,
          availabilityDate: availabilityDate.current.value,
          rentPerMonth: rentPerMonth.current.value,
          phoneNumber: phoneNumber.current.value,
          description: description.current.value,
        };
        addHouse(data);
      }
    }
  };

  // decide what to render
  let content;
  if (isLoading && !isError) {
    content = <Loading />;
  } else if (!isLoading && isError) {
    content = <DisplayCenter>Ops! Some thing went wrong</DisplayCenter>;
  } else {
    content = (
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
  }
  return content;
};

export default AddHouse;
