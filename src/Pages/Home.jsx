import React from "react";
import Header from "../Components/Header";
import { HorizontalBigCard } from "../Components/HorizontalCard";
import LargeImageOverlay, {
  SmallImageOverlay,
} from "../Components/ImageLayover";
import FitnessPost from "../Data/FitnessData";
import BollywoodPost from "../Data/BollywoodData";
import FoodPost from "../Data/FoodData";
import HollywoodPost from "../Data/HollywoodData";
import TechnologyPost from "../Data/TechnologyData";
import { VerticalCard } from "../Components/VerticalCard";

export default function Home() {
  return (
    <div>
      <Header />
      <hr className="container headingPartition" />
      <div className="container box">
        <LargeImageOverlay />
        <div className="side-box d-flex">
          <SmallImageOverlay />
          <SmallImageOverlay />
        </div>
      </div>
      <h2 className="mt-4 mb-1 latest-heading">The Latest</h2>
      <div className="line mb-4"></div>
      <div className="cards-container">
        <HorizontalBigCard
          id={HollywoodPost[1].id}
          img={HollywoodPost[1].img}
          title={HollywoodPost[1].title}
          details={HollywoodPost[1].details}
          date={HollywoodPost[1].date}
          type={HollywoodPost[1].type}
        />

        <HorizontalBigCard
          id={FoodPost[1].id}
          img={FoodPost[1].img}
          title={FoodPost[1].title}
          details={FoodPost[1].details}
          date={FoodPost[1].date}
          type={FoodPost[1].type}
        />

        <HorizontalBigCard
          id={TechnologyPost[0].id}
          img={TechnologyPost[0].img}
          title={TechnologyPost[0].title}
          details={TechnologyPost[0].details}
          date={TechnologyPost[0].date}
          type={TechnologyPost[0].type}
        />

        <HorizontalBigCard
          id={TechnologyPost[1].id}
          img={TechnologyPost[1].img}
          title={TechnologyPost[1].title}
          details={TechnologyPost[1].details}
          date={TechnologyPost[1].date}
          type={TechnologyPost[1].type}
        />

        <HorizontalBigCard
          id={FitnessPost[0].id}
          img={FitnessPost[0].img}
          title={FitnessPost[0].title}
          details={FitnessPost[0].details}
          date={FitnessPost[0].date}
          type={FitnessPost[0].type}
        />

        <HorizontalBigCard
          id={FitnessPost[1].id}
          img={FitnessPost[1].img}
          title={FitnessPost[1].title}
          details={FitnessPost[1].details}
          date={FitnessPost[1].date}
          type={FitnessPost[1].type}
        />
      </div>

      <h2 className="mt-5 mb-1 latest-article">The Latest Article</h2>
      <div className="line"></div>
      <div className="d-flex ver-article ">
        <div>
          <VerticalCard
            id={BollywoodPost[0].id}
            img={BollywoodPost[0].img}
            title={BollywoodPost[0].title}
            details={BollywoodPost[0].details}
            date={BollywoodPost[0].date}
            type={BollywoodPost[0].type}
          />

          <hr />

          <VerticalCard
            id={BollywoodPost[2].id}
            img={BollywoodPost[1].img}
            title={BollywoodPost[1].title}
            details={BollywoodPost[1].details}
            date={BollywoodPost[1].date}
            type={BollywoodPost[1].type}
          />

          <hr />

          <VerticalCard
            id={HollywoodPost[0].id}
            img={HollywoodPost[0].img}
            title={HollywoodPost[0].title}
            details={HollywoodPost[0].details}
            date={HollywoodPost[0].date}
            type={HollywoodPost[0].type}
          />
        </div>

        <div className="side-bar">
          <p className="text-center ad">Advertisement</p>
          <img
            src="https://newspaperads.ads2publish.com/wp-content/uploads/2018/11/pay-using-amazon-pay-100-instant-cashback-ad-times-of-india-mumbai-10-11-2018.png"
            alt=""
            width="550px"
            height="775 px"
          />
        </div>
      </div>
      <h2 className="mt-5 mb-1 latest-article">More from The Siren</h2>
      <div className="line-article"></div>
      <br />
      <br />
      <div>
        <div className="cards-container">
          <HorizontalBigCard
            id={FoodPost[3].id}
            img={FoodPost[3].img}
            title={FoodPost[3].title}
            details={FoodPost[3].details}
            date={FoodPost[3].date}
            type={FoodPost[3].type}
          />
          <hr />

          <HorizontalBigCard
            id={BollywoodPost[3].id}
            img={BollywoodPost[3].img}
            title={BollywoodPost[3].title}
            details={BollywoodPost[3].details}
            date={BollywoodPost[3].date}
            type={BollywoodPost[3].type}
          />

          <hr />

          <HorizontalBigCard
            id={HollywoodPost[3].id}
            img={HollywoodPost[3].img}
            title={HollywoodPost[3].title}
            details={HollywoodPost[3].details}
            date={HollywoodPost[3].date}
            type={HollywoodPost[3].type}
          />
        </div>
      </div>
    </div>
  );
}
