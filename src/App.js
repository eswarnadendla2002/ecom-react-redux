import "./App.css";
import LandingPage from "./pages/landing_page";
import RegistrationPage from "./pages/registration_page";
import { Container } from "reactstrap";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { routes } from "./routes/routes";
function App() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          {routes &&
            routes.map((item, index) => {
              return (
                <Route
                  key={index}
                  path={item.path}
                  element={<item.component />}
                ></Route>
              );
            })}
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
