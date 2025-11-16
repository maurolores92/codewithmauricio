import { type FC } from "react";

import IconHome from "./icon-home.svg";
import IconService from "./icon-service.svg";
import IconContact from "./icon-contact.svg";
// ...removed blog icon import...
import IconWork from "./icon-work.svg";
import IconPerson from "./icon-person.svg";
import IconThemeDark from "./icon-theme-dark.svg";
import IconThemeLight from "./icon-theme-light.svg";
import IconFacebook from "./icon-facebook.svg";
import IconInstagram from "./icon-instagram.svg";
import IconTwitter from "./icon-twitter.svg";
import IconLinkedIn from "./icon-linkedin.svg";
import IconGithub from "./icon-github.svg";
import IconWhatsapp from "./icon-whatsapp.svg";
import IconFiver from "./icon-fiver.svg";

export const icons = {
    home: IconHome,
    service: IconService,
    contact: IconContact,
    // ...removed blog icon export...
    work: IconWork,
    person: IconPerson,
    themeDark: IconThemeDark,
    themeLight: IconThemeLight,
    facebook: IconFacebook,
    instagram: IconInstagram,
    twitter: IconTwitter,
    linkedin: IconLinkedIn,
    github: IconGithub,
    whatsapp: IconWhatsapp,
    fiver: IconFiver,
};

type IconName = {
    iconData: keyof typeof icons;
    alt: string;
};


export const Icon: FC<IconName> = ({ alt, iconData, ...rest }) => {
    const icon = icons[iconData];

    return (
        <img
            src={icon.src}
            alt={alt}
            width={icon.width}
            height={icon.height}
            data-icon="true"
            {...rest}
            loading="lazy" 
        />
    );
};

import IconLogo1 from "./1.svg";
import IconLogo2 from "./2.svg";
import IconLogo3 from "./4.svg";
import IconLogo4 from "./5.svg";
import IconLogo5 from "./6.svg";
import IconLogo6 from "./7.svg";
import IconLogo7 from "./8.svg";
import IconLogo8 from "./9.svg";
import IconLogo9 from "./10.svg";
import IconLogo10 from "./12.svg";
import IconLogo11 from "./14.svg";
import IconLogo12 from "./15.svg";
import IconLogo13 from "./18.svg";
import IconLogo14 from "./19.svg";
import IconLogo15 from "./20.svg";
import IconLogo16 from "./22.svg";
import IconLogo17 from "./24.svg";
import IconLogo18 from "./25.svg";
import IconLogo19 from "./26.svg";
import IconLogo20 from "./27.svg";
import IconLogo21 from "./28.svg";
import IconLogo22 from "./29.svg";
import IconLogo23 from "./31.svg";
import IconLogo24 from "./32.svg";
import IconLogo25 from "./33.svg";
import IconLogo26 from "./34.svg";
import IconLogo27 from "./35.svg";



// logos saved as svg export them as components
export { IconLogo1, IconLogo2, IconLogo3, IconLogo4, IconLogo5, IconLogo6, IconLogo7, IconLogo8, IconLogo9, IconLogo10, IconLogo11, IconLogo12, IconLogo13, IconLogo14, IconLogo15, IconLogo16, IconLogo17, IconLogo18, IconLogo19, IconLogo20, IconLogo21, IconLogo22, IconLogo23, IconLogo24, IconLogo25, IconLogo26, IconLogo27 };
