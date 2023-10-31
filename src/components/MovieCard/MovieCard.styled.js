import styled from "styled-components";

export const Subtitle = styled.h3`
    font-size: 400;
    color: #4848a4;
`
export const DetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    @media only screen and (min-width: 768px) {     
        flex-direction: row;
        align-items: start;
        gap: 10px;      
    }
`
export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 24px;
`
export const ImgWrapper = styled.div`
    width: 250px;
    height: 375px;
`