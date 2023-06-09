# fei-datav

组件库基于vue3 ，主要应用于构建大屏数据展示页面（数据可视化），鉴于每次开发都需要复制粘贴，因此打算收录常用资源。

组件库部分组件，依赖于[Datav](https://github.com/DataV-Team/Datav)因其组件库不支持vue3，因此参考其源码进行重新实现。

组件库分为多种种类，如功能、装饰、边框、文字标题、图表等多种类别。

组件的宽高皆为100%，用于根据父容器宽高自适应。

由于组件皆为大屏数据展示使用，因此，demo统一使用深色背景，组件文字等也都为浅色，如需建立白底的数据展示，需自行修改组件内容颜色。

[![NPM version](https://img.shields.io/badge/npm-v0.2.0-brightgreen)](https://www.npmjs.com/package/fei-datav)

### 安装

用如下方式进行安装

```bash
npm i fei-datav -S
# or 
yarn add fei-datav
```

### 引入

你可以引入整个 fei-datav，或是根据需要仅引入部分组件。我们先介绍如何引入完整的。

#### 完整引入

在 main.js 中写入以下内容：

```javascript
import { createApp } from 'vue'
import FeiDatav from 'fei-datav'
import App from './App.vue'
import 'fei-datav/lib/styles/index.css'

const app = createApp(App)
app.use(FeiDatav)
app.mount('#app')
```

以上代码便完成了 fei-datav 的引入。需要注意的是，样式文件需要单独引入。

#### 按需引入

如果你只希望引入部分组件，比如 Icon，那么需要在 main.js 中写入以下内容

```javascript
import { createApp } from 'vue'
import { Icon } from 'fei-datav'
import App from './App.vue'
import 'fei-datav/lib/styles/components/icon.css'

const app = createApp(App)
app.use(Icon)
app.mount('#app')
```

**特别提醒:按需引用仍然需要导入样式，即在 main.js 或根组件 import 'fei-datav/lib/styles/index.css';**

完整组件列表参考源代码
