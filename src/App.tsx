
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ErrorPage } from "./error-page"
import Home from "./pages/home"


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <ErrorPage  />,
    },
  ])

 
  

  return <RouterProvider router={router}/>
}

export default App
