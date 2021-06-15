import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const FormContainer = styled.form`
  /* width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
  border-radius: 10px; */
`;

export const MutedLink = styled.span`
  font-size: 11px;
  color: rgba(9,9,121,0.8);
  font-weight: 500;
  font-style: italic;
  margin: 0;
`;

export const BoldLink = styled.a`
  font-size: 20px;
  color: rgba(9,9,121,0.8);
  font-weight: 500;
  text-decoration: none;
  line-height: 100%;
  position: relative;
  top: 10%;
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 0px 10px;
  border-radius: 5px;
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 14px;
  margin-bottom: 2%;

  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }

  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid rgba(9,9,121,0.6);
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 11px;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(2,0,36);
  background: linear-gradient(
    90deg,
    rgba(9,9,121,1) 50%,
    rgba(0,212,255,1) 100%
  );

  &:hover {
    filter: brightness(1.03);
  }
`;

