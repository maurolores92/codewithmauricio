import { type FC } from "react";
import { Image } from "@static/images";
import * as S from "./styled";
import { LogosSliderData, LogosSliderData2 } from "./data";
import { Container } from "@components/Container";
import { Autoplay } from "swiper/modules";
import { SwiperSlider } from "@components/SwiperSlider";
import { FadeIn } from "@utils/animations/FadeIn";

export const LogosSlider: FC = () => {

    const data = LogosSliderData;
    const data2 = LogosSliderData2;

    const slides = data.map((slide, index) => (
        <S.Logo key={index}>
            <FadeIn>
                <Image
                    src={slide.logo.src}
                    width={slide.logo.width}
                    height={slide.logo.height}
                    alt={slide.alt}
                    loading="lazy"
                />
            </FadeIn>
        </S.Logo>
    ));

    const slides2 = data2.map((slide, index) => (
        <S.Logo key={index}>
            <FadeIn>
                <Image
                    src={slide.logo.src}
                    width={slide.logo.width}
                    height={slide.logo.height}
                    alt={slide.alt}
                    loading="lazy"
                />
            </FadeIn>
        </S.Logo>
    ));

    return (
        <S.LogosSliderStyled>
            <Container>
                <FadeIn>
                    <h2>Tecnologias y Herramientas</h2>
                </FadeIn>
            </Container>
            <SwiperSlider
                modules={[Autoplay]}
                options={{
                    slidesPerView: "auto",
                    loop: true,
                    freeMode: true,
                    autoplay: {
                        delay: 0,
                        disableOnInteraction: false,
                    },
                }}
            >
                {slides}
            </SwiperSlider>
            <SwiperSlider
                modules={[Autoplay]}
                options={{
                    slidesPerView: "auto",
                    loop: true,
                    freeMode: true,
                    autoplay: {
                        delay: 0,
                        disableOnInteraction: false,
                    },
                }}
            >
                {slides2}
            </SwiperSlider>
        </S.LogosSliderStyled>
    );
};