import { type FC } from "react";
import * as S from "./styled";
import { Logo } from "@components/Logo";

export const Footer: FC = () => {
    return (
        <S.FooterStyled>
            <S.FooterContainer>
                <Logo />
                <S.FooterContent>
                    <p>© 2024 Todos los derechos reservados</p>
                    <p>
                        Diseñado por:{" "}
                            Mauricio Lores
                    </p>
                </S.FooterContent>
            </S.FooterContainer>
        </S.FooterStyled>
    );
};
