import React from "react";
import Button from "react-bootstrap/Button";
import face from "../Images/face.png";
import share from "../Images/share.svg";
import clap from "../Images/clap.svg";
import BollywoodPost from "../Data/BollywoodData";
import HollywoodPost from "../Data/HollywoodData";
import { HorizontalBigCard } from "../Components/HorizontalCard";
import FitnessPost from "../Data/FitnessData";

const NextPage = (props) => {
  return (
    <>
      <div className="container header ">
        <div className="d-flex mt-3">
          <p className="h6 Vlogo">The</p>
          <h3 className="head4 Hlogo"> Siren</h3>
        </div>
        <Button variant="outline-danger h-25 mt-3 ">Get Started</Button>
      </div>
      <hr className="hr" />
      <div className="d-flex next-box">
        <div className="share-box">
          <a href="#k" className="d-flex text-decoration-none ">
            <img src={clap} alt="" />
            <p className="ms-4 text-dark my-3">9.3K</p>
          </a>
          <a href="#ff" className="d-flex mt-3 text-decoration-none">
            <img src={share} alt="" />
            <p className="ms-4 text-dark my-3">Share this article</p>
          </a>
        </div>
        <div className="box-center">
          <h3 className="my-3 ">{props.title} </h3>
          <div className="d-flex mb-3">
            <img src={face} alt="" className="circle me-3 " />
            <div className="logo-detail">
              <h5 className="m-0 mt-1">Dmitry Nozhe</h5>
              <p className="grey-text m-0 text-muted">
                Jan 28, 2019 · 10 min read
              </p>
            </div>
            <a href="#fg" className="mt-3 ms-5">
              <i class="fab fa-facebook text-grey"></i>
              <i class="fab fa-instagram-square ms-1 text-grey"></i>
              <i class="fab fa-twitter ms-1 text-grey"></i>
              <i class="fab fa-youtube ms-1 text-grey"></i>
            </a>
          </div>
          <img
            src="https://pbs.twimg.com/media/Fj8NNmTaEAETVo8?format=jpg&name=small"
            alt=""
            height="200px"
            width="396px"
            className="card-img"
          />

          <p className="next-para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolore
            nobis laudantium fuga sunt eveniet voluptatibus vitae reiciendis eos
            quod exercitationem est, cumque repudiandae minus, recusandae
            nesciunt temporibus labore blanditiis deleniti nulla atque magnam.
            Nostrum impedit hic quisquam labore omnis veritatis magni ipsam!
            Reprehenderit voluptatem, expedita ex suscipit quia beatae impedit
            quis cum officiis adipisci est nam nisi, corporis quaerat assumenda?
            Distinctio autem nam, esse repudiandae ratione enim voluptate veniam
            ea debitis quam, suscipit, fugiat qui tempore soluta provident a
            error accusantium harum consequatur nihil sit itaque porro? Placeat
            quidem dolore laboriosam itaque ipsum error unde facere voluptatum
            eos alias!
          </p>

          <div className="resp-share-box ">
            <a href="#k" className="d-flex text-decoration-none">
              <img src={clap} alt="" className="img-res" />
              <p className="text-dark ">9.3K</p>
            </a>
            <a href="#ff" className="d-flex text-decoration-none">
              <img src={share} alt="" className="img-res" />
              <p className="text-dark ">Share this article</p>
            </a>
          </div>
        </div>
        <div className="side-bar">
          <p className="text-center ad">Advertisement</p>
          <img
            className="adv-article"
            src="https://newspaperads.ads2publish.com/wp-content/uploads/2018/11/pay-using-amazon-pay-100-instant-cashback-ad-times-of-india-mumbai-10-11-2018.png"
            alt=""
            width="400px"
            height="610 px"
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
            id={BollywoodPost[0].id}
            img={BollywoodPost[0].img}
            title={BollywoodPost[0].title}
            details={BollywoodPost[0].details}
            date={BollywoodPost[0].date}
            type={BollywoodPost[0].type}
          />
          <hr />

          <HorizontalBigCard
            id={FitnessPost[1].id}
            img={FitnessPost[1].img}
            title={FitnessPost[1].title}
            details={FitnessPost[1].details}
            date={FitnessPost[1].date}
            type={FitnessPost[1].type}
          />

          <hr />

          <HorizontalBigCard
            id={HollywoodPost[0].id}
            img={HollywoodPost[0].img}
            title={HollywoodPost[0].title}
            details={HollywoodPost[0].details}
            date={HollywoodPost[0].date}
            type={HollywoodPost[0].type}
          />
        </div>
      </div>
    </>
  );
};

export default NextPage;
