import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Mathimals from "../images/Mathimals.png";
import Image from "react-bootstrap/Image";
import "../style/app.css";
import "../style/work-style.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import binance from "../images/binance.png";
import smartContract from "../images/smart.png";
import NFT from "../images/NFT.png";
import { useMediaQuery } from "react-responsive";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Work() {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 });
  const isBigScreen = useMediaQuery({ minWidth: 1824 });
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  return (
    <div>
      <div className="container">
        <div className="row rowFlex">
          <div className="col-12 col-sm-12	col-md-12	col-lg-6	col-xl-6	col-xxl-6">
            <div className="workImgContainer">
              <img src={smartContract} alt="" className="workImg" />
            </div>
          </div>
          <div className="col-12 col-sm-12	col-md-12	col-lg-6	col-xl-6	col-xxl-6">
            <Card.Body>
              <Card.Title>Web3 app</Card.Title>
              <Card.Text className="cardText">
                <p className="text">
                  A smart contract made with ReactJS and Solidity
                </p>
                <p className="text">
                  In order to connect to the app, you need a crypto wallet (like
                  Metamask)
                </p>
                <p className="text">
                  After connecting, you can write a message and wave
                </p>
                <p className="text">
                  It's deployed on the rinkeby network, so it doesn't cost real
                  money to interact with
                </p>
              </Card.Text>
              <Button
                href="https://my-web3-app.vercel.app/"
                target="_blank"
                variant="warning"
                style={{ margin: "2px", padding: "5px" }}
              >
                Live demo
              </Button>
              <Button
                href="https://github.com/muratcan-yuksel/wave-portal-solidity"
                target="_blank"
                variant="warning"
                style={{ margin: "2px", padding: "5px" }}
              >
                Solidity code
              </Button>
              <Button
                href="https://github.com/muratcan-yuksel/waveportal-starter-project"
                target="_blank"
                variant="warning"
                style={{ margin: "2px", padding: "5px" }}
              >
                React code
              </Button>
            </Card.Body>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
