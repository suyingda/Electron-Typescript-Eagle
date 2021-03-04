// const {remote, dialog} = window.require('electron');

const {remote} = window.require('electron') || {};
const {app, dialog, ipcRenderer} = remote || {};

const fs = window.require('fs');
const path = window.require('path');
const testPathFile = "C:\\Users\\Hua-cloud\\Desktop\\tencent-class-1\\Electron-Typescript-Eagle\\1.txt"
// console.log(dialog, testPathFile)
// app.getPath('documents');
export const fileHelper = {
    readFile: (path?: any, cb?: any) => {
        fs.readFile(testPathFile, {encoding: "utf-8"}, (err?: any, data?: any) => {
            if (err) throw err;
            console.log(data);
        });
    },
    writeFile: (path?: any, data?: any) => {
        fs.writeFile(testPathFile, 666666, {encoding: 'utf-8'}, (err?: any) => {
            if (err) throw err;
            console.log('文件已被保存');
        });
    },
    readdir: (path?: any) => {
        dialog.showOpenDialog({
            properties: ['openFile', 'openDirectory']
        }).then((result?: any): any => {
            console.log(result.canceled)
            console.log(result.filePaths)
        }).catch((err?: any): any => {
            console.log(err)
        })
        // dialog.showOpenDialog({
        //     title: '徐州',
        //     properties: ['openFile', 'multiSelections'],
        //     filters: [
        //         {name: 'Markdown files', extensions: ['md']}
        //     ]
        // }, (paths: any) => {
        //     console.log(paths, 'path')
        // })
    }
};

export default function createDir(): any {


}
