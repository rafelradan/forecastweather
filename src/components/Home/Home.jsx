//import styled from 'styled-components';
import { useEffect, useState } from 'react'

import { DivApp, Header, Content, DivButton, CardWeather } from './styleHome'

import Logo from '../../assets/logo.png'
import Temp from '../../assets/temp.png'

export default function Home(){
    const [ city, setCity ] = useState("")
    const [ weatherForecast, setWeatherForecast ] = useState(null)
    const [ day, setDay ] = useState("")
   
        async function handleLoadListWeather() {
           fetch(`http://api.weatherapi.com/v1/current.json?key=bfc74d4f6e69455fa5592632223011&q=${city}&days=1&lang=pt`)
            .then((response) => {
                if( response.status === 200 ) {
                    return response.json( )
                }
            })
            .then((data) => {
                console.log(data);
                setWeatherForecast(data)
            })
            .catch((err) => {
                console.log(err);
            })

            handleDay()
        }

        function handleDay() {
            const  newDay = new Date().getDay()

            switch (newDay) {
                case 0: 
                    setDay("Domingo");                          
                    break;
                case 1: 
                    setDay("Segunda-feira");                          
                    break;
                case 2: 
                    setDay("Terça-feira");                          
                    break;
                case 3: 
                    setDay("Quarta-feira");                          
                    break;
                case 4: 
                    setDay("Quinta-feira");                          
                    break;
                case 5: 
                    setDay("Sexta-feira");                          
                    break;
                default: setDay("Sábado");                          
                    break;
            }
        }

       useEffect(() => {
        document.addEventListener('keydown', detectKey, true)
       })

       const detectKey = (e) => {
        console.log(e.key);

        if (e.key === 'Enter') {
            handleLoadListWeather()
        }
       }

    return(
        <DivApp className="App">
            <Header className="App-header">
               <div className='logo'>
                    <img src={Logo} alt='Logo da página'/>
               </div>
               <div className='menu'>
                    <ul>
                        <li><a href='' target={'_blank'}>Início</a></li>
                        <li><a href='' target={'_blank'}>Sobre</a></li>
                        <li><a href='' target={'_blank'}>Contato</a></li>
                        <input type='search' placeholder="Pesquisar" onChange={(e)=> setCity(e.target.value)}></input>

                    </ul>
               </div>
            </Header>

            <Content className='content'>
               <div className='top-left'>
                    <div>
                        <h1>Verifique agora como está o tempo na sua cidade!</h1>
                        <span>Digite no campo abaixo o nome da cidade e em seguida clique no botão pesquisar.</span>
                        <input type='search' placeholder="Pesquisar" onChange={(e)=> setCity(e.target.value)} onKeyDown></input>
                    </div>

                    <DivButton>
                        <button onClick={handleLoadListWeather}>Pesquisar</button>
                    </DivButton>
               </div>

               <div className='top-wright'>
                    <img src={Logo} alt="Imagem grande, logo do site" />
               </div>
                
            </Content>
            <div className='content-weather'>
                    <div className='list-capitais-weather'>
                        {
                            weatherForecast ? (
                                <CardWeather className='dataWeatherCity'>
                                   <div className='card-top'>
                                        <div className='title'>
                                            <h2>{city.toLocaleUpperCase()}</h2>
                                            <h3 className='region'>{weatherForecast.location.region} - {weatherForecast.location.country}</h3>
                                        </div>
                                        <div className='infor-date'>
                                            <span>{day} </span>
                                            <span>{new Date().toLocaleDateString()} </span>
                                        </div> 

                                        <img src={weatherForecast.current.condition.icon} className='temp-icon' />

                                        <div className='card-infor'>
                                            <span>{weatherForecast.current.condition.text} </span><br />
                                            <span className='span-temp'>
                                                <img src={Temp} alt="Icone de temperatura" className='icon-temp'/>                  
                                                {weatherForecast.current.temp_c}ºc | Umidade: {weatherForecast.current.humidity}
                                            </span>
                                        </div>  
                                   </div>
                                </CardWeather>
                            ) : null
                        }
                    </div>
                </div>
        </DivApp>
    )
}