import { Outlet, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Cart from "./Pages/Cart";
import Search from "./Pages/search/Search";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./App.css";
import "../src/components/UserProfileSetting/userProfile.css"

import DeliveryAddress from "./Pages/checkout/DeliveryAddress";
import DeliveryType from "./Pages/checkout/DeliveryType";
import PaymentMethod from "./Pages/checkout/PaymentMethod";
import Success from "./Pages/checkout/Success";
import OrderDetails from "./Pages/orders/Orders";
// import Request from "./Pages/createAccount/Request";
// import Verification from "./Pages/createAccount/Verification";
import Main from './components/UserProfileSetting/Main';

import { Provider } from 'react-redux';
import store from './Store/Store';

import AllOrders from './Pages/UserProfileSetting/MyOrders/AllOrders';
import MyReviews from './Pages/UserProfileSetting/MyOrders/MyReviews';
import MyWishlist from './Pages/UserProfileSetting/MyOrders/MyWishlist';
import Saveforlater from './Pages/UserProfileSetting/MyOrders/Saveforlater';

import ManageAddress from './Pages/UserProfileSetting/MyProfile/ManageAddress';
import Notification from './Pages/UserProfileSetting/MyProfile/Notification';
import PaymentInfo from './Pages/UserProfileSetting/MyProfile/PaymentInfo';
import PersonalInfo from './Pages/UserProfileSetting/MyProfile/PersonalInfo';
import Details from "./Pages/Details";
import Login from "./Pages/account/Login";
import Verification from "./Pages/account/Verification";
import CreateAccount from "./Pages/account/CreateAccount";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const UserProfileSettingLayout = () => {
  return (
    <>
      <Header />
      <Main />
    </>
  )
}


const PaymentFlowLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<Error />} />
          <Route path="/details" element={<Details/>}/>
        </Route>

        <Route element={<UserProfileSettingLayout />}>
          <Route path="/UserProfileSetting/PersonalInfo" element={<PersonalInfo />} />
          <Route path="/UserProfileSetting/MyReviews" element={<MyReviews />} />
          <Route path="/UserProfileSetting/AllOrders" element={<AllOrders />} />
          <Route path="/UserProfileSetting/MyWishlist" element={<MyWishlist />} />
          <Route path="/UserProfileSetting/Saveforlater" element={<Saveforlater />} />
          <Route path="/UserProfileSetting/ManageAddress" element={<ManageAddress />} />
          <Route path="/UserProfileSetting/Notification" element={<Notification />} />
          <Route path="/UserProfileSetting/PaymentInfo" element={<PaymentInfo />} />
        </Route>

        <Route element={<PaymentFlowLayout />}>
          <Route path="/deliveryAddress" element={<DeliveryAddress />} />
          <Route path="/deliveryType" element={<DeliveryType />} />
          <Route path="/paymentMethod" element={<PaymentMethod />} />
          <Route path="/success" element={<Success />} />
          <Route path="/orders" element={<OrderDetails />} />
        </Route>
        <Route path="/login" element={<Login/>} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/create-account" element={<CreateAccount />} />
      </Routes>
    </Provider>
  );
}

export default App;
