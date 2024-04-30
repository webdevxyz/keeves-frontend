import { Outlet, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./App.css";

import { Provider } from 'react-redux';
import store from './Store/Store';
import Details from "./Pages/Details";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/details" element={<Details/>}/>
        </Route>

      </Routes>
    </Provider>
  );
}

export default App;
