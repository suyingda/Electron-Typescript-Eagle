import * as React from "react";
import './home.less'
import Sidebar from "./sidebar/index";

function Home() {
    return <section className={'home-container'}>
        <div className={'home-container__left'}>
            <Sidebar/>
        </div>
        <div className={'home-container__middle'}>middle</div>
        <div className={'home-container__right'}>right</div>
    </section>;
}

export default Home;
