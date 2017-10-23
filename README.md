# react-native-template-infore 框架介绍

> 1. 代码组织说明
> 2. 组织思路
> 3. 依赖包
> 4. 开发流程

## 代码组织说明
![image](./image/r1.png)
## 组织思路
![image](./image/r2.png)
## 依赖包
![image](./image/r3.png)
* 在link之后还需要额外配置的包有：
![image](./image/r4.png)
* 大家参考github进行配置就好。

## 开发流程
> 1. 使用infore-init脚本新建项目
![image](./image/r5.png)
> 2. node运行项目目录下的脚本文件：node script/dev.js
> 3. 在脚本文件中已经进行了react-native link 的操作，但是可能会出现一个警告：
![image](./image/r6.png)
此时需要执行图中的命令。
> 4. 然后需要手动将这几个包进行配置（Android和IOS都需要配置）
> * 这几个库看github上的配置即可，注意Android、IOS的权限配置。
![image](./image/r7.png)
> 5. 注意pod配置
```
target 'DemoNewVersion' do
    pod 'RSKImageCropper'
    pod 'QBImagePickerController'
end
``` 
* IOS配置完pod之后即可运行在手机，注意要配置Camera和Photo的权限。
```
<key>NSCameraUsageDescription</key>
<string></string>
<key>NSMicrophoneUsageDescription</key>
<string></string>
<key>NSPhotoLibraryUsageDescription</key>
<string></string>
```

> * 项目生成之后既与框架包脱离关系属于独立项目，自己可随意改动。

> * Android 和 IOS 的打包和运行自己Google，不做过多说明。

> * 热更新暂未引入，如需使用见example示例，或者使用code-push

> * 项目内example为示例代码，react-native-template-infore为框架包，在npm上维护，如需升级请通过``npm publish --registry http://registry.npmjs.org ``指令进行包管理。

## 最后
项目已经移交npm<link>https://www.npmjs.com/react-native-template-infore</link>
大家也可以通过<br>
<strong>react-native install --template infore </strong><br>
来使用该项目。

<a href="https://nodei.co/npm/react-native-template-infore/"><img src="https://nodei.co/npm/react-native-template-infore.png?downloads=true&downloadRank=true&stars=true"></a>

## ReactNative开发流程
> 开发流程在中文网上都有相关教程，下面简单说一下：
1. 有一个mac环境
2. 下载xcode(ios环境)
3. 下载AndroidStudio并安装SDK(Android环境)
4. 搭建开发环境，见ReactNative中文网。
5. 开发
6. 打包流程见中文网。
7. 多Google，多去npm和jsCoach查包，都是开发，不多说。

## 盈峰环境-ReactNative学习相关资料

#### *[ReactNative学习资源精选仓库1](https://github.com/MIFind/react-native-awesome)*

#### *[ReactNative学习资源精选仓库2](https://github.com/MIFind/thinking-react-native)*

#### *[ReactNative中文网](http://reactnative.cn/)*

#### *[React-Navigation官方文档](https://reactnavigation.org/)*

#### *[js-coach:前端库搜索链接](https://js.coach/react-native)*

#### *[Redux中文文档](http://www.redux.org.cn/)*

#### *[Redux 入门教程](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html)*

#### *[重新介绍 JavaScript（JS 教程）](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/A_re-introduction_to_JavaScript)*

#### *[ECMAScript 6 入门](http://es6.ruanyifeng.com/)*


> 项目初步计划基于最新版本开发：ReactNative 0.44版本，看文档的话也是看*[ReactNative中文网](http://reactnative.cn/)*这里的0.44版本的文档。
> 
> 0.44版本的ReactNative取消了路由，所以我们要使用[React-Navigation官方文档](https://reactnavigation.org/)的官方路由。
> 
> Redux暂时可以不看，建立项目的时候再接入。


