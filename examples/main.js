import { createApp } from 'vue'
import router from './route'
import App from './App.vue'
import BinUI from 'f-ui-one'
import 'f-ui-one/lib/styles/normalize.css'
import 'f-ui-one/lib/styles/index.css'
import './assets/styles/index.styl'

import DemoBlock from './components/demo-block.vue'
import MainFooter from './components/footer.vue'
import MainHeader from './components/header.vue'
import SideNav from './components/side-nav.vue'

// 自定义组件库内容
import Self from 'fei-datav'
import '../src/styles/index.styl'


const app = createApp(App)
app.use(BinUI, { disabledDoc: true })
app.use(Self)
app.config.productionTip = false

app.component('DemoBlock', DemoBlock)
app.component('MainHeader', MainHeader)
app.component('MainFooter', MainFooter)
app.component('SideNav', SideNav)
app.use(router)
// Mount when the route is ready
router.isReady().then(() => {
  app.mount('#app', true)
})
