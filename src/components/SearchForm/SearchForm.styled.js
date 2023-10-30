import styled from "styled-components";

// export const Wrapper = styled.div`
//   display: inline-flex;
//   align-items: center;
//   margin-bottom: 16px;
//   text-transform: uppercase;
// `
export const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: center; */
  margin: 20px;
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  margin-right: 15px;
  font-size: 16px;
`;

export const Button = styled.button`
  background-color: lightblue;
  border: 1px solid #0d57aa;
  border-radius: 4px;
  padding: 8px 18px;
  font-size: 16px;
  transition: background-color 250 ease-in-out, color 250 ease-in-out;
  /* 250 ease-in-out */

  &:hover,
  &:focus {
    background-color: #0d57aa;
    color: #ffffff;
  }
`;