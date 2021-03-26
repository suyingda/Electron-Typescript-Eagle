import * as React from "react";
import './index.less'
import {useEffect} from "react";


function Storage() {
    this.obj = {};
    this.ctx = null;
}

Storage.prototype.create = function (params ?: any) {
    const {type, instance, query} = params || {};
    this.obj[type] = {
        GetInstance: instance,
        query
    } || {};
}
Storage.prototype.delete = function (key?: any) {
    delete this.obj[key];
}
Storage.prototype.observe = function () {

}
Storage.prototype.notify = function () {

}

Storage.prototype.render = function (ctx?: any) {
    // const {type, query} = params || {};
    ctx.clearRect(0, 0, 500, 500);
    this.ctx = ctx;
    Object.keys(this.obj).forEach((item) => {
        const {GetInstance, query} = (this.obj)[item] || {};
        const {ctx, x, y} = query || {};
        if (x) {
            const I = new GetInstance();
            I.render(ctx, x, y);
            this.obj[item]['A'] = I;
        } else {
            const II = new GetInstance();
            II.render();
        }

    })
}
Storage.prototype.area = function (x = 0, y = 0) {
    // const {type, query} = params || {};
    // ctx.clearRect(0, 0, 500, 500);
    let r = {};
    Object.keys(this.obj).forEach((item) => {
        const {GetInstance, query, A} = (this.obj)[item] || {};
        const {type} = query || {};
        r[item] = A.area(x, y);
    })
    return r;
}
const S = new Storage;

function Arc(ctx?: any, x = 0, y = 0) {
    ctx.beginPath();
    ctx.arc(x, y, 50, 0, 2 * Math.PI);
    ctx.stroke();
}

function Rectangle() {
    this.x = 0;
    this.y = 0;
    this.top = 0;
    this.left = 0;
    this.right = 0;
    this.bottom = 0;
    this.ctx = null;
    this.lock = true;
}

Rectangle.prototype.position = function (top, bottom, left, right) {
    this.top = top || 0;
    this.left = left || 0;
    this.right = right || 0;
    this.bottom = bottom || 0;
}
Rectangle.prototype.render = function (ctx?: any, x = 0, y = 0) {
    // if (this.lock) return;
    // ctx.clearRect(0, 0, 500, 500);
    Arc(ctx, x, y);
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(x, y, 150, 75);
    this.x = x;
    this.y = y;
    this.ctx = ctx;
    this.position(y, y + 75, x, x + 150)
}

Rectangle.prototype.area = function (x = 0, y = 0) {
    if (x >= this.left && x <= this.right && y >= this.top && y <= this.bottom) {
        this.ctx.strokeStyle = '#0000ff'
        this.ctx.strokeRect(this.x, this.y, 150, 75); // 绘制矩形边框
        this.ctx.stroke();  //描边(绘制)
        return true;
    }

    S.render();
    // this.render();
    return false;
}

// const Rectangle = new rectangle();

// function draw(ctx?: any, x = 0, y = 0) {
//     // ctx.fillRect(10, 10, 100, 50); // 绘制矩形，填充的默
//     // // 认颜色为黑色
//     // ctx.strokeRect(10, 70, 100, 50); // 绘制矩形边框
//     ctx.clearRect(0, 0, 500, 500);
//     ctx.fillStyle = "#FF0000";
//     ctx.fillRect(x, y, 150, 75);
// }

var pos = function (x, y, event, canvas) {  //鼠标定位赋值函数
    var posX = 0, posY = 0;  //临时变量值
    var e = event || window.event;  //标准化事件对象
    if (e.pageX || e.pageY) {  //获取鼠标指针的当前坐标值
        posX = e.pageX;
        posY = e.pageY;
    } else if (e.clientX || e.clientY) {
        // posX = event.clientX + document.documentElement.scrollLeft + document.body.scrollLeft;
        // posY = event.clientY + document.documentElement.scrollTop + document.body.scrollTop;
        // posX = event.clientX + canvas.documentElement.scrollLeft;
        // posY = event.clientY + canvas.scrollTop;
        posX = e.clientX - canvas.getBoundingClientRect().left;
        posY = e.clientY - canvas.getBoundingClientRect().top;
    }
    // console.log( posX, posY);
    return {
        x: e.clientX - canvas.getBoundingClientRect().left,
        y: posY
    }
    // o.style.position = "absolute";  //定义当前对象为绝对定位
    // o.style.top = (posY + y) + "px";  //用鼠标指针的y轴坐标和传入偏移值设置对象y轴坐标
    // o.style.left = (posX + x) + "px";  //用鼠标指针的x轴坐标和传入偏移值设置对象x轴坐标
}

function mousePoint(canvas, ctx) {

    canvas.onmousemove = function (event) {
        const {x, y} = pos(10, 20, event, canvas);
        const exist = S.area(x, y);
        console.log(exist);

        // RRectangle.render(ctx, x, y);
        // if(!exist){
        //     RRectangle.render();
        // }
        // canvas.onmousedown = function (e) {
        //     if (exist) {
        //         RRectangle.lock = false;
        //     }
        //
        //     canvas.onmouseup = function () {
        //         RRectangle.lock = true;
        //     }
        //
        // }
        // draw(ctx, x, y);
    }
    canvas.onmouseleave = null;
}


function CanvasTemplate() {
    useEffect(() => {
        var canvas = document.getElementById('canvas');
        if (!canvas.getContext) return;
        var ctx = canvas.getContext("2d");

        // RRectangle.lock = false;
        // RRectangle.render(ctx, 100, 200);
        S.create({
            instance: Rectangle,
            type: 'one',
            query: {
                ctx, x: 100, y: 200
            }
        });
        S.create({
            instance: Rectangle,
            type: 'two',
            query: {
                ctx, x: 200, y: 100
            }
        });

        S.render(ctx);
        mousePoint(canvas, ctx)
    }, [])
    return <section className={'canvas-container'}>
        <canvas id={'canvas'} width={'500px'} height={'500px'}>浏览器不支持该属性</canvas>
    </section>;
}

export default CanvasTemplate;
