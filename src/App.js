import Layout from "./components/Layout";
import { Navigate, Route, Routes } from "react-router-dom";
import routes from "./routes";
import AlertTost from "./examples/AlertTost";
import LoginModal from "./components/LoginModal";

function App() {
  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return (
          <Route
            exact
            path={route.route}
            element={route.component}
            key={route.key}
          />
        );
      }

      return null;
    });

  return (
    <Layout>
      <AlertTost />
      <LoginModal />
  
      <Routes>
        {getRoutes(routes)}
        <Route path="*" element={<Navigate to="/home-page" />} />
      </Routes>
      {/* <MobileLeft /> */}
    </Layout>
  );
}

export default App;
