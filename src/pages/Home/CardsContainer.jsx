import Divider from "../../components/Divider/Divider";
import Card from "./Card";

const CardsContainer = () => {
  return (
    <div className="mb-6">
      <Divider />
      <div className="mt-6 mb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-center">
          {/* City */}
          <div className="flex items-center gap-4">
            <div className="text-xl">City </div>
            <input
              type="text"
              placeholder="City"
              className="input input-bordered w-[260px] "
            />
          </div>
          {/* City */}
          <div className="flex items-center gap-4">
            <div className="text-xl">City </div>
            <input
              type="text"
              placeholder="City"
              className="input input-bordered w-[260px] "
            />
          </div>
          {/* City */}
          <div className="flex items-center gap-4">
            <div className="text-xl">City </div>
            <input
              type="text"
              placeholder="City"
              className="input input-bordered w-[260px] "
            />
          </div>
          {/* City */}
          <div className="flex items-center gap-4">
            <div className="text-xl">City </div>
            <input
              type="text"
              placeholder="City"
              className="input input-bordered w-[260px] "
            />
          </div>
          {/* City */}
          <div className="flex items-center gap-4">
            <div className="text-xl">City </div>
            <input
              type="text"
              placeholder="City"
              className="input input-bordered w-[260px] "
            />
          </div>
          {/* City */}
          <div className="flex items-center gap-4">
            <div className="text-xl">City </div>
            <input
              type="text"
              placeholder="City"
              className="input input-bordered w-[260px] "
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default CardsContainer;
