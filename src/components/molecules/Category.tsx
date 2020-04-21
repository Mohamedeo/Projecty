import React from 'react';
import styled from 'styled-components';

const StyledCategory = styled.section`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 4rem;
`;

const StyledCategoryHeading = styled.h2<{ type: string }>`
  font-weight: 500;
  color: #0d0c22;
  margin-bottom: 8rem;
  font-size: 1.8rem;
  position: relative;
  transform: translateX(2rem);

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: -2rem;
    width: 5px;
    height: 110%;
    background-color: ${({ theme }) => theme.yellowPrimary};
    background-color: ${({ type }) => {
      switch (type) {
        case 'yellow':
          return '#f7b801';
        case 'green':
          return '#1FC844';
        case 'blue':
          return '#2E5BFF';
        case 'red':
          return '#EA4C89';
        default:
          return '#f7b801';
      }
    }};
    border-radius: 7px;
  }
`;

interface Props {
  heading: string;
  type: string;
}

const Category: React.FC<Props> = ({ heading, children, type }) => (
  <StyledCategory>
    <StyledCategoryHeading type={type}>{heading}</StyledCategoryHeading>
    {children}
  </StyledCategory>
);

export default Category;