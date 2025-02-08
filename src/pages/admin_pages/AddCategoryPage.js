import { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import CategoriesListPage from './CategoriesListPage';

const AddCategoryPage = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [listing, setListing] = useState(false)
  if (listing) {
    return <CategoriesListPage />
  }
  function handleNameChange (event) {
    setName(event.target.value)
  }
  function handleDescriptionChange (event) {
    setDescription(event.target.value)
  }
  function handleSubmit (event) {
    event.preventDefault()
    const localCategories = localStorage.getItem('categories')
    const categories = JSON.parse(localCategories)

    const oldIds = categories.map(category => category.id)
    const maximumId = Math.max(...oldIds)
    const newId = maximumId + 1

    const newCategory = {
      name,
      description,
      id: newId
    }
    const newCategories = [...categories, newCategory]
    const newCategoriesString = JSON.stringify(newCategories)
    localStorage.setItem('categories', newCategoriesString)
    setListing(true)
  }
  return (
    <>
      <h2>Add Category</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={name}
            onChange={handleNameChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            value={description}
            onChange={handleDescriptionChange}
          />
        </Form.Group>
        <Button type='submit'>Submit</Button>
      </Form>
    </>
  )
};

export default AddCategoryPage;
