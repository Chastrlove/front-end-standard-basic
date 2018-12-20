##前端标准化基础版（jquery版本）
###注意
1. 该版本无路由跳转 
2. 要求html与js文件夹中的文件名字一一对应
3. 未压缩的图片存放在original中，支持jpg和png，生成文件自动生成在resource中

### `yarn dev`

Runs the app in the development mode.<br>
Open [http://localhost:8088](http://localhost:8088) to view it in the browser.

### `yarn build` 

打包生产文件到dist目录下

### `yarn imagemin` 

压缩original目录下中的图片（支持jpg和png），生成到resource目录下