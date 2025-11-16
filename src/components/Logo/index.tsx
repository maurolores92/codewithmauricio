import * as S from "./styled";
import type { FC } from "react";

export const Logo: FC = () => {
    return (
        <S.LogoStyled>
            <a href="/">
                <span>MauroDev</span>
            </a>
        </S.LogoStyled>
    );
};
