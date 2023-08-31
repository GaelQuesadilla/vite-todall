import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "./layout";
import { Index } from "./routes";
export const App = () => {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route exact path="*" Component={() => <Index />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
};
