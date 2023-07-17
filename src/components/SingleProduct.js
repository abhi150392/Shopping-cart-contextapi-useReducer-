import React from "react";
import "./styles.css";
import { Button, Card } from "react-bootstrap";

const SingleProduct = ({ prod }) => {
  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src={prod.image} />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>₹ {prod.price.split(".")[0]}</span>
            {prod.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>4 days delivery</div>
            )}
          </Card.Subtitle>
          <Button variant="danger">Remove from Cart</Button>
          <Button disabled={!prod.inStock}>
            {!prod.inStock ? "Out of Stock" : "Add to Cart"}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
