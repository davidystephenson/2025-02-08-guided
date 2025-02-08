import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import LoginPage from "./pages/LoginPage";
import categories from "./categories";
import products from "./products";
import UsersListPage from "./pages/admin_pages/UsersListPage";
import CategoriesListPage from "./pages/admin_pages/CategoriesListPage";
import AdminProductsListPage from "./pages/admin_pages/AdminProductsListPage";
import UserProfilePage from "./pages/UserProfilePage"

const App = () => {
  const loggedIdUser = JSON.parse(sessionStorage.getItem('loggedInUser'))
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          {loggedIdUser && !loggedIdUser.isAdmin && <UserProfilePage/>}
          {loggedIdUser && loggedIdUser.isAdmin && <AdminProductsListPage />}
          {/*loggedIdUser && loggedIdUser.isAdmin && <CategoriesListPage/>*/}
          {/*loggedIdUser && loggedIdUser.isAdmin && <UsersListPage/>*/}
          {!loggedIdUser && <LoginPage />}
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;