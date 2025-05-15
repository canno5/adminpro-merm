import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import { Login } from "./pages/Login";
import Navbar from './components/Navbar'
import ErrorPage from "./pages/ErrorPage";
import Footer from "./components/Footer";
import { Logout } from "./pages/Logout";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AdminLayout } from "./components/layouts/Admin-Layout";
import { AdminUsers } from "./components/layouts/Admin-User";
import { AdminContacts } from "./components/layouts/Admin-Contacts";
import Admin_Update from "./components/layouts/Admin_Update";
import Admin_Contact_Update from "./components/layouts/Admin_Contact_Update";
import Services_Admin from "./components/layouts/Services_Admin";
import Services from "./pages/Services";
;
const App = () => {
  return <>
    <Navbar />
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/about" Component={About} />
      <Route path="/contact" Component={Contact} />
      <Route path="/services" Component={Services} />
      <Route path="/register" Component={Register} />
      <Route path="/login" Component={Login} />
      <Route path="/logout" Component={Logout} />
      <Route path="/*" element={<ErrorPage />} />
      <Route path="/admin" element={<AdminLayout/>}>
      <Route path="users" element={<AdminUsers/>} />
      <Route path="contacts" element={<AdminContacts/>} />
      <Route path="services" element={<Services_Admin/>} />
      <Route path="users/:id/edit" element={<Admin_Update/>} />
      <Route path="contacts/:id/edit" element={<Admin_Contact_Update/>} />
      </Route>
    </Routes>
    <Footer />
    <ToastContainer  bodyClassName="toastBody" />
  </>


}
export default App