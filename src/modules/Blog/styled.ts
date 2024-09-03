import { Container } from "@components/Container";
import styled from "@emotion/styled";
import { Theme } from "@styles/colors";
import { MediaQuery } from "@styles/mediaQuery";

export const BlogStyled = styled.section`
    background: ${Theme.bgElement};
    padding: 100px 0;
`;

export const ContainerStyled = styled(Container)`
    ${MediaQuery.min("xxxl")} {
        max-width: 920px;
    }
`;

export const IntroductionSection = styled.section`
    margin: 4rem 0;
    p {
        font-size: 20px;
        margin-bottom: 2rem;
    }
`;

export const BlogPostList = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr); /* Por defecto, 1 columna */
  gap: 16px;
  padding: 0;
  list-style: none;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr); /* 2 columnas para tabletas */
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr); /* 3 columnas para escritorio */
  }
`;

export const BlogPostItem = styled.li`
  display: flex;
  flex-direction: column;
  margin: 0;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
  list-style: none;
`;

export const BlogPostImage = styled.div`
    flex: 1;
    text-align: center;
    margin: 0 auto;
    .featured-image-main {
        max-width: 100%;
        height: auto;
        border-radius: 8px;
    }
`;

export const BlogPostContent = styled.div`
    flex: 2;
    margin-left: 20px;
    text-align: left;

    h4 {
        margin-top: 0;
    }

    .publish-date {
        font-size: 14px;
        color: #888;
    }

    a {
        font-size: 16px;
        color: #007acc;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`;