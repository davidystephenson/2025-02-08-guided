import { Form, Dropdown, Button } from "react-bootstrap";
import { useState } from 'react'
import AdminProductsListPage from "./AdminProductsListPage";

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
  const [listing, setListing] = useState(false)
  if (listing) {
    return <AdminProductsListPage />
  }

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
    event.preventDefault()
    const localProducts = localStorage.getItem('products')
    const products = JSON.parse(localProducts)
    /*
    {
      category: 5,
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      id: 1,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      quantity: 0,
      rating:  {rate: 3.9, count: 120}
    }
    */
    const oldIds = products.map(product => product.id)
    const maximumId = Math.max(...oldIds)
    const newId = maximumId + 1
    const newProduct = {
      category: Number(categoryId),
      description,
      id: newId,
      image,
      name,
      price: Number(price),
      quantity: Number(quantity),
      rating: {
        rate: 0,
        count: 0
      }
    }
    const newProducts = [...products, newProduct]
    const newProductsString = JSON.stringify(newProducts)
    localStorage.setItem('products', newProductsString)
    setListing(true)
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