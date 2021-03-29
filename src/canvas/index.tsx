// import * as React from "react";
// import './index.less'
// import {useEffect} from "react";
//
//
// function drawCircle(ctx, cx, cy, r) {
//     ctx.save(); //
//     ctx.beginPath(); //
//     ctx.strokeStyle = 'blue';
//     ctx.arc(cx, cy, r, 0, Math.PI * 2);
//     ctx.stroke();
//     ctx.closePath();
//     ctx.restore();
// }
//
// const statusConfig = {
//     IDLE: 0,
//     DRAG_START: 1,
//     DRAGGING: 2,
//
// }
// const canvasInfo = {
//     status: statusConfig.IDLE,
//     dragTarget: null,
//     lastEvtPos: {x: null, y: null},
//     offsetEvtPos: {x: null, y: null}
// }
//
// const circle = [];
//
// function CanvasTemplate() {
//     //鼠标在canvas位置
//     const getCanvasPosition = (e) => {
//         return {
//             x: e.offsetX,
//             y: e.offsetY,
//         }
//     }
//     const getCircleStance = (p1, p2) => {
//         return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
//     }
//     //是否是在元素内部
//     const ifInCircle = (pos) => {
//         for (let i = 0; i < circle.length; i++) {
//             if (getCircleStance(circle[i], pos) < circle[i].r) {
//                 return circle[i]
//             }
//         }
//         return false;
//     }
//     useEffect(() => {
//         var canvas = document.getElementById('canvas');
//         canvas.addEventListener('mousedown', e => {
//             const canvasPosition = getCanvasPosition(e);
//             const circleRef = ifInCircle(canvasPosition)
//             if (circleRef) {
//                 canvasInfo.dragTarget = circleRef;
//                 canvasInfo.status = statusConfig.DRAG_START;
//                 canvasInfo.lastEvtPos = canvasPosition;
//                 canvasInfo.offsetEvtPos = canvasPosition;
//             }
//         })
//         canvas.addEventListener('mousemove', e => {
//             const canvasPosition = getCanvasPosition(e);
//             if (canvasInfo.status === statusConfig.DRAG_START && getCircleStance(canvasPosition, canvasInfo.lastEvtPos) > 5) {
//                 console.log('try drag element');
//                 canvasInfo.status = statusConfig.DRAGGING;
//                 canvasInfo.offsetEvtPos = canvasPosition
//             } else if (canvasInfo.status === statusConfig.DRAGGING) {
//                 console.log('dragging');
//                 const {dragTarget} = canvasInfo;
//                 dragTarget.x += canvasPosition.x - canvasInfo.offsetEvtPos.x;
//                 dragTarget.y += canvasPosition.y - canvasInfo.offsetEvtPos.y;
//                 ctx.clearRect(0, 0, 500, 500);
//                 circle.forEach((c) => {
//                     drawCircle(ctx, c.x, c.y, c.r)
//                 })
//                 canvasInfo.offsetEvtPos = canvasPosition;
//             }
//         })
//         canvas.addEventListener('mouseup', (e) => {
//             if (canvasInfo.status === statusConfig.DRAGGING) {
//                 canvasInfo.status = statusConfig.IDLE;
//             }
//         })
//
//
//         if (!canvas.getContext) return;
//         var ctx = canvas.getContext("2d");
//
//         drawCircle(ctx, 200, 200, 100)
//         circle.push({
//             x: 200,
//             y: 200,
//             r: 100
//         })
//         drawCircle(ctx, 300, 400, 50)
//         circle.push({
//             x: 300,
//             y: 400,
//             r: 50
//         })
//
//     }, [])
//     return <section className={'canvas-container'}>
//         <canvas id={'canvas'} width={'500px'} height={'500px'}>浏览器不支持该属性</canvas>
//     </section>;
// }
//
// export default CanvasTemplate;
