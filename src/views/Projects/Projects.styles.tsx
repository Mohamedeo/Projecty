import styled from 'styled-components';
import { Link } from '@reach/router';
import { ButtonSecondaryProps } from './Projects.types';
import { media } from '../../utils/media';

const FormWrapper = styled.main`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
`;

const FormHeadingWrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 2rem;

  ${media.sm`
    width: auto;
    min-width: 40rem;
    height: 100%;
    padding-left: 3rem;
  `}

  ${media.md`
    min-width: 40rem;
  `}

  ${media.xl`
    min-width: 45rem;
  `}

  ${media.xxl`
    min-width: 50rem;
  `}
`;

const Container = styled.section`
  width: 100%;
  height: 100vh;
  padding: 3rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  overflow: hidden;

  ${media.sm`
    padding: 0;
  `}
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 40rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  ${media.sm`
    height: 100%;
    width: 50%;
    justify-content: center;
    padding: 3rem 2rem;
    max-width: 50%;
  `}

  ${media.md`
    width: 60%;
    max-width: 60%;
  `}

  ${media.xxl`
    width: 70%;
    max-width: 70%;
  `}
`;

const LogoWrapper = styled(Link)`
  position: absolute;
  top: 7%;
  left: 4%;
`;

const ButtonsWrapper = styled.div`
  position: absolute;
  top: 5%;
  right: 4%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  ${media.s`
    flex-direction: row;
  `}
`;

const ButtonSecondary = styled(Link)<ButtonSecondaryProps>`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4.3rem;
  width: 13rem;
  margin: 1rem;
  background-color: ${({ type, theme }) => {
    switch (type) {
      case 'yellow':
        return theme.yellowSecondary;
      case 'green':
        return theme.greenSecondary;
      default:
        return theme.yellowSecondary;
    }
  }};
  color: ${({ type, theme }) => {
    switch (type) {
      case 'yellow':
        return theme.yellowPrimary;
      case 'green':
        return theme.greenPrimary;
      default:
        return theme.yellowPrimary;
    }
  }};
  font-size: 1.6rem;
  font-weight: 700;
  border-radius: 10px;
`;

export { FormWrapper, FormHeadingWrapper, Container, Wrapper, LogoWrapper, ButtonsWrapper, ButtonSecondary };
