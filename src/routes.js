import Home from "./pages/home";
import Services from "./pages/services";
import About from "./pages/About";
import PrivatePolicy from "./pages/PrivacyPolicy";
import ContactUs from "./pages/ContactUs";
import Faq from "./pages/Faq";
import Example from "./pages/Example";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import Productdetail from "./pages/Productdetail";
import { Searchresult } from "./pages/Search/Searchresult";
import AddAddress from "./pages/ChangeAddress/AddAddress";
import AddAdress from "./pages/AddAdress/AddAdress";
import Payment from "./pages/Payment/Payment";
import Notification from "./pages/Notification/Notification";
import Mobileservice from "./pages/MobileService/Mobileservice";
import Time from "./pages/TimeSlot/Time";
import Cartmobile from "./pages/CartMobile/Cartmobile";
import OrderSummary from "./pages/OrderSummary/OrderSummary";
const routes = [
  {
    type: "route",
    name: "home",
    key: "home",
    route: "/home-page",
    component: <Home />,
  },
  {
    type: "route",
    name: "About",
    key: "About",
    route: "/about-page",
    component: <About />,
  },

  {
    type: "route",
    name: "PrivatePolicy",
    key: "PrivatePolicy",
    route: "/privatePolicy-page",
    component: <PrivatePolicy />,
  },
  {
    type: "route",
    name: "ContactUs",
    key: "ContactUs",
    route: "/contactUs-page",
    component: <ContactUs />,
  },
  {
    type: "route",
    name: "Faq",
    key: "Faq",
    route: "/faq-page",
    component: <Faq />,
  },
  {
    type: "route",
    name: "Order",
    key: "Order",
    route: "/order-page",
    component: <Order />,
  },
  {
    type: "route",
    name: "Cart",
    key: "Cart",
    route: "/cart-page",
    component: <Cart />,
  },
  {
    type: "route",
    name: "services",
    key: "services",
    route: "/services-page",
    component: <Services />,
  },
  {
    type: "route",
    name: "Example",
    key: "Example",
    route: "/example-page",
    component: <Example />,
  },
  {
    type: "route",
    name: "Productdetail",
    key: "Productdetail",
    route: "/productdetail-page",
    component: <Productdetail />,
  },
  {
    type: "route",
    name: "Searchresult",
    key: "Searchresult",
    route: "/Searchresult-page",
    component: <Searchresult />,
  },
  {
    type: "route",
    name: "AddAddress",
    key: "AddAddress",
    route: "/addAddress-page",
    component: <AddAddress />,
  },
  {
    type: "route",
    name: "AddAdress",
    key: "AddAdress",
    route: "/addAdress-page",
    component: <AddAdress />,
  },
  {
    type: "route",
    name: "Payment",
    key: "Payment",
    route: "/payment-page",
    component: <Payment />,
  },
  {
    type: "route",
    name: "Notification",
    key: "Notification",
    route: "/notification-page",
    component: <Notification />,
  },
  {
    type: "route",
    name: "MobileService",
    key: "MobileService",
    route: "/mobileService-page",
    component: <Mobileservice />,
  },
  {
    type: "route",
    name: "Time",
    key: "Time",
    route: "/time-page",
    component: <Time />,
  },

  {
    type: "route",
    name: "CartMobile",
    key: "CartMobile",
    route: "/cartMobile-page",
    component: <Cartmobile />,
  },
  {
    type: "route",
    name: "OrderSummary",
    key: "OrderSummary",
    route: "/orderSummary-page",
    component: <OrderSummary />,
  },
];
export default routes;
