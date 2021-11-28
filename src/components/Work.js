import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Mathimals from "../images/Mathimals.png";
import shoppingCart from "../images/shopping-cart.png";
import memoryCard from "../images/memory-card.png";
import Image from "react-bootstrap/Image";
import "../style/app.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import binance from "../images/binance.png";
import smartContract from "../images/smart.png";
import NFT from "../images/NFT.png";

function Work() {
  return (
    <div className="works" style={{ width: "42rem" }}>
      {/* <h1>My latest works: </h1> */}
      <Carousel fade>
        <Carousel.Item>
          <Card style={{ width: "42rem" }} bg="dark" text="white">
            <Card.Img style={{ height: "60vh" }} variant="top" src={NFT} />
            <Card.Body>
              <Card.Title>NFT collection</Card.Title>
              <Card.Text className="cardText">
                <p className="text">
                  An NFT collection made with ReactJS and Solidity
                </p>
                <p className="text">
                  In order to connect to the app, you need a crypto wallet (like
                  Metamask)
                </p>
                <p className="text">
                  After connecting, you can mint a unique NFT
                </p>
                <p className="text">
                  It's deployed on the rinkeby network, so it doesn't cost real
                  money to interact with
                </p>
              </Card.Text>
              <Button
                href="https://my-nft-collection.herokuapp.com/"
                target="_blank"
                variant="warning"
                style={{ margin: "2px" }}
              >
                Live demo
              </Button>
              <Button
                href="https://github.com/muratcan-yuksel/epic-nfts"
                target="_blank"
                variant="warning"
                style={{ margin: "2px" }}
              >
                Solidity code
              </Button>
              <Button
                href="https://github.com/muratcan-yuksel/my-nft-collection"
                target="_blank"
                variant="warning"
                style={{ margin: "2px" }}
              >
                React code
              </Button>
            </Card.Body>
          </Card>
        </Carousel.Item>{" "}
        <Carousel.Item>
          <Card style={{ width: "42rem" }} bg="dark" text="white">
            <Card.Img
              style={{ height: "60vh" }}
              variant="top"
              src={smartContract}
            />
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
                style={{ margin: "2px" }}
              >
                Live demo
              </Button>
              <Button
                href="https://github.com/muratcan-yuksel/wave-portal-solidity"
                target="_blank"
                variant="warning"
                style={{ margin: "2px" }}
              >
                Solidity code
              </Button>
              <Button
                href="https://github.com/muratcan-yuksel/waveportal-starter-project"
                target="_blank"
                variant="warning"
                style={{ margin: "2px" }}
              >
                React code
              </Button>
            </Card.Body>
          </Card>
        </Carousel.Item>{" "}
        <Carousel.Item>
          <Card style={{ width: "42rem" }} bg="dark" text="white">
            <Card.Img style={{ height: "60vh" }} variant="top" src={binance} />
            <Card.Body>
              <Card.Title>Binance clone</Card.Title>
              <Card.Text className="cardText">
                This app provides the user with realtime btc/usd exchange rates.
                Tech used=> React.js/redux-toolkit, websockets. I initially made
                the app using vite instead of create-react-app, and state hooks.
                They both work the same. I'll provide the source codes.
              </Card.Text>
              <Button
                href="https://muratcan-yuksel.github.io/skyneb-app/"
                target="_blank"
                variant="warning"
                style={{ margin: "2px" }}
              >
                Live demo
              </Button>
              <Button
                href="https://github.com/muratcan-yuksel/websockets"
                target="_blank"
                variant="warning"
                style={{ margin: "2px" }}
              >
                Source code with state hooks and vite
              </Button>
              <Button
                href="https://github.com/muratcan-yuksel/skyneb-app"
                target="_blank"
                variant="warning"
                style={{ margin: "2px" }}
              >
                Source code with redux and create-react-app
              </Button>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card style={{ width: "42rem" }} bg="dark" text="white">
            <Card.Img
              style={{ height: "60vh" }}
              variant="top"
              src={Mathimals}
            />
            <Card.Body>
              <Card.Title>Mathimals</Card.Title>
              <Card.Text>
                A game done by an international group of coders that strives to
                teach kids some basic math, animal names, and spelling. In the
                front-end Vanilla JS is used. For the back-end, we chose Google
                Firestore. First 5 fastest typers are shown on the best scores
                list. The game is made for The Odin Project's 1st game-jam.
              </Card.Text>
              <Button
                href="https://muratcan-yuksel.github.io/Mathimals/"
                target="_blank"
                variant="warning"
                style={{ margin: "2px" }}
              >
                Live demo
              </Button>
              <Button
                href="https://anna-murat.itch.io/mathimals"
                target="_blank"
                variant="warning"
                style={{ margin: "2px" }}
              >
                Itch.io demo
              </Button>
              <Button
                href="https://github.com/muratcan-yuksel/Mathimals"
                target="_blank"
                variant="warning"
                style={{ margin: "2px" }}
              >
                Source code
              </Button>
            </Card.Body>
          </Card>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Work;
