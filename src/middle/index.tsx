import * as React from 'react';
import {useEffect} from "react";

// import workSheetsFromBuffer from './../fs/read';
// const {remote} = window.require && window.require('electron') || {};
// const {ipcRender} = remote || {};
// console.log(workSheetsFromBuffer,'workSheetsFromBuffer')
function Middle() {
    useEffect(() => {
        const getNode = document.getElementById('drag');
        getNode.ondragstart = (event) => {
            debugger;
            event.preventDefault()
            console.log(event)
            // ipcRender.send('ondragstart', '/absolute/path/to/the/item')
        }
        // console.log(getNode)

        //
    }, [])
    return <div>
        <div id={'drag'}>
            <div onClick={() => {

            }}>解析xlsx
            </div>
            666<br/>
            666<br/>
            666<br/>
            666<br/>
        </div>
    </div>
}

export default Middle;
