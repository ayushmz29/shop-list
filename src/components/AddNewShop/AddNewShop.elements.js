import styled from "styled-components";

export const AddNewShopWrapper = styled.div`
  width: 40%;
  /* height: 30px; */
  background-color: whitesmoke;
  margin: 1em;
  padding: 1em;
  border-radius: 8px;

  /* Form Styles */
  .form-main {
    display: flex;
    flex-direction: column;
  }

  input,
  label,
  select {
    padding: 0.3em 0;
  }

  .button-grp {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 1em;
  }
`;
