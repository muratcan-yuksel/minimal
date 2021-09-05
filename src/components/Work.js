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
              <Card.Title>Card Title</Card.Title>
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
              src={shoppingCart}
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
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
              <Card.Title>Card Title</Card.Title>
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
