import { type FC } from "react";
import LogoImage from "./logo.webp";
import Preview from "./preview.webp";
import MauroDev from "./maurodev.webp";
import lacostillita from "./lacostillita.webp";
import TECHapp from "./TECHapp.webp";
import thewinenation from "./thewinenation.webp";
import Hernzdentalconnection from "./Hernzdentalconnection.png";
import Lumiflowca from "./Lumiflowca.png";
import Sagcomstore from "./Sagcomstore.png";
import Javimotor from "./Javimotor.png";
import BlueWaveEnergy from "./BlueWaveEnergy.png";
import CrealabStudio from "./CrealabStudio.png";

export const images = {
    logo: LogoImage,
    preview: Preview,
    MauroDev: MauroDev,
    lacostillita: lacostillita,
    TECHapp: TECHapp,
    thewinenation: thewinenation,
    hernzdentalconnection: Hernzdentalconnection,
    lumiflowca: Lumiflowca,
    sagcomstore: Sagcomstore,
    javimotor: Javimotor,
    BlueWaveEnergy: BlueWaveEnergy,
    CrealabStudio: CrealabStudio,
};

type ImageProps = {
    srcLocal?: keyof typeof images;
    src?: string;
    alt: string;
    width?: number | string;
    height?: number | string;
    loading?: "lazy" | "eager";
};

export const Image: FC<ImageProps> = ({
    alt,
    srcLocal,
    height,
    width,
    src,
    loading,
    ...rest
}) => {
    /**
     * If srcLocal or src is not provided throw an error
     */
    if (!srcLocal && !src) {
        throw new Error("srcLocal or src is required");
    }

    /**
     * this component should be able to use local images or images from external sources
     */
    const image = srcLocal ? images[srcLocal] : { src, width, height };

    return (
        <img
            src={image.src}
            alt={alt}
            width={width ? width : image.width}
            height={height ? height : image.height}
            {...rest}
            loading="lazy" 
        />
    );
};

// default export of the images
export { Preview, TECHapp, lacostillita, thewinenation, Hernzdentalconnection, Lumiflowca, Sagcomstore, Javimotor, BlueWaveEnergy, CrealabStudio };
