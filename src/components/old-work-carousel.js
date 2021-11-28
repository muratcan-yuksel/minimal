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

function Work() {
  return (
    <div className="works" style={{ width: "22rem" }}>
      {/* <h1>My latest works: </h1> */}
      <Carousel variant="dark">
        <Carousel.Item>
          <Card style={{ width: "22rem" }}>
            <Card.Img style={{ height: "60vh" }} variant="top" src={binance} />
            <Card.Body>
              <Card.Title>Binance clone</Card.Title>
              <Card.Text>
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
          <Card style={{ width: "22rem" }}>
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
        <Carousel.Item>
          <Card style={{ width: "22rem" }}>
            <Card.Img
              style={{ height: "60vh" }}
              variant="top"
              src={shoppingCart}
            />
            <Card.Body>
              <Card.Title>E-commerce Website</Card.Title>
              <Card.Text>
                A mock-up e-commerce website where the user can add items in a
                shopping cart that evaluates the total sum that'll be paid. Made
                with React, Context API for global state management, and React
                Router for linking.
              </Card.Text>
              <Button
                href="https://dreamy-saha-641e2a.netlify.app/"
                target="_blank"
                variant="warning"
                style={{ margin: "2px" }}
              >
                Live demo
              </Button>
              <Button
                href="https://github.com/muratcan-yuksel/shopping-cart-react"
                target="_blank"
                variant="warning"
                style={{ margin: "2px" }}
              >
                Source code
              </Button>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card style={{ width: "22rem" }}>
            <Card.Img
              style={{ height: "60vh" }}
              variant="top"
              src={memoryCard}
            />
            <Card.Body>
              <Card.Title>Memory game with philosophers</Card.Title>
              <Card.Text>
                A memory game made with React and Bootstrap 5. The user needs to
                choose a different card on each refresh.
              </Card.Text>
              <Button
                href="https://muratcan-yuksel.github.io/memory-card/"
                target="_blank"
                variant="warning"
                style={{ margin: "2px" }}
              >
                Live demo
              </Button>
              <Button
                href="https://github.com/muratcan-yuksel/memory-card"
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
