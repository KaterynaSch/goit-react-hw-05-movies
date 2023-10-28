import { HiPhotograph } from "react-icons/hi";
import styled from "styled-components";

// HiPhoto
export const CastList = styled.ul`
    margin-top: 30px;
    display: flex;
    align-items: center;
    gap: 40px;
    flex-wrap: wrap;
`
export const DefaultIcon = styled(HiPhotograph)`
    width: 250px;
    height: 375px;
    fill: #fff;
    background-color: lightblue;
`