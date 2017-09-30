const fs = require('fs');
const path = require('path');
const execSync = require('child_process').exec;

/**
 * 改变注册应用名称
 * @param name
 */
function changeAppName(name) {
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
}

function linkedApp() {
    execSync('react-native link', function (err, stdout, stderr) {
        if (err) throw err;
        console.log(stdout);
    });
}

linkedApp();
changeAppName('react-native-template-infore');