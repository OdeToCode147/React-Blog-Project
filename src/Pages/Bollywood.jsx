import React from "react";
import Header from "../Components/Header";
import HorizontalSmallCard, { CardHead } from "../Components/HorizontalCard";
import VerticalSmallCard from "../Components/VerticalCard";
import BollywoodPost, {
  BollywoodFirstPost,
  BollywoodTopPost,
} from "../Data/BollywoodData";

const Bollywood = () => {
  return (
    <>
      <Header />
      <hr className="container headingPartition" />
      <div className="container">
        <div className="d-flex content-box">
          <div className="content-box-main">
            <h2 className=" mt-3 Page-heading">Bollywood</h2>
            <div className="page-line"></div>
            <br />
            {BollywoodPost.map((val) => {
              return (
                <>
                  <VerticalSmallCard
                    id={val.id}
                    img={val.img}
                    title={val.title}
                    details={val.details}
                    date={val.date}
                    type={val.type}
                  />
                  <hr />
                </>
              );
            })}
          </div>
          <div className="content-box-side">
            <h2 className="mt-3 top-posts">Top Posts</h2>
            <div className="page-line-2 mb-4"></div>
            {BollywoodFirstPost.map((val) => {
              return (
                <>
                  <HorizontalSmallCard
                    id={val.id}
                    img={val.img}
                    title={val.title}
                    date={val.date}
                    type={val.type}
                    num={val.num}
                  />
                  <hr />
                </>
              );
            })}
            {BollywoodTopPost.map((val) => {
              return (
                <>
                  <CardHead
                    id={val.id}
                    img={val.img}
                    title={val.title}
                    date={val.date}
                    type={val.type}
                    num={val.num}
                  />
                  <hr />
                </>
              );
            })}
            <div className="side-bar">
              <p className="text-center ad">Advertisement</p>
              <img
                src="https://newspaperads.ads2publish.com/wp-content/uploads/2018/11/pay-using-amazon-pay-100-instant-cashback-ad-times-of-india-mumbai-10-11-2018.png"
                alt=""
                width="400px"
                height="775 px"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bollywood;
