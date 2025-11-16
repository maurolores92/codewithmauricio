import styled from "@emotion/styled";
import { Theme } from "@styles/colors";
import { MediaQuery } from "@styles/mediaQuery";

export const LogosSliderStyled = styled.section`
    padding: 100px 0;

    background: ${Theme.bgElement};

    ${MediaQuery.max("lg")} {
        padding: 50px 0 0;
    }

    h2 {
        margin-bottom: 50px;
    }

    .swiper .swiper-slide {
        width: calc(100% / 14);

        ${MediaQuery.max("xl")} {
            width: calc(100% / 6);
        }

        ${MediaQuery.max("lg")} {
            width: calc(100% / 4);
        }

        ${MediaQuery.max("md")} {
            width: calc(100% / 3);
        }
    }
`;

export const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
        background: #fff;
        border-radius: 12px;
        margin: 10px auto;
        width: 80px;
        height: 80px;
        padding: 0;
        box-shadow: 0 2px 8px rgba(0,0,0,0.04), 0 1px 8px 0 rgba(255,255,255,0.12);
        border: 1px solid #eaeaea;

    img {
        width: 40px;
        height: 40px;
        object-fit: contain;
            display: block;
            margin: auto;
`;
