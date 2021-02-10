import * as React from "react";
import './home.less'

import Sidbar from "./sidebar/index";


function Home() {

    return <section className={'home-container'}>
        <div className={'home-container__left'}>
            <Sidbar/>
        </div>
        <div className={'home-container__middle'}>

        </div>
        <div className={'home-container__right'}>right</div>


    </section>;
}

export default Home;
