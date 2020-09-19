import React,{Component} from 'react';
import Imagenes from '../resources/photos/imagenes';
class Main extends Component{
       
    render(){
        return(
            <div className="container--principal">
                <header className="header">
                    <div className="header__left">
                        <img className="header__logo"src={Imagenes.logo} alt="logo"></img>
                        <h1 className="header__title">Golden English</h1>
                    </div>
                    <div className="header__rigth">
                        <ul className="header__nav">
                            <li className="header__item">
                                <img src={Imagenes.nav3} className="header__navimg"></img>
                                <a>Inicio</a></li>
                            <li className="header__item">
                                <img src={Imagenes.nav2} className="header__navimg"></img>
                                <a>Galeria</a></li>
                            <li className="header__item">
                                <img src={Imagenes.nav3} className="header__navimg"></img>
                                <a>Contacto</a></li>
                            <li className="header__item">
                                <img src={Imagenes.nav4} className="header__navimg"></img>
                                <a>Nosotros</a></li>
                            <li className="header__item">
                                <img src={Imagenes.nav1} className="header__navimg"></img>    
                                <a>Ingresa</a>
                            </li>
                        </ul>
                    </div>
                </header>
                <main className="main">
                    <div className="main__banner">
                        <div className="main__item--1"></div>
                        <div className="main__item--2"></div>
                        <div className="main__item--3"></div>
                        <div className="main__item--4"></div>
                        <div className="main__item--5"></div>
                    </div>
                </main>
                <section className="covid">
                    <h1 className="covid__titulo">Nuevas recomendaciones</h1>
                    <div className="covid__card">
                        <div className="covid__item covid__item--1">
                            <img src={Imagenes.cov1} alt="imagen c" className="covid__svg"></img>
                            <p>lorem lorem lorem lorem lorem lorem lorem</p>
                        </div>
                        <div className="covid__item covid__item--2">
                            <img src={Imagenes.cov2}  alt="imagen c" className="covid__svg"></img>
                            <p>lorem lorem lorem lorem lorem lorem lorem</p>
                        </div>
                        <div className="covid__item covid__item--3">
                            <img src={Imagenes.cov3}  alt="imagen c" className="covid__svg"></img>
                            <p>lorem lorem lorem lorem lorem lorem lorem</p>
                        </div>
                        <div className="covid__item covid__item--4">
                            <img src={Imagenes.cov1}  alt="imagen c" className="covid__svg"></img>
                            <p>lorem lorem lorem lorem lorem lorem lorem</p>
                        </div>
                        <div className="covid__item covid__item--5">
                            <img src={Imagenes.cov2}  alt="imagen c" className="covid__svg"></img>
                            <p>lorem lorem lorem lorem lorem lorem lorem</p>
                        </div>
                        <div className="covid__item covid__item--6">
                            <img src={Imagenes.cov3}  alt="imagen c" className="covid__svg"></img>
                            <p>lorem lorem lorem lorem lorem lorem lorem</p>
                        </div>
                    </div>
                </section>
                <footer className="footer">
                    <div className="footer__card">
                        <div className="footer__left">
                            <img alt="logo" src={Imagenes.logo} className="footer__logo"></img>
                        </div>
                        <div className="footer__middle">
                            <ul className="footer__list">
                                <li className="footer__item">aaa</li>
                                <li className="footer__item">b</li>
                                <li className="footer__item">c</li>
                            </ul>
                            <ul className="footer__list">
                                <li className="footer__item">d</li>
                                <li className="footer__item">e</li>
                                <li className="footer__item">f</li>
                            </ul>
                        </div>
                        <div className="footer__rigth">
                            <div className="footer__rigth__header">
                                <p>Redes Sociales</p>
                            </div>
                            <div className="footer__rigth__contain">
                                <a className="footer__imgred">
                                    <img  src={Imagenes.red1}></img>
                                </a>
                                <a className="footer__imgred" target="_blank" href="https://wa.link/qak1qu">
                                    <img  src={Imagenes.red2}></img>
                                </a>
                                <a className="footer__imgred">
                                     <img  src={Imagenes.red1}></img>
                                </a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}
export default Main;