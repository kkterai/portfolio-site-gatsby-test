import IndexLayout from '../layouts';
import Wrapper from '../components/Wrapper';
import SiteNav from '../components/header/SiteNav';
import { SiteHeader, outer, inner, SiteMain } from '../styles/shared';
import * as React from 'react';
import { css } from '@emotion/core';

import { PostFullHeader, PostFullTitle, NoImage, PostFull } from '../templates/post';
import { PostFullContent } from '../components/PostContent';
import Footer from '../components/Footer';
import Helmet from 'react-helmet';

const PageTemplate = css`
  .site-main {
    background: #fff;
    padding-bottom: 4vw;
  }
`;

const About: React.FC = () => (
  <IndexLayout>
    <Helmet>
      <title>About</title>
    </Helmet>
    <Wrapper css={PageTemplate}>
      <header css={[outer, SiteHeader]}>
        <div css={inner}>
          <SiteNav />
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <article className="post page" css={[PostFull, NoImage]}>
          <PostFullHeader>
            <PostFullTitle>About</PostFullTitle>
          </PostFullHeader>

          <PostFullContent className="post-full-content">
            <div className="post-content">
              <p>
              <p>About me? Thanks for asking. I love Web Development, especially when it comes to Javascript, ReactJS, and Rails. My wish is to combine my knowledge and experience to deliver the best results to clients. I also love coffee. In short, I am: </p>

                <p>1. Passionate (I love what I do) 
                <br />2. Enthusiastic (I want to learn) 
                <br />3. Skeptical (I think critically) 
                <br />4. Focused (I have the right attitude)</p>

                <p>I enjoy travel, running, biking, ocean sports, and have had the pleasure of exploring many US States and sixteen other countries. When I’m not looking at a computer screen, you will find me outdoors, spending time with family, or listening to music – maybe even all at once.</p>

                <p>You can find me here and over <a href="https://medium.com/@kenlynterai">there</a>.</p>
              </p>
              <p>
              </p>
              <p>
              </p>
            </div>
          </PostFullContent>
        </article>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;
