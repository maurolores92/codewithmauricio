import { type FC } from "react";
import * as S from "./styled";
import { Button } from "@components/Button";
import { Container } from "@components/Container";
import { Socials } from "@components/Socials";
import SamplePdf from "@static/sample.pdf";
import { FadeIn } from "@utils/animations/FadeIn";

export const Hero: FC = () => {
    return (
        <S.HeroWrapper>
            <Container>
                <S.HeroContent>
                    <FadeIn>
                        <S.HeroImageStyled
                            srcLocal="MauroDev"
                            alt="hero"
                            width={300}
                            height={300}
                            loading="lazy"
                        />
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <S.PreHeading data-aos="fade-up">
                            Hola, me llamo <strong>Mauricio Lores</strong>
                        </S.PreHeading>
                        <S.HeroTitle>Web Developer</S.HeroTitle>
                        <p>
                            Soy <b>Desarrollador Frontend</b>{" "} con mas de <b>3</b> años de experiencia en la industria.
                        </p>
                    </FadeIn>
                    <FadeIn delay={0.3}>
                        <Socials />
                    </FadeIn>
                    <FadeIn delay={0.4}>
                        <Button link={SamplePdf} target="_blank">
                            Descargar CV
                        </Button>
                    </FadeIn>
                </S.HeroContent>
            </Container>
        </S.HeroWrapper>
    );
};
