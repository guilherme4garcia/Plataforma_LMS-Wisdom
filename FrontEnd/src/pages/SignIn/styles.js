import styled, { keyframes } from 'styled-components';

import { shade } from 'polished';

import LoginImg from '../../assets/Login-Cadastro/Login_Img.svg';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
  background-color: var(--primary-initial-bg);
  width: 100%;
  max-width: 700px;
  @media screen and (max-width: 798px) {
    max-width: 500px;
  }
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${appearFromLeft} 1s;
  /* img {
    height: 75px;
    width: 75px;
    position: relative;
    right: 20px;
  }
  form {
    width: 400px;
    h1 {
      margin-bottom: 2px;
      color: var(--primary-initial-text);
    }
    p {
      margin-bottom: 40px;
      font-size: 15px;
      color: var(--secondary-initial-text);
    }
    button {
      padding: 0 16px;
      height: 56px;
      width: 100%;
      border-radius: 10px;
      background-color: var(--primary-color);
      margin-top: 30px;
      color: var(--color-white);
      font-weight: 500;
      transition: background-color 0.4s;
      &:hover {
        background: ${shade(0.2, '#3C8ACB')};
      }
    }
    a {
      color: var(--secondary-initial-text);
      display: block;
      margin-top: 10px;
      transition: color 0.2s;
      font-size: 15px;
      svg {
        margin-right: 8px;
      }
      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }
  > a {
    color: var(--secondary-color);
    display: block;
    margin-top: 24px;
    transition: color 0.2s;
    display: flex;
    align-items: center;
    svg {
      margin-right: 16px;
    }
    &:hover {
      color: ${shade(0.2, '#64C77C')};
    }
  } */
  @media screen and (max-width: 458px) {
    form {
      width: 350px;
    }
  }
  @media screen and (max-width: 378px) {
    form {
      width: 320px;
    }
  }
  @media screen and (max-width: 328px) {
    form {
      width: 300px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${LoginImg}) no-repeat center;
  background-color: var(--secondary-initial-bg);
`;
