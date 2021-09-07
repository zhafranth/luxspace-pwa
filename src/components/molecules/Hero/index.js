import React from "react";

// Components
import { Button } from "../../atoms";

// Child Components
import { Main, Container, Content, ImgWrapper, ImgCover } from "./style";

// Assets
import BgImage from "../../../assets/content/image-section-1.png";
import IconPlay from "../../../assets/content/icon-play.svg";

const Hero = ({ handleShowModals }) => {
  return (
    <Main>
      <Container>
        <Content>
          <h2>The Room You've Dreaming</h2>
          <p>
            Kami menyediakan furniture berkelas yang membuat ruangan terasa
            homey
          </p>
          <Button>Explore Now</Button>
        </Content>
        <Content>
          <ImgWrapper>
            <ImgCover src={BgImage} alt="background images" />
            <div className="icons-play">
              <div className="button" onClick={handleShowModals}>
                <img src={IconPlay} alt="Icon Play" />
              </div>
            </div>
          </ImgWrapper>
        </Content>
      </Container>
    </Main>
  );
};

export default Hero;
