import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Mathimals from "../images/Mathimals.png";
import shoppingCart from "../images/shopping-cart.png";
import memoryCard from "../images/memory-card.png";
import Image from "react-bootstrap/Image";
import "../style/app.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Work() {
  return (
    <div className="works" style={{ width: "22rem" }}>
      {/* <h1>My latest works: </h1> */}
      <Carousel variant="dark">
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
                variant="primary"
                style={{ margin: "2px" }}
              >
                Live demo
              </Button>
              <Button
                href="https://anna-murat.itch.io/mathimals"
                target="_blank"
                variant="primary"
                style={{ margin: "2px" }}
              >
                Itch.io demo
              </Button>
              <Button
                href="https://github.com/muratcan-yuksel/Mathimals"
                target="_blank"
                variant="primary"
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
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
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
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Work;
