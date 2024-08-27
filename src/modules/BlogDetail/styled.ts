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
    padding-left: 20px;
`;

export const BlogPostItem = styled.li`
    display: flex;
    margin: 4rem 0;
    border-bottom: 1px solid #ddd;
    padding-bottom: 20px;
    flex-direction: row;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 16px;
    list-style: none;

    ${MediaQuery.max("md")} {
        flex-direction: column;
    }
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

export const PageContent = styled.div`
    margin: 0 auto;
    padding: 20px;
    max-width: 70%;

    ${MediaQuery.max("lg")} {
        max-width: 95%;
    }
`;

export const BlogContent = styled.div`
    font-family: Arial, sans-serif;
    line-height: 1.6;

    h1, h2, h3 {
        margin-top: 20px;
        margin-bottom: 10px;
    }

    p {
        font-size: 16px;
        margin: 8px 0;
    }
`;

export const Paragraph = styled.p`
    font-size: 20px;
    margin-bottom: 2rem;
`;

export const FeaturedImage = styled.img`
    display: block;
    margin: 3rem auto;
    max-width: 100%;
    height: auto;
`;

export const StyledButton = styled.button`
    background-color: #527ABD;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;

    a {
        text-decoration: none;
        color: white;
        font-weight: bold;
        display: block;
        text-align: center;
    }

    &:hover {
        background-color: #3f5f9a;
    }
`;

export const CenteredImage = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
`;

export const EmbeddedAssetImage = styled.img`
    max-width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
`;

export const EmbeddedAsset = styled.div`
    text-align: center;
    margin: 20px 0;
`;

// Media queries
export const BlogPostMediaQuery = styled.div`
    ${MediaQuery.max("md")} {
        .blog-post {
            flex-direction: column;
        }

        .blog-post-image {
            margin-right: 0;
            margin-bottom: 20px;
        }
    }
`;