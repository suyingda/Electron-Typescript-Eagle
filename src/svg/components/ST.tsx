import * as React from 'react';
import {css, cx} from '@emotion/css';
import './svg.less';
import {useEffect} from "react";

import {createLine, createTag, mouseDown, mouseUp, getCanvasPosition, posTransfrom, simplePoint} from './utils.js';
import arrSvgRender from './element.js';
import * as webpack from "webpack";


var oPolyLine = null;  //临时的辅助连接线 -直线
var canvasPosition = {}; //当前鼠标坐标点
var pointsNum = '';   // 临时生成折线坐标点-字符串
var GSv = null;        //画布
var middlegroup = null;   // 临时容器- 辅助线

//关系线结构
var relationLine = {}


const statusConfig = {
    IDLE: 0,  //空闲
    DRAG_START: 1,  //拖拽起手式
    DRAGGING: 2,  //拖拽进行中
}
const canvasInfo = {
    scale: {},
    dragTargetChildren: {},
    dragObject: {},
    status: statusConfig.IDLE,
    dragTarget: null,
    lastEvtPos: {x: null, y: null},
    offsetEvtPos: {x: null, y: null}
}


//记录元素是否是有关系
let recordElement = '';
let recordElement2 = '';


function ST() {

    //覆盖层展示
    const discover = () => {
        if (!canvasInfo.dragObject) return;
        const assistantgroup = document.getElementById("assistantgroup");
        const childNodes = assistantgroup.childNodes;
        const objNodeObj = {
            x: 0,
            y: 0,
            width: canvasInfo.dragObject.width,
            height: canvasInfo.dragObject.height,
        }
        childNodes[0].setAttribute('width', objNodeObj.width)
        childNodes[0].setAttribute('height', objNodeObj.height)
        childNodes[1].childNodes[0].childNodes[0].setAttribute("cx", objNodeObj.width / 2);
        childNodes[1].childNodes[1].childNodes[0].setAttribute("cx", objNodeObj.width);
        childNodes[1].childNodes[1].childNodes[0].setAttribute("cy", objNodeObj.height / 2);
        childNodes[1].childNodes[2].childNodes[0].setAttribute("cx", objNodeObj.width / 2);
        childNodes[1].childNodes[2].childNodes[0].setAttribute("cy", objNodeObj.height);
        childNodes[1].childNodes[3].childNodes[0].setAttribute("cy", objNodeObj.height / 2);
        childNodes[2].setAttribute('x', objNodeObj.width)
        childNodes[2].setAttribute('y', objNodeObj.height)
        if (canvasInfo.dragObject.pos) {
            assistantgroup.setAttribute("transform", `translate(${canvasInfo.dragObject.pos.x},${canvasInfo.dragObject.pos.y})`);
        }
    }
    const initSvg = () => {
        GSv = document.querySelector("#rect1");
        middlegroup = document.querySelector("#middlegroup");

        GSv.addEventListener('mousedown', e => {
            const {path} = e || {};
            const node = path[1]
            if (!node.id) return;
            console.log(node.id, 'mousedown')

            // const circleRef = ifInCircle(canvasPosition)
            // if (circleRef) {
            if (['assistantgroup'].includes(node.id)) {
                canvasInfo.scale.dragObject = arrSvgRender.find((item) => item.id === node.id);
                canvasInfo.scale.dragTarget = node;
                canvasInfo.scale.dragTargetChildren = node.childNodes[0];
                canvasInfo.scale.status = statusConfig.DRAG_START;
                canvasInfo.scale.lastEvtPos = canvasPosition;
                canvasInfo.scale.offsetEvtPos = canvasPosition;
            } else {
                canvasInfo.dragObject = arrSvgRender.find((item) => item.id === node.id);
                if (!recordElement) {
                    recordElement = canvasInfo.dragObject.id;
                }
                canvasInfo.dragTarget = node;
                canvasInfo.dragTargetChildren = node.childNodes[0];
                canvasInfo.status = statusConfig.DRAG_START;
                canvasInfo.lastEvtPos = canvasPosition;
                canvasInfo.offsetEvtPos = canvasPosition;
                if (!canvasInfo.dragObject || node.id !== canvasInfo.dragObject.id) {
                    mouseUp()
                }
            }
        })


        GSv.addEventListener('mousemove', function (e) {
            canvasPosition = getCanvasPosition(e);
            const {path} = e || {};
            const node = path[1]
            if (oPolyLine) {
                oPolyLine.setAttribute('points', pointsNum + ',' + canvasPosition.x + ',' + canvasPosition.y);
                if (!node.id) return;
                canvasInfo.dragObject = arrSvgRender.find((item) => item.id === node.id);
                recordElement2 = canvasInfo.dragObject.id;
                canvasInfo.dragTarget = node;
                canvasInfo.dragTargetChildren = node.childNodes[0];
                canvasInfo.status = statusConfig.DRAG_START;
                canvasInfo.lastEvtPos = canvasPosition;
                canvasInfo.offsetEvtPos = canvasPosition;

            } else {
                // if (canvasInfo.scale.dragObject && canvasInfo.scale.dragObject.id === 'assistantgroup') {
                //     console.log('scale', canvasPosition.x - canvasInfo.scale.offsetEvtPos.x);
                //     canvasInfo.scale.dragObject.pos.x += canvasPosition.x - canvasInfo.scale.offsetEvtPos.x;
                //     canvasInfo.scale.dragObject.pos.y += canvasPosition.y - canvasInfo.scale.offsetEvtPos.y;
                //     // canvasInfo.scale.dragTarget.setAttribute("transform", `translate(${canvasInfo.scale.dragObject.pos.x},${canvasInfo.scale.dragObject.pos.y})`);
                //
                //     canvasInfo.scale.offsetEvtPos = canvasPosition;
                //     // canvasInfo.dragTargetChildren.setAttribute("width",canvasInfo.dragObject.width+ );
                // } else
                if (canvasInfo.status === statusConfig.DRAG_START && canvasInfo.dragTarget) {
                    canvasInfo.dragObject = arrSvgRender.find((item) => item.id === node.id);
                    canvasInfo.dragObject.pos.x += canvasPosition.x - canvasInfo.offsetEvtPos.x;
                    canvasInfo.dragObject.pos.y += canvasPosition.y - canvasInfo.offsetEvtPos.y;
                    canvasInfo.dragTarget.setAttribute("cursor", "all-scroll");
                    canvasInfo.dragTarget.setAttribute("transform", `translate(${canvasInfo.dragObject.pos.x},${canvasInfo.dragObject.pos.y})`);
                    canvasInfo.offsetEvtPos = canvasPosition;
                    console.log(node.id, relationLine)
                    if (node.id && relationLine[node.id] && relationLine[node.id].target) {
                        const _temp = relationLine[canvasInfo.dragObject.id].relation.split(',');
                        const up_width = canvasInfo.dragObject.width;
                        createLine((str) => {
                            const {pointer} = relationLine[canvasInfo.dragObject.id] || {};
                            relationLine[pointer].relation = posTransfrom(str); //不同存储桶进行坐标变换
                            relationLine[canvasInfo.dragObject.id].relation = simplePoint(str);
                            relationLine[canvasInfo.dragObject.id].target.setAttribute('points', str);
                        }, _temp[0] + ',' + _temp[1], (canvasInfo.dragObject.pos.x + up_width / 2) + ',' + canvasInfo.dragObject.pos.y)
                    }
                }
            }
            discover()
            // const tempArr = Object.keys(relationLine).find((item) => {
            //
            //     if (item.indexOf(node.id) > -1) {
            //         return item;
            //     }
            // })
            // console.log(tempArr, relationLine, 'tempArr')
        })

        GSv.addEventListener('mouseup', function (e) {
            canvasInfo.status = statusConfig.IDLE;
            // canvasInfo.dragTarget = null;
            setTimeout(() => {
                pointsNum = '' //清空链接关系线
                oPolyLine = ''  //辅助链接线-直线
                // recordElement = ''; //清空临时关系  放在辅助连接线那边清空
                // recordElement2 = ''; //清空临时关系
            }, 500)
            var childs = document.getElementById('middlegroup').childNodes;
            for (var i = 0; i < childs.length; i++) {
                middlegroup.removeChild(childs[i]);
            }

        })

    }
    useEffect(() => {
        initSvg();
    }, [])
    //遮罩层辅助函数
    const obstruct_up = (e) => {
        // console.log(pointsNum, canvasPosition);

        createLine((str) => {
            var oPolyLine2 = createTag('polyline', {
                'fill': 'none',
                'stroke': 'red',
                'stroke-width': '2'
            })
            if (!relationLine[recordElement]) {
                relationLine[recordElement] = []
            }
            if (!relationLine[recordElement2]) {
                relationLine[recordElement2] = []
            }
            relationLine[recordElement].push({
                target: oPolyLine2,
                relation: posTransfrom(str),
                pointer: recordElement2
            });
            relationLine[recordElement2].push({
                target: oPolyLine2,
                relation: simplePoint(str),
                pointer: recordElement,
            });
            oPolyLine2.setAttribute('points', str);
            document.getElementById('pointsLine').appendChild(oPolyLine2);

        }, pointsNum, canvasPosition)
        recordElement = '';  //匹配关系结束
        recordElement2 = '';  //匹配关系结束
        // document.getElementById('pointsLine').appendChild(oPolyLine)
    }
    const obstruct_down = (e) => {
        //生成拉线图像
        if (!oPolyLine) {
            oPolyLine = createTag('polyline', {'fill': 'none', 'stroke': 'red', 'stroke-width': '2'})
            middlegroup.appendChild(oPolyLine);
        }
        if (pointsNum === '') {
            pointsNum = canvasPosition.x + ',' + canvasPosition.y;
        } else {
            pointsNum += ',' + canvasPosition.x + ',' + canvasPosition.y
        }
        oPolyLine.setAttribute('points', pointsNum);
    }
    return <svg height={'100%'} width={'100%'} xmlns="http://www.w3.org/2000/svg" version="1.1" id={'rect1'}>

        {arrSvgRender.map((item, i) => {
            const {pos = {}, width, height, id} = item;
            if (['assistantgroup'].includes(id)) {
                return null;
            }
            return <g key={i} transform={`translate(${pos.x},${pos.y})`} id={item.id}>
                <rect width={width} height={height}
                      className={cx(css`fill:rgb(255,255,255);stroke-width:1;stroke:rgb(0,0,0)`)}/>

            </g>
        })}

        <g id={'assistantgroup'} transform={`translate(0,0)`}>
            <rect id={'dottedLineId'} className={cx(css`fill: none;
    // stroke: #1abc9c;
    stroke-dasharray: 2,4;
    stroke-width: 3px;
}`)}/>
            <g>
                <g className={cx(css`cursor: N-resize; visibility: visible;`)} direction="NM">
                    {/*<circle className={cx(css`fill:#1abc9c;opacity:0 `)} cx={pos.x / 3} cy="0" r="15"*/}
                    {/*></circle>*/}
                    <circle id={'up'} onMouseUp={obstruct_up} onMouseDown={obstruct_down}
                            className={cx(css`fill: #fff;stroke: #1abc9c`)} cx={0} cy="0" r="5"
                    ></circle>
                </g>
                <g className={cx(css`cursor: E-resize; visibility: visible;`)} direction="NM">
                    {/*<circle className={cx(css`fill:#1abc9c;opacity:0 `)} cx={pos.x / 3} cy="0" r="15"*/}
                    {/*></circle>*/}
                    <circle className={cx(css`fill: #fff;stroke: #1abc9c`)} cx={0} cy={0} r="5"
                    ></circle>
                </g>
                <g className={cx(css`cursor: S-resize; visibility: visible;`)} direction="NM">
                    {/*<circle className={cx(css`fill:#1abc9c;opacity:0 `)} cx={pos.x / 3} cy="0" r="15"*/}
                    {/*></circle>*/}
                    <circle className={cx(css`fill: #fff;stroke: #1abc9c`)} cx={0} cy={0} r="5"
                    ></circle>
                </g>
                <g className={cx(css`cursor: W-resize; visibility: visible;`)} direction="NM">
                    {/*<circle className={cx(css`fill:#1abc9c;opacity:0 `)} cx={pos.x / 3} cy="0" r="15"*/}
                    {/*></circle>*/}
                    <circle className={cx(css`fill: #fff;stroke: #1abc9c`)} cx={0} cy={0} r="5"
                    ></circle>
                </g>
            </g>
            <rect id={'scale'} width="10" height="10" x={10} y={10}
                  className={cx('mouse-hover-scale-zoom', css`fill:rgb(0,0,0);stroke-width:1;stroke:rgb(0,0,0)`)}/>
        </g>
        {/*<polyline points={'50,50,200,300,230,300,250,200'} fill={'none'} stroke={'black'}/>*/}
        <g id={'middlegroup'}></g>
        <g id={'pointsLine'}></g>
    </svg>
}

// @ts-ignore
export default ST;