export function createLine(callback, pointsNum, canvasPosition) {
    if (typeof canvasPosition === 'string') {
        const _tempArrCanvasPosition = canvasPosition.split(',')
        canvasPosition = {
            x: _tempArrCanvasPosition[0],
            y: _tempArrCanvasPosition[1],
        }
    }

    const splitArr = pointsNum ? pointsNum.split(',') : [];
    let [x, y] = splitArr || [];
    x = Number(x);
    y = Number(y);
    // debugger;
    let str = '';
    if (canvasPosition.y > Number(y)) {
        str = `${x},${y},${x},${y - 20},${canvasPosition.x},${y - 20},${canvasPosition.x},${canvasPosition.y}`
    } else {
        str = `${x},${y},${x},${canvasPosition.y - 20},${canvasPosition.x},${canvasPosition.y - 20},${canvasPosition.x},${canvasPosition.y}`
    }
    callback(str)
}

export function createTag(tag, objAttr) {
    var oTag = document.createElementNS("http://www.w3.org/2000/svg", tag);
    for (var attr in objAttr) {
        oTag.setAttribute(attr, objAttr[attr]);
    }
    return oTag;

}

export function mouseDown() {
    document.getElementById('dottedLineId').setAttribute('stroke', '#1abc9c');
}

export function mouseUp() {
    document.getElementById('dottedLineId').setAttribute('stroke', 'none');
}

//鼠标在canvas位置
export function getCanvasPosition(e) {
    return {
        x: e.offsetX,
        y: e.offsetY,
    }
}

let time = 0;
let t = null;

export function doubleClick(callback) {
    if (!time) {
        time = new Date();
    }
    if (t) {
        console.log('双击')
        mouseDown();
        callback && callback();
        return true;
    }
    t = window.setTimeout(() => {
        time = 0;
        clearTimeout(t);
        t = null;
    }, 300)

}

export function posTransfrom(str) {
    const __temp = str.split(',') || [];
    const ___temp = __temp[__temp.length - 2] + ',' + __temp[__temp.length - 1] + ',' + __temp[0] + ',' + __temp[1];
    return ___temp
}

export function simplePoint(str) {
    const __temp = str.split(',') || [];
    const ___temp = __temp[0] + ',' + __temp[1] + ',' + __temp[__temp.length - 2] + ',' + __temp[__temp.length - 1];
    return ___temp
}