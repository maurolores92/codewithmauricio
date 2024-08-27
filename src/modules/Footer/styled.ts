import styled from "@emotion/styled";
import { Theme } from "@styles/colors";
import { MediaQuery } from "@styles/mediaQuery";

export const FooterStyled = styled.footer`
    width: 100%;
    background: ${Theme.bgElement};
    padding: 20px 40px;
    box-shadow: 0 0 10px rgb(123 123 123 / 10%);
    position: fixed; /* Fija el footer en la parte inferior */
    bottom: 0; /* Asegura que esté en la parte inferior */
    left: 0; /* Asegura que esté alineado a la izquierda */
    z-index: 1000; /* Asegura que esté por encima de otros elementos */
`;

export const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;

    ${MediaQuery.max("lg")} {
        flex-direction: column;
        gap: 20px;
        justify-content: center;
        align-items: center;
    }
`;

export const FooterContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    ${MediaQuery.max("lg")} {
        flex-direction: column;
    }

    p {
        margin: 0;
    }
`;
