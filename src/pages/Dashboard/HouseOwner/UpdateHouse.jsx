import React, { useContext, useEffect } from "react";
import swal from "sweetalert";
import {
  useGetHouseQuery,
  useUpdateHouseMutation,
} from "../../../redux/features/houses/housesApi";
import Loading from "../../../components/Loading/Loading";
import DisplayCenter from "../../../components/DisplayCenter/DisplayCenter";
import { AuthContext } from "../../../layout/Main/Main";
import { Navigate, useParams } from "react-router";

// check bd phone number
function isValidBangladeshPhoneNumber(phoneNumber) {
  // The regular expression for a Bangladesh phone number
  const regex = /^(01[3-9]\d{8}|\\+8801[3-9]\d{8})$/;

  // Check if the phone number matches the regular expression
  // return regex.test(phoneNumber);
  return true;
}
const UpdateHouse = () => {
  const [updateHouse, { isSuccess, isLoading, isError }] =
    useUpdateHouseMutation();
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
    rentPerMonth: dow_rentPerMonth,
    roomSize: dow_roomSize,
  } = data?.data || {};
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
  if (isSuccess) {
    swal("House Update success");
    return <Navigate to="/dashboard" />;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const checkNumber = isValidBangladeshPhoneNumber(phoneNumber);
    if (!checkNumber) {
      swal("Phone Number must be Bangladeshi");
    } else {
      if (
        email.current?.value &&
        address.current?.value &&
        city.current?.value &&
        bedrooms.current?.value &&
        bathrooms.current?.value &&
        roomSize.current?.value &&
        availabilityDate.current?.value &&
        rentPerMonth.current?.value &&
        phoneNumber.current?.value &&
        description.current?.value
      ) {
        const data = {
          email: email.current.value,
          address: address.current.value,
          city: city.current.value,
          bedrooms: bedrooms.current.value,
          bathrooms: bathrooms.current.value,
          roomSize: roomSize.current.value,
          picture:
            picture?.current?.value ||
            "https://blog.technavio.org/wp-content/uploads/2018/12/Online-House-Rental-Sites.jpg",
          availabilityDate: availabilityDate.current.value,
          rentPerMonth: rentPerMonth.current.value,
          phoneNumber: phoneNumber.current.value,
          description: description.current.value,
        };
        updateHouse({ id, data });
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
      <div className="flex items-center justify-center mt-4">
        {" "}
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
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
          <input
            type="submit"
            value="Submit"
            disabled={isLoading}
            className="btn btn-outline btn-primary input input-bordered input-primary w-[400px] md:w-[800px]"
          />
        </form>
      </div>
    );
  }
  return <div className="container mx-auto w-full min-h-screen">{content}</div>;
};

export default UpdateHouse;
