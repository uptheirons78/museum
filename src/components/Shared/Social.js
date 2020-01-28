import React from "react";
import styled from "styled-components";

// Components
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";

const Social = ({ socialClassName }) => {
  const containerClass =
    socialClassName === "intro" ? "social-container intro" : "social-container";

  return (
    <SocialContainer className={containerClass}>
      <li className="social-link social-link__envelop">
        <a href="/">
          <FaEnvelope />
        </a>
      </li>
      <li className="social-link social-link__facebook">
        <a href="/">
          <FaFacebookF />
        </a>
      </li>
      <li className="social-link social-link__linkedin">
        <a href="/">
          <FaLinkedinIn />
        </a>
      </li>
      <li className="social-link social-link__twitter">
        <a href="/">
          <FaTwitter />
        </a>
      </li>
    </SocialContainer>
  );
};

export default Social;

const SocialContainer = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
  transform: translateY(5px);

  &.intro {
    @media screen and (max-width: 600px) {
      display: none;
    }
  }

  .social-link {
    margin-right: 0.5rem;
    svg {
      fill: #ffffff;
      width: 3rem;
      height: 1.5rem;
      padding: 0.2rem;
    }
  }
  .social-link__envelop {
    svg {
      background: #3c469a;
    }
  }
  .social-link__facebook {
    svg {
      background: #3a579a;
    }
  }
  .social-link__linkedin {
    svg {
      background: #127bb6;
    }
  }
  .social-link__twitter {
    svg {
      background: #4ab3f4;
    }
  }
`;
