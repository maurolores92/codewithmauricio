import { type FC } from "react";
import * as S from "./styled";
import { Icon } from "@static/icons";

export const Socials: FC = ({ ...rest }) => {
    return (
        <S.SocialsStyled {...rest}>
            <S.SocialsList>
                <S.SocialsListItem>
                    <S.SocialsLink
                        href="https://github.com/maurolores92"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Icon iconData="github" alt="github" />
                    </S.SocialsLink>
                </S.SocialsListItem>
                <S.SocialsListItem>
                    <S.SocialsLink
                        href="https://www.linkedin.com/in/mauriciolores/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Icon iconData="linkedin" alt="linkedin" />
                    </S.SocialsLink>
                </S.SocialsListItem>
                <S.SocialsListItem>
                    <S.SocialsLink
                        href="https://www.facebook.com/mauricio.lores/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Icon iconData="facebook" alt="facebook" />
                    </S.SocialsLink>
                </S.SocialsListItem>
                <S.SocialsListItem>
                    <S.SocialsLink
                        href="https://wa.me/5491126882173"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Icon iconData="whatsapp" alt="whatsapp" />
                    </S.SocialsLink>
                </S.SocialsListItem>
                <S.SocialsListItem>
                    <S.SocialsLink
                        href="https://instagram.com/mlores.dev"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Icon iconData="instagram" alt="instagram" />
                    </S.SocialsLink>
                </S.SocialsListItem>
                <S.SocialsListItem>
                    <S.SocialsLink
                        href="https://es.fiverr.com/s/P2W3eqP"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Icon iconData="fiver" alt="fiver" />
                    </S.SocialsLink>
                </S.SocialsListItem>
            </S.SocialsList>
        </S.SocialsStyled>
    );
};
