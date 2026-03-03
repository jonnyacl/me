import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Header } from "../components/header";
import { HeroContainer, Subtitle } from "./Me.style";
import { SocialLink, SocialLinks } from "../components/header/Header.style";

export const Me = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route
          path="/"
          element={
            <HeroContainer>
              <Header />
              <Subtitle>I'm a software engineer.</Subtitle>
              <Subtitle>Here's a bit more about me.</Subtitle>
              <SocialLinks>
                <SocialLink
                  href="https://github.com/jonnyacl"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img
                    src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                    alt="GitHub"
                  />
                </SocialLink>
                <SocialLink
                  href="https://www.linkedin.com/in/jonathan-lea-2270a981/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg"
                    alt="LinkedIn"
                  />
                </SocialLink>
                <SocialLink
                  href="https://lichess.org/@/lejonbrames"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img
                    src="https://images.prismic.io/lichess/5cfd2630-2a8f-4fa9-8f78-04c2d9f0e5fe_lichess-box-1024.png?auto=compress,format"
                    alt="Lichess"
                  />
                </SocialLink>
                <SocialLink
                  href="https://www.strava.com/athletes/6034792"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img
                    src="https://d3nn82uaxijpm6.cloudfront.net/assets/activities/icon-ios-app-fdd1ed3da3ce334990af99517dc8f735832f6e5a3bb97feff3abdbd091caffba.svg"
                    alt="Strava"
                  />
                </SocialLink>
              </SocialLinks>
            </HeroContainer>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Me;
