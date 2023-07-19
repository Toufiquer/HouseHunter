import React, { useContext, useEffect } from "react";
import swal from "sweetalert";
import {
  useAddHouseMutation,
  useGetHouseQuery,
} from "../../../redux/features/houses/housesApi";
import Loading from "../../../components/Loading/Loading";
import DisplayCenter from "../../../components/DisplayCenter/DisplayCenter";
import { AuthContext } from "../../../layout/Main/Main";
import { useParams } from "react-router";

// const DetailsHouse = () => {
const DetailsHouse = () => {
  const [addHouse, { isSuccess, isLoading, isError }] = useAddHouseMutation();
  const { id } = useParams();
  const { data, isLoadingG, isErrorG } = useGetHouseQuery(id);
  const {
    address: dow_address,
    availabilityDate: dow_availabilityDate,
    bathrooms: dow_bathrooms,
    bedrooms: dow_bedrooms,
    city: dow_city,
    description: dow_description,
    email: dow_email,
    phoneNumber: dow_phoneNumber,
    picture: dow_picture,
    rentPerMonth: dow_rentPerMonth,
    roomSize: dow_roomSize,
  } = data?.data || {};
  console.log(
    dow_address,
    dow_availabilityDate,
    dow_bathrooms,
    dow_bedrooms,
    dow_city,
    dow_description,
    dow_email,
    dow_phoneNumber,
    dow_picture,
    dow_rentPerMonth,
    dow_roomSize
  );
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
    address.current.value = dow_address;
    availabilityDate.current.value = dow_availabilityDate;
    bathrooms.current.value = dow_bathrooms;
    bedrooms.current.value = dow_bedrooms;
    city.current.value = dow_city;
    description.current.value = dow_description;
    email.current.value = dow_email;
    phoneNumber.current.value = dow_phoneNumber;
    rentPerMonth.current.value = dow_rentPerMonth;
    roomSize.current.value = dow_roomSize;
  }, [
    dow_address,
    dow_availabilityDate,
    dow_bathrooms,
    dow_bedrooms,
    dow_city,
    dow_description,
    dow_email,
    dow_phoneNumber,
    dow_rentPerMonth,
    dow_roomSize,
  ]);
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
        <form className="flex flex-col gap-2">
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
        </form>
      </div>
    );
  }
  return <div className="container mx-auto w-full min-h-screen">{content}</div>;
};

export default DetailsHouse;
