import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, Route, createRoutesFromElements, RouterProvider} from "react-router-dom"
import "./assets/styles/index.css"
import "./assets/styles/bootstrap.custom.css"
import "bootstrap/dist/css/bootstrap.min.css"
import './index.css'
import ProductScreen from './screens/ProductScreen.jsx'
import HomeScreen from './screens/HomeScreen.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
    <Route index={true} path="/" element={<HomeScreen />}/>
    <Route path='/product/:id' element={<ProductScreen />}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
