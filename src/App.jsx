import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/Layout"
import MenuList from "./pages/02_MenuList"
import MenuCard from "./pages/03_MenuCard"
import Cart from "./pages/04_Cart"
import Header from "./components/Header.jsx"

const router = createBrowserRouter([{
  path: '/',
  element: <Layout />,
  children: [
    {path: '/', element: <MenuList />},
    {path: '/:id', element: <MenuCard />},
    {path: '/cart', element: <Cart />},
  ]
}])

function App() {
  return <RouterProvider router={router} />
    <Header />
}


export default App
