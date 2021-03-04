import * as React from "react";
import './home.less'
import Sidebar from "./sidebar/index";
import Middle from "./middle/index";
import img from './../assets/images/tencent-home.png';

function Home() {
    return <section className={'home-container'}>
        <div className={'home-container__left'}>
            <Sidebar/>
        </div>
        <div className={'home-container__middle'}>
            <Middle/>
        </div>
        <div className={'home-container__right'}>
            <img src={img}/>
        </div>
    </section>;
}

export default Home;
