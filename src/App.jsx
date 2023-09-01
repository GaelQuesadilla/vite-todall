import "bootstrap/dist/js/bootstrap.min.js";
import "./styles/index.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { Index } from "./routes/Index";
import { ROUTES } from "./constants/ROUTES";

export const App = () => {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route exact path={ROUTES.INDEX.href} Component={() => <Index />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
};
