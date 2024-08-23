import { toggleTheme } from "@utils/toggleTheme";
import * as S from "./styled";
import { Icon } from "@static/icons";
import { useState, type FC } from "react";
import { Hamburger } from "./components/Hamburger";

export const Navigation: FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <S.NavigationStyled>
            <S.NavigationListWrapper $isOpen={isOpen}>
                <S.NavigationList>
                    <li>
                        <a href="/">
                            <Icon iconData="home" alt="home icon" />
                            Inicio
                        </a>
                    </li>
                    <li>
                        <a href="/about">
                            <Icon iconData="person" alt="about me icon" />
                            Sobre mi
                        </a>
                    </li>
                    <li>
                        <a href="/projects">
                            <Icon iconData="work" alt="work icon" />
                            Proyectos
                        </a>
                    </li>
                    <li>
                        <a href="/contact">
                            <Icon iconData="contact" alt="contact icon" />
                            Contacto
                        </a>
                    </li>
                    <li>
                        <a href="/blog">
                            <Icon iconData="blog" alt="blog icon" />
                            Blog
                        </a>
                    </li>
                    <S.NavigationSocials />
                </S.NavigationList>
            </S.NavigationListWrapper>
            <S.NavigationThemeToggleWrapper>
                <S.NavigationThemeToggle onClick={toggleTheme}>
                    <Icon
                        iconData="themeDark"
                        alt="dark theme icon"
                        data-theme-el="light"
                    />
                    <Icon
                        iconData="themeLight"
                        alt="light theme icon"
                        data-theme-el="dark"
                    />
                </S.NavigationThemeToggle>
            </S.NavigationThemeToggleWrapper>
            <Hamburger
                state={{
                    open: isOpen,
                    setOpen: setIsOpen,
                }}
            />
        </S.NavigationStyled>
    );
};
