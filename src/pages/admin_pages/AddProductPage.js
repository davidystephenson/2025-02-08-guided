import { Form, Dropdown, Button } from "react-bootstrap";
import { useState } from 'react'

/*
<th>Name</th>
<th>Category</th>
<th>Price</th>
<th>Image</th>
<th>Description</th>
<th>Quantity</th>
*/

const AddProductPage = () => {
  const [name, setName] = useState('')
  const [categoryId, setCategoryId] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')
  const [quantity, setQuantity] = useState('')
  const localCategories = localStorage.getItem('categories')
  const categories = JSON.parse(localCategories)
  const options = categories.map(category => {
    return (
      <Dropdown.Item key={category.id} eventKey={category.id}>
        {category.name}
      </Dropdown.Item>
    )
  })
  const category = categories.find(category => {
    return category.id === Number(categoryId)
  })
  const categoryName = category
    ? category.name
    : 'Select a category'
  function handleSubmit (event) {
  }
  return (
    <>
      <h2>Add Product</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={name} 
            onChange={(event) => setName(event.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Category</Form.Label>
          <Dropdown onSelect={setCategoryId}>
            <Dropdown.Toggle>{categoryName}</Dropdown.Toggle>
            <Dropdown.Menu>
              {options}
            </Dropdown.Menu>
          </Dropdown>
        </Form.Group>
        <Form.Group>
          <Form.Label>Price</Form.Label>
          <Form.Control
            value={price}
            onChange={event => setPrice(event.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Image</Form.Label>
          <Form.Control
            value={image}
            onChange={event => setImage(event.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            value={description}
            onChange={event => setDescription(event.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            value={quantity}
            onChange={event => setQuantity(event.target.value)}
          />
        </Form.Group>
        <Button type='submit'>Submit</Button>
      </Form>
    </>
  )
};

export default AddProductPage;