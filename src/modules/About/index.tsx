import { type FC } from "react";
import * as S from "./styled";
import { Container } from "@components/Container";
import { Image } from "@static/images";
import { Button } from "@components/Button";
import { TextBox } from "@components/textBox";
import { FadeIn } from "@utils/animations/FadeIn";

type AboutProps = {
    hideExp?: boolean;
};

// Hide exp is for hiding the commercial experience - on the about page cuz there is a separate section for that
export const About: FC<AboutProps> = ({ hideExp }) => {
    return (
        <S.AboutStyled>
            <Container>
                <FadeIn>
                    <S.AboutTitle>Sobre Mi</S.AboutTitle>
                </FadeIn>
                <S.AboutContent>
                    <S.AboutContentText>
                        <FadeIn>
                            <p>
                            Soy un desarrollador web freelance con formación continua en Javascript y React. 
                            Mi objetivo es crear soluciones web innovadoras, accesibles y funcionales, 
                            que respondan a las necesidades y expectativas de los clientes y usuarios.
                            </p>

                            <h3>¿Que puedo hacer?</h3>
                            <p>
                            Desarrollo proyectos web de forma independiente, utilizando una amplia gama de herramientas y 
                            tecnologías avanzadas, como TypeScript, React, Next.js, MySQL. 
                            Mi experiencia en el desarrollo web me permite crear aplicaciones eficientes y de alto rendimiento,
                            aprovechando las últimas tendencias y tecnologías del sector.
                            </p>
                        </FadeIn>
                        <FadeIn>
                            <S.AboutContentBoxesWrapper>
                                
                                <TextBox>
                                    <h4>Desarrollador Web</h4>
                                    <p>
                                        Desarrollo sitios web dinámicos y responsivos, enfocados en rendimiento 
                                        y experiencia de usuario.
                                    </p>
                                </TextBox>

                                <TextBox>
                                    <h4>Diseñador UX/UI</h4>
                                    <p>
                                    Diseño interfaces intuitivas y atractivas que mejoran la experiencia del usuario.
                                    </p>
                                </TextBox>

                                <TextBox>
                                    <h4>Administrador de Redes<p>de internet</p></h4>
                                    <p>
                                    Gestiono y optimizo redes de internet, asegurando su seguridad y eficiencia.
                                    </p>
                                </TextBox>
                            </S.AboutContentBoxesWrapper>
                        </FadeIn>
                        {!hideExp && (
                            <FadeIn>
                                <h3>Certificaciones y Experiencia Profesional</h3>
                                <S.AboutContentBoxesWrapper>
                                    <TextBox
                                        variant="background-text"
                                        bgText="Junior"
                                    >
                                        <h4>Javascript</h4>
                                        <p>3 años</p>
                                    </TextBox>
                                    <TextBox
                                        variant="background-text"
                                        bgText="Junior"
                                    >
                                        <h4>React</h4>
                                        <p>2 años</p>
                                    </TextBox>
                                    <TextBox
                                        variant="background-text"
                                        bgText="junior"
                                    >
                                        <h4>Next.js</h4>
                                        <p>2 años</p>
                                    </TextBox>
                                    <TextBox
                                        variant="background-text"
                                        bgText="Junior"
                                    >
                                        <h4>Figma</h4>
                                        <p>1 año</p>
                                    </TextBox>
                                </S.AboutContentBoxesWrapper>
                                <Button link="/about">Ver mas</Button>
                            </FadeIn>
                        )}
                    </S.AboutContentText>
                    <S.AboutContentImage>
                        <FadeIn delay={0.3}>
                            <Image
                                srcLocal="MauroDev"
                                alt="MauroDev"
                                width={500}
                                height={500}
                            />
                        </FadeIn>
                    </S.AboutContentImage>
                </S.AboutContent>
            </Container>
        </S.AboutStyled>
    );
};
