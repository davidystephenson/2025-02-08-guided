import React from "react";
import { Card } from 'react-bootstrap'

const Product = ({ product }) => {
  return (
    <Card className="p-3 my-3 rounded">
      <Card.Img variant="top" src={product.image} width={100} height={300} />
      <Card.Body>
        <Card.Title as="div">
          <strong>{product.name}</strong>
        </Card.Title>
        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  )
};

export default Product;