import { Table } from "react-bootstrap";

const CategoriesListPage = () => {
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
  return (
    <>
      <h1>Categories List</h1>
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
