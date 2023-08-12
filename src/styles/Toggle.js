import styled from 'styled-components';

export const Toggle = styled.div`
  position: relative;
  width: 60px;
  height: 30px;
  margin-left: 2vw;
  --light: #d8dbe0;
  --dark: #28292c;
  --link: rgb(27, 129, 112);
  --link-hover: rgb(24, 94, 82);

  .checkbox {
    position: absolute;
    display: none;
  }

  .switch-label {
    box-sizing: border-box;
    position: absolute;
    width: 100%;
    height: 30px;
    background-color: var(--dark);
    border-radius: 50px;
    cursor: pointer;
    border: 3px solid var(--dark);
  }

  .slider {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 25px;
    -webkit-transition: 0.3s;
    transition: 0.3s;
  }

  .checkbox:checked ~ .slider {
    background-color: var(--light);
  }

  .slider::before {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    -webkit-box-shadow: inset 10px -4px 0px 0px var(--light);
    box-shadow: inset 10px -4px 0px 0px var(--light);
    background-color: var(--dark);
    -webkit-transition: 0.3s;
    transition: 0.3s;
  }

  .checkbox:checked ~ .slider::before {
    -webkit-transform: translateX(40px);
    -ms-transform: translateX(40px);
    transform: translateX(30px);
    background-color: var(--dark);
    -webkit-box-shadow: none;
    box-shadow: none;
  }
`