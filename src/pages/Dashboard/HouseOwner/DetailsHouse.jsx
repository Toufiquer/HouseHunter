import React, { useContext, useEffect } from "react";
import swal from "sweetalert";
import { useAddHouseMutation } from "../../../redux/features/houses/housesApi";
import Loading from "../../../components/Loading/Loading";
import DisplayCenter from "../../../components/DisplayCenter/DisplayCenter";
import { AuthContext } from "../../../layout/Main/Main";

// check bd phone number
function isValidBangladeshPhoneNumber(phoneNumber) {
  // The regular expression for a Bangladesh phone number
  const regex = /^(01[3-9]\d{8}|\\+8801[3-9]\d{8})$/;

  // Check if the phone number matches the regular expression
  // return regex.test(phoneNumber);
  return true;
}
const DetailsHouse = () => {
  const [addHouse, { isSuccess, isLoading, isError }] = useAddHouseMutation();

  const [currentUser, setCurrentUser] = useContext(AuthContext);
  const email = React.useRef();
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
  useEffect(() => {
    rentPerMonth.current.value = 800;
  }, []);


  // decide what to render
  let content;
  if (isLoading && !isError) {
    content = <Loading />;
  } else if (!isLoading && isError) {
    content = <DisplayCenter>Ops! Some thing went wrong</DisplayCenter>;
  } else {
    content = (
      <div className="flex items-center justify-center mt-4">
        {" "}
        <div className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <label className="label">
            <span className="label-text">What is your Email?</span>
          </label>
          <input
            type="email"
            value={currentUser.email || "Not Found"}
            ref={email}
            readOnly
            className="input input-bordered input-primary w-[400px] md:w-[800px]"
          />
          <label className="label">
            <span className="label-text">Address</span>
          </label>
          <input
            type="text"
            placeholder="Address"
            ref={address}
            className="input input-bordered input-primary w-[400px] md:w-[800px]"
          />
          <label className="label">
            <span className="label-text">City</span>
          </label>
          <input
            type="text"
            placeholder="City"
            ref={city}
            className="input input-bordered input-primary w-[400px] md:w-[800px]"
          />
          <label className="label">
            <span className="label-text">Bedrooms</span>
          </label>
          <input
            type="number"
            placeholder="Bedrooms"
            ref={bedrooms}
            className="input input-bordered input-primary w-[400px] md:w-[800px]"
          />
          <label className="label">
            <span className="label-text">Bathrooms</span>
          </label>
          <input
            type="number"
            placeholder="Bathrooms"
            ref={bathrooms}
            className="input input-bordered input-primary w-[400px] md:w-[800px]"
          />
          <label className="label">
            <span className="label-text">Room Size</span>
          </label>
          <input
            type="text"
            placeholder="Room Size"
            ref={roomSize}
            className="input input-bordered input-primary w-[400px] md:w-[800px]"
          />
          <label className="label">
            <span className="label-text">Picture</span>
          </label>
          <input
            readOnly
            type="file"
            ref={picture}
            className="input input-bordered input-primary w-[400px] md:w-[800px]"
          />
          <label className="label">
            <span className="label-text">Availability Date</span>
          </label>
          <input
            type="date"
            placeholder="Availability Date"
            ref={availabilityDate}
            className="input input-bordered input-primary w-[400px] md:w-[800px]"
          />
          <label className="label">
            <span className="label-text">Rent Per Month</span>
          </label>
          <input
            type="number"
            placeholder="Rent Per Month"
            ref={rentPerMonth}
            className="input input-bordered input-primary w-[400px] md:w-[800px]"
          />
          <label className="label">
            <span className="label-text">Phone Number</span>
          </label>
          <input
            type="tel"
            placeholder="Phone Number"
            ref={phoneNumber}
            className="input input-bordered input-primary w-[400px] md:w-[800px]"
          />
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            placeholder="Description"
            ref={description}
            className="input input-bordered input-primary w-[400px] md:w-[800px]"
          />
        </div>
      </div>
    );
  }
  return <div className="container mx-auto w-full min-h-screen">{content}</div>;
};

export default DetailsHouse;
