import React from "react";
import {BsArrowLeftRight} from "react-icons/bs";

interface Props {
    children?: React.ReactNode;
    height: string;
    onClick: () => void;
    radius: string
    width: string;
    rightLeftArrow?: boolean;
    padding?: string;
    margin?: string

}

const Button: React.FC<Props> = ({
                                     children,
                                     height,
                                     onClick,
                                     radius,
                                     margin,
                                     width,
                                     padding ,
                                     rightLeftArrow
                                 }) => {
    return (
        <>
            <button
                className = "button"
                onClick={onClick}
                style={{
                    borderRadius: radius,
                    height,
                    width,
                    padding,
                    margin
                }}
            >
                {children}
                {rightLeftArrow ?   <BsArrowLeftRight /> : "" }
            </button>

        </>

    );
}

export default Button;