import styled from 'styled-components';

export const DivApp = styled.div`
    background-color: #36695a;
    min-height: 100vh;
    height: 100%;

    box-sizing: border-box;
`;

export const Header = styled.header`
    background-color: #134647;
    color: #FFF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;

    img {
        width: 150px;
    }

    .menu {
        margin-right: 30px;
        text-transform: uppercase;
        font-weight: 600;
        ul {
            list-style: none;
            display: flex;
            gap: 30px;

            a {
                text-decoration: none;
                color: #FFF;
            }

            input {
                width: 100%;
                border-radius: 10px;
                border: none;
                outline-style: none;
                padding: 5px;
            }
        }
    }
`;

export const Content = styled.div`
   // border: solid 1px red;
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin: auto;
    
    .top-left {
       // border:  solid 1px red;
        width: 350px;
        align-self: flex-start;
        margin-left: 60px;
        text-align: justify;
        color: #FFF;
        text-align: left;
        padding: 15px;
        
        h1 {
            color: #ffc820;
            text-align: justify;
        }
        
        input {
            width: 250px;
            border-radius: 10px;
            border: none;
            outline-style: none;
            padding: 5px;
            margin-top: 10px;
            
        } 
    }

    .top-wright{
        //border: solid 1px yellow;
        width: 500px;
        img {
            width: 500px;
        }
    }
`;

export const DivButton = styled.div`
    margin-top: 10px;

    button {
        background-color: #134647;
        color: #fff;
        width: 120px;
        height: 30px;
        border-radius: 5px;
        border: none;
        margin-bottom: 20px;
    }
`;

export const CardWeather = styled.div`
    margin-bottom: 2rem;
    position: absolute ;
    bottom: 0;
    width: 100%;
    margin-bottom: 0px;
    .card-top {
        border-radius: 5px;

        color: #fff;
        background: rgb(0,26,49);
        background: linear-gradient(0deg, rgba(0,26,49,1) 0%, rgba(9,9,121,1) 16%, rgba(45,125,108,1) 52%);

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        width: 100%;
        height: 100px;

        .region {
            margin-top: -20px;
            margin-bottom: 25px;
        }

        .infor-date {
            margin: 0 15px;
        }

        .temp-icon {
            width: 4rem;
            margin: 0.5rem;
        }

        .card-infor {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 1rem;
        }

        .span-temp {
            display: flex;
        }

        .icon-temp {
            width: 1.5rem;
        }
    }
    
`;