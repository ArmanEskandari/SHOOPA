import React from "react";
import styled from "styled-components";
import aboutImg from "../assets/hero-bcg.jpeg";
import { PageHero } from "../components";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="furniture" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc
            consequat interdum varius sit amet. Justo eget magna fermentum
            iaculis. Dui nunc mattis enim ut tellus elementum. Amet mattis
            vulputate enim nulla aliquet. Nulla at volutpat diam ut. Leo vel
            fringilla est ullamcorper eget nulla facilisi etiam dignissim.
            Dictumst quisque sagittis purus sit amet volutpat consequat.
            Suspendisse in est ante in nibh mauris cursus mattis. Viverra tellus
            in hac habitasse platea dictumst vestibulum rhoncus est. Non
            consectetur a erat nam. Ridiculus mus mauris vitae ultricies leo
            integer malesuada nunc vel. Vitae tortor condimentum lacinia quis
            vel eros. Aliquam nulla facilisi cras fermentum odio eu feugiat
            pretium. Lectus mauris ultrices eros in cursus turpis massa
            tincidunt dui. Libero nunc consequat interdum varius sit amet
            mattis. Volutpat sed cras ornare arcu dui vivamus arcu felis.
            Aliquet nibh praesent tristique magna sit amet purus.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
