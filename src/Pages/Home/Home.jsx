import React, { Component } from 'react'
import './Home.css'
import './Home1.css'
import './Home2.css'
import './Home3.css'
import HomeNav from '../../Components/HomeNav/HomeNav'
import {Link} from 'react-router-dom'

export class Home extends Component {
    state = {
        pgCounter : 1,
    }

    changeBackground = async(actionid) =>{
        var {pgCounter} = this.state
        if(actionid==='next')
        {
            if(pgCounter===1)
            {
                //increment pgCounter using await
                await this.setState((prevState)=>({
                    pgCounter:prevState.pgCounter+1
                }))
                // eslint-disable-next-line 
                var container1 = document.querySelector(`.home_container1`);
                // eslint-disable-next-line 
                var container2 = document.querySelector('.home_container2');
                container2.style.display = 'grid'
                container1.style.transition = '0.7s ease-in'
                container2.style.transition = '0.7s ease-in'
                container1.style.transform = 'translateX(-100vw)'
                setTimeout(() => {
                    container2.style.transform = 'translateX(-100vw)'                
                }, 10);
                //time in ms
            }
            else if(pgCounter===2)
            {
                //increment pgCounter using await
                await this.setState((prevState)=>({
                    pgCounter:prevState.pgCounter+1
                }))
                // eslint-disable-next-line 
                var home_container1 = document.querySelector(`.home_container2`);
                // eslint-disable-next-line 
                var home_container2 = document.querySelector('.home_container3');
                home_container2.style.display = 'grid'
                home_container1.style.transition = '0.7s ease-in'
                home_container2.style.transition = '0.7s ease-in'
                home_container1.style.transform = 'translateX(-200vw)'
                
                setTimeout(() => {
                    home_container2.style.transform = 'translateX(-200vw)'                
                }, 10);
                //time in ms
            }      
        }

        else if(actionid==='prev')
        {
            if(pgCounter===1)
            {

            }
            else if(pgCounter===2)
            {
                //increment pgCounter using await
                await this.setState((prevState)=>({
                    pgCounter:prevState.pgCounter-1
                }))
                // eslint-disable-next-line no-redeclare
                var container1 = document.querySelector(`.home_container2`);
                // eslint-disable-next-line 
                var container2 = document.querySelector('.home_container1');
                container2.style.display = 'grid'
                container1.style.transition = '0.7s ease-in'
                container2.style.transition = '0.7s ease-in'
                // home_container1.style.background = 'black'
                container1.style.transform = 'translateX(100vw)'
                
                setTimeout(() => {
                    container2.style.transform = 'translateX(0vw)'                
                }, 10);
                //time in ms
            }      
            else if(pgCounter===3)
            {
                //increment pgCounter using await
                await this.setState((prevState)=>({
                    pgCounter:prevState.pgCounter-1
                }))
                // eslint-disable-next-line 
                var container1 = document.querySelector(`.home_container3`);
                // eslint-disable-next-line 
                var container2 = document.querySelector('.home_container2');
                container2.style.display = 'grid'
                container1.style.transition = '0.7s ease-in'
                container2.style.transition = '0.7s ease-in'
                // home_container1.style.background = 'black'
                container1.style.transform = 'translateX(200vw)'
                
                setTimeout(() => {
                    container2.style.transform = 'translateX(-100vw)'                
                }, 10);
                //time in ms
            }     
        }
    }

    render() {
        // eslint-disable-next-line 
        var {pgCounter} = this.state
        return (
        <div className="home_container">    
            <div className="home_container1">
                <div className="home_wrapper">
                    <div className="homeNav">
                        <HomeNav/>
                    </div>
                    <div className="homePrev flex-col"><p className="Prevpg para3 lighter pointer" ><i className="fas fa-chevron-left" id='prev'
                    onClick={(e)=>{this.changeBackground(e.target.id)}}></i></p></div>
                    <div className="homeMain">
                        <Link to={`/Product:shoes`}><button className="shopnow1 lighter pointer">SHOP NOW</button> </Link>
                    </div>
                    <div className="homeNext flex-col"><p className="Nextpg para3 lighter pointer"><i className="fas fa-chevron-right" id='next'
                    onClick={(e)=>{this.changeBackground(e.target.id)}}></i></p></div>
                    <div className="tagLine flex white"><p>- Shoes -</p></div>
                </div>
            </div>

            <div className="home_container2">
                <div className="home_wrapper">
                    <div className="homeNav">
                        <HomeNav/>
                    </div>
                    <div className="homePrev flex-col"><p className="Prevpg para3 lighter pointer" id='prev'><i className="fas fa-chevron-left" id="prev"
                    onClick={(e)=>{this.changeBackground(e.target.id)}}></i></p></div>
                    <div className="homeMain">
                        <Link to={`/Product:mentshirts`}><button className="shopnow1 lighter pointer">SHOP NOW</button> </Link>
                    </div>
                    <div className="homeNext flex-col"><p className="Nextpg para3 lighter pointer" id='next'><i className="fas fa-chevron-right" id="next"
                    onClick={(e)=>{this.changeBackground(e.target.id)}}></i></p></div>
                    <div className="tagLine flex white"><p>- T.Shirts(Men) -</p></div>
                </div>
            </div>

            <div className="home_container3">
                <div className="home_wrapper">
                    <div className="homeNav">
                        <HomeNav/>
                    </div>
                    <div className="homePrev flex-col"><p className="Prevpg para3 lighter pointer" id='prev'><i className="fas fa-chevron-left white" id='prev'
                    onClick={(e)=>{this.changeBackground(e.target.id)}}></i></p></div>
                    <div className="homeMain">
                        <Link to={`/Product:womentshirts`}><button className="shopnow1 lighter pointer">SHOP NOW</button> </Link>
                    </div>
                    <div className="homeNext flex-col"><p className="Nextpg para3 lighter pointer" id='next'><i className="fas fa-chevron-right white" id='next'
                    onClick={(e)=>{this.changeBackground(e.target.id)}}></i></p></div>
                    <div className="tagLine flex white"><p>- T.Shirts(Women) -</p></div>
                </div>
            </div>

        </div>
        )
    }
}

export default Home




