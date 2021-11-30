import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Mathimals from "../images/Mathimals.png";
import Image from "react-bootstrap/Image";
import "../style/app.css";
import "../style/work-style.css";
import Button from "react-bootstrap/Button";
import binance from "../images/binance.png";
import smartContract from "../images/smart.png";
import NFT from "../images/NFT.png";
import { useMediaQuery } from "react-responsive";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function Work() {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 });
  const isBigScreen = useMediaQuery({ minWidth: 1824 });
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  return (
    <div>
      <Container>
        <Row>
          <Col>
            {" "}
            <Card class="cards" style={{ width: "22rem" }}>
              <Card.Img class="workImg" variant="top" src={smartContract} />
              <Card.Body className="cardText">
                <Card.Title>Web3 app</Card.Title>
                <Card.Text className="cardText">
                  <p className="text">
                    A smart contract made with ReactJS and Solidity
                  </p>
                  <p className="text">
                    In order to connect to the app, you need a crypto wallet
                    (like Metamask)
                  </p>
                  <p className="text">
                    After connecting, you can write a message and wave
                  </p>
                  <p className="text">
                    It's deployed on the rinkeby network, so it doesn't cost
                    real money to interact with
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
            </Card>
          </Col>
          <Col>
            {" "}
            <Card class="cards" style={{ width: "22rem" }}>
              <Card.Img class="workImg" variant="top" src={NFT} />
              <Card.Body className="cardText">
                <Card.Title>NFT collection</Card.Title>
                <Card.Text className="cardText">
                  <p className="text">
                    An NFT collection made with ReactJS and Solidity
                  </p>
                  <p className="text">
                    In order to connect to the app, you need a crypto wallet
                    (like Metamask)
                  </p>
                  <p className="text">
                    After connecting, you can mint a unique NFT
                  </p>
                  <p className="text">
                    It's deployed on the rinkeby network, so it doesn't cost
                    real money to interact with
                  </p>
                </Card.Text>
                {/* <button
                    type="button"
                    class="btn btn-warning"
                    href="https://my-nft-collection.vercel.app/"
                    style={{ margin: "2px", padding: "5px" }}
                    target="_blank"
                  >
                    Warning
                  </button> */}
                <Button
                  href="https://my-nft-collection.vercel.app/"
                  target="_blank"
                  variant="warning"
                  style={{ margin: "2px", padding: "5px" }}
                >
                  Live demo
                </Button>
                <Button
                  href="https://github.com/muratcan-yuksel/epic-nfts"
                  target="_blank"
                  variant="warning"
                  style={{ margin: "2px", padding: "5px" }}
                >
                  Solidity code
                </Button>
                <Button
                  href="https://github.com/muratcan-yuksel/my-nft-collection"
                  target="_blank"
                  variant="warning"
                  style={{ margin: "2px", padding: "5px" }}
                >
                  React code
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Work;
