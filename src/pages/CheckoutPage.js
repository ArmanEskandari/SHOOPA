import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { PageHero } from "../components";

const CheckoutPage = () => {
  return (
    <main>
      <PageHero title="Checkout" />
      <Wrapper className="page">
        <h1>Thanks for your shopping</h1>
        <Link to="/">
          <button className="btn">Home</button>
        </Link>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

export default CheckoutPage;
