import CardsContainer from "./CardsContainer";
import Hero from "./Hero";
import Offer from "./Offer";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Hero />
      <CardsContainer />
      <Offer />
    </div>
  );
};

export default Home;
