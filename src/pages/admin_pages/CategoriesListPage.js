import { Button, Table } from "react-bootstrap";
import { useState } from "react";
import AddCategoryPage from "./AddCategoryPage";

const CategoriesListPage = () => {
  const [adding, setAdding] = useState(false)
  if (adding) {
    return <AddCategoryPage />
  }
  const localCategories = localStorage.getItem('categories')
  const categories = JSON.parse(localCategories)
  console.log('categories', categories)
  const rows = categories.map(category => {
    return (
      <tr key={category.id}>
        <td>{category.id}</td>
        <td>{category.name}</td>
        <td>{category.description}</td>
      </tr>
    )
  })
  function handleClick () {
    setAdding(true)
  }
  return (
    <>
      <h2>Categories List</h2>
      <Button onClick={handleClick}>Add Category</Button>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </Table>
    </>
  )
};

export default CategoriesListPage;
