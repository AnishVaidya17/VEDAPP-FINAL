import styled from 'styled-components'

const Wrapper = styled.section`
  border-radius: var(--borderRadius);
  width: 100%;
  background: transparent;
  //padding: 3rem 2rem 4rem;
  box-shadow: var(--shadow-2);
  h3 {
    margin-top: 0;
  }

  .casepaper-submit {
    display: grid;
    align-items: center;
    justify-content: center;
    font-size: large;
    background-color: var(--primary-700);
  }

  .casepaper-submit:hover {
    background: var(--primary-500);
    box-shadow: var(--shadow-3);
  }

  .form {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 2rem;
    max-width: 100%;
    width: 100%;
  }
  .form-input{
    color: var(--textColor)
  }
  .form-row {
    margin-bottom: 0;
  }
  .form-center {
    display: grid;
    row-gap: 0.5rem;
  }

  .diff-diet-center {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }

  .diff-center {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }
  .diff-hetu {
    margin-bottom: 0.75rem;
  }
  .diff-avastha {
    margin-bottom: 0.75rem;
  }
  .diff-chikitsatatva {
    margin-bottom: 0.75rem;
  }


  .diff-h4 {
    margin: 0;
    margin-bottom: 0.1rem;
    font-family: var(--headingFont);
    font-weight: 400;
    line-height: 1.3;
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
    font-size: 1.563rem;
  }

  .form-center button {
    align-self: end;
    height: 35px;
    margin-top: 1rem;
  }
  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    align-self: flex-end;
    margin-top: 0.5rem;
    button {
      height: 35px;
    }
  }
  .clear-btn {
    background: var(--grey-500);
  }
  .clear-btn:hover {
    background: var(--black);
  }

  .followupbtn {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    text-align: center;
    margin-top: 1rem;
  }
  .form-label {
    display: grid;
    font-size: var(--smallText);
    margin-bottom: 0.5rem;
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
  }
  .followuplabel {
    margin-left: 1rem;
  }

  .followupdate
  {
    
  }
  .followupinput 
  {
    
  }

  .form-center {
    display: grid;
    row-gap: 0.5rem;
  }
  .form-row {
    margin-bottom: 0;
  }
  .followupbackbtn {
    background: var(--grey-500);
    width:15%;
    margin-left: 1rem;
    margin-bottom: 2rem;
  }

  .labelandarea {
    display: flex;

  }
  .followupdiv {
    margin-left: 1rem;
    margin-right: 1rem;
  }

  .form-textarea {
    height: 20rem;
    width: 100%;
    box-sizing: border-box;
    border-radius: 5px;  
  }

  .form-textarea-two {
    height: 10rem;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid black;
    border-radius: 5px;
    background: var(--backgroundColor);
    border: 1px solid var(--grey-200);  
    color: var(--textColor)
  }


  .followupcontent {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 3rem;
    /* margin-left: 1rem;
    margin-right: 1rem; */

  }

  .btn-print {
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 100%;
  }

  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
    .btn-container {
      margin-top: 0;
    }
    .followupdate{
      width: 42%;
    }
    .diff-diet-center{
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin-bottom: 0.75rem;
      margin-left: 1.5rem;
      margin-right: auto;
    }
    .diff-center{
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin-bottom: 0.75rem;
    }
  }
  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .form-center button {
      margin-top: 0;
    }
  }
  @media (min-width: 992px) {
    .followupcontent {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
    .followupbtn {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    margin-top: 1rem;
  }
  }

  .form-space {
    display: flex;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
    .btn-container {
      margin-top: 0;
    }
  }
  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .form-center button {
      margin-top: 0;
    }
  }
`

export default Wrapper
