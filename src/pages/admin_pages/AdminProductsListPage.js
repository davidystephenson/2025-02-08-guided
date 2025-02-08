import { Table, Image } from "react-bootstrap";

const AdminProductsListPage = () => {
  const localProducts = localStorage.getItem('products')
  const products = JSON.parse(localProducts)
  const localCategories = localStorage.getItem('categories')
  const categories = JSON.parse(localCategories)
  const rows = products.map(product => {
    const category = categories.find(category => {
      return category.id === product.category
    })
    return (
      <tr key={product.id}>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{category.name}</td>
        <td>${product.price}</td>
        <td>
          <Image src={product.image} height={100} width={100} />
        </td>
        <td>{product.description}</td>
        <td>{product.quantity}</td>
        <td>{product.rating.rate} ({product.rating.count})</td>
      </tr>
    )
  })
  return (
    <>
      <h1>Products List</h1>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Image</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </Table>
    </>
  )
};

export default AdminProductsListPage;
