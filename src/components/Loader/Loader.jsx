import { ModalWrapper } from "./Loader.styled";

const { RotatingLines } = require("react-loader-spinner");
export const Loader = () => {
    return (
        <ModalWrapper>
            <RotatingLines
            strokeColor="#1a1a8d"
            strokeWidth="5"
            animationDuration="0.75"
            width="56"
            // visible={true}
            />
        </ModalWrapper>        
    );
};
