var fs = window.require('fs');
// import xlsx from 'node-xlsx';


const puppeteer = window.require('puppeteer');

// console.log(xlsx, 'xlsx')
//read file content  txt
window.onload = function () {

    (async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.addScriptTag({
            url: 'C:\\Users\\Hua-cloud\\Desktop\\tencent-class-1\\Electron-Typescript-Eagle\\1.xlsx'
        });
        await page.screenshot({path: 'xlsx.png'});
        console.log(6666666666666666, '')
        await browser.close();
    })();

    // var btn = this.document.querySelector('#btn')
    // var mybaby = this.document.querySelector('#mybaby')
    // btn.onclick = function () {
    //     fs.readFile('xiaojiejie.txt', (err, data) => {
    //         mybaby.innerHTML = data
    //     })
    // }
}
const testPathFile = "C:\\Users\\Hua-cloud\\Desktop\\tencent-class-1\\Electron-Typescript-Eagle\\1.xlsx"

// Parse a buffer
// const workSheetsFromBuffer = xlsx.parse(fs.readFileSync(testPathFile));
// var buffer = xlsx.build([{name: "mySheetName", data: workSheetsFromBuffer.data}]); // Returns a buffer
// export default buffer;
//
// fs.writeFileSync("./pdf/test.pdf", buffer);
// console.log('成功生成PDF文件')

