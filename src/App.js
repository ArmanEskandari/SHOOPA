import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Footer, Navbar, Sidebar } from "./components";
import {
  About,
  AuthWrapper,
  Cart,
  Checkout,
  ErrorPage,
  Home,
  PrivateRoute,
  Products,
  SingleProduct,
} from "./pages";

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/product/:id" component={SingleProduct} />
          <Route path="/about" component={About} />
          <Route path="/cart" component={Cart} />
          <PrivateRoute path="/checkout" component={Checkout} />
          <Route path="*" component={ErrorPage} />
        </Switch>
        <Footer />
      </Router>
    </AuthWrapper>
  );
}

export default App;
