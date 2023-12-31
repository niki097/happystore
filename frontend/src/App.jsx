import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <h1 className='text-center'>Welcome to Happy Store</h1>
        <Outlet/>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
