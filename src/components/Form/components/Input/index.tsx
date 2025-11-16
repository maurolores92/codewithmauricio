import { type FC } from "react";
import * as S from "./styled";

type InputProps = {
    placeholder: string;
    type: "text" | "email" | "textarea";
    register: any;
    error?: any;
};
export const Input: FC<InputProps> = ({
    placeholder,
    type,
    register,
    error,
    ...rest
}) => {
    /**
     * Display input based on the type
     */
    const InputComponent =
        type === "textarea" ? S.InputTextAreaStyled : S.InputStyled;

    // register can be a function or an object, but with react-hook-form v7+ it's an object
    return (
        <S.InputWrapper>
            <InputComponent
                placeholder={placeholder}
                name={register.name}
                ref={register.ref}
                onChange={register.onChange}
                onBlur={register.onBlur}
                {...rest}
            />
            {error && <p>{error}</p>}
        </S.InputWrapper>
    );
};
