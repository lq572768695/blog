
#安装全部依赖
npm install

运行指令 node ./bin/www 
访问地址 localhost:8000

一、总体设计

  1、服务器环境：
  
  软件：windows
  
  web服务器：node.js+express框架
  	
  	1、中间键
  		
  		"body-parser"          用于解析客户端请求的body中的内容，内部使用JSON编码处理，url编码处理以及对于文件的上传处理.
		
		"cookie-parser"        解释cookie
		
		"debug"                输出调试信息
		
		"ejs"                  模板渲染引擎
		
		"morgan"               日志模块，在控制台中，显示req请求的信息
		
		"serve-favicon"        请求网站图标
		
		"mongodb"              mongodb数据库
		
		"mongoose"             连接mongodb数据库


  数据库：mongodb数据库（之所以选择这个数据库，是因为mongodb可以直接保存JS对象成数据库的文档，json、js原生支持，原生解析mangodb的数据，这也保证了从前端到后端再到数据库的语言一致）
	
	1、集合（表）
	暂无
	
  
  2、客户端：
  
  浏览器：基本兼容所有浏览器

  3、实现流程
   
    1、静态文件区（public）下相应模块（此处例为首页index）下脚本文件（js）中通过ajax请求页面
    
    2、后台路由（routes）下相应模块（此处为首页index）文件根据前台请求的接口去页面区（views）下相应模块（此处为首页index）下获取页面
    
    3、请求页面的同时在mongodb数据库中查询当前请求的页面或者页面片段所需要的数据，
    
    4、把数据和页面一起返回给前台
    
    5、前台对返回的页面和数据进行操作。

  4、开发模式
  
  此开发为前后端不分离的开发模式，即请求页面的同时查询了所需要的数据，页面是用后端的ejs渲染的

  注：如果修改为前后端分离的开发模式，即静态文件区（public）下相应模块（此处例为首页index）下脚本文件（js）中通过ajax只请求数据，后台路由（routes）下相应模块（此处为首页index）文件根据前台请求的接口去数据库中查询相应的数据返回给前台，前台页面拿到返回的数据去静态区获取页面模板然后通过前端的模板渲染引擎渲染页面，这样后台只提供了数据接口，页面的获取和数据的处理都是在前端操作的。


二、文件存放路径及作用

/bin/www               端口号修改为8000（其他无修改）

public(样式文件及脚本文件区，所有文件均由本地上传)

/public/css				用于存放项目样式文件

/public/css/common	    用于存放项目公共的css样式文件，目前引入了
					    图标样式文件font-awesome.min.css及其关联文件,
						重置浏览器样式文件reset.css

/public/css/index		用于存放项目首页的css样式文件（目前没有引入）

/public/images	        用于放置项目公共图片（目前没有引入）

/public/js              用于存放脚本文件js

/public/js/common       用于存放项目公共的js文件，目前引入了
						jquery文件jquery-2.1.1.min.js

/public/js/index        用于存放项目的首页模块的样式和脚本文件


routes(路由)

/routes/index.js        用于配置后台请求路径，并返回所需要的页面或者页面片段或者数据

views(页面模板，用于存放项目中所有页面或者页面片段，所有文件均由本地上传)     

/views/common           用于存放项目中所需要的公共页面或者页面片段（目前没有公共页面）

/views/index            用于存放项目首页模块所需要的页面或者页面片段，目前有

						首页页面index.ejs






