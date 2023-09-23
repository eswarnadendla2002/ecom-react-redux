import SmartPhones from "../components/smartphones";
import LandingPage from "../pages/landing_page";
import RegistrationPage from "../pages/registration_page";

export const routes = [
  {
    path: "/",
    component: LandingPage,
  },
  {
    path: "/registration",
    component: RegistrationPage,
  },
  {
    path: "/products/:item",
    component: SmartPhones,
  },
];
