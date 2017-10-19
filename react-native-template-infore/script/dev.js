const fs = require('fs');
const path = require('path');
const execSync = require('child_process').exec;

/**
 * 改变注册应用名称
 * @param name
 */
function changeAppName(name) {
    return new Promise(function (resolve, reject) {
        const appJson = path.resolve(__dirname, '../app.json');
        const settingJS = path.resolve(__dirname, '../app/config/setting.js');
        console.log('获取setting路径为：' + settingJS);
        const appReigist = "" + fs.readFileSync(settingJS);
        const appName = JSON.parse(fs.readFileSync(appJson)).name; //获取AppName
        console.log('获取AppName为：' + appName);
        const newAppReigist = appReigist.replace(name, appName);
        console.log('正在配置，请稍后......');
        fs.writeFileSync(settingJS, newAppReigist);
        console.log('配置已完成');
        resolve();
    })
}

function linkedApp() {
    console.log('正在为您link项目');
    return new Promise(function (resolve, reject) {
        execSync('react-native link', function (err, stdout, stderr) {
            if (err) {
                console.log('执行link遇见问题 : ' + err);
                console.log('请手动执行react-native link');
                reject(err)
            }
            console.log('link项目已完成!');
            resolve(stdout);
        });
    });
}

function _fetchblobNPMInstall() {
    console.log('正在为您安装react-native-fetch-blob');
    return new Promise(function (resolve, reject) {
        execSync('npm install react-native-fetch-blob --save', function (err, stdout, stderr) {
            if (err) {
                console.log('安装react-native-fetch-blob遇见问题 : ' + err);
                reject(err)
            }
            console.log('安装react-native-fetch-blob已完成！');
            resolve(stdout);
        });
    });
}


(async () => {
    await _fetchblobNPMInstall();
    changeAppName('react-native-template-infore').then(() => {
        linkedApp();
    })
})();
