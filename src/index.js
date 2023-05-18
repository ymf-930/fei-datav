import Icon from './components/icon'
import CountTo from './components/count-to'
import Loading from './components/loading'
import BorderBox from './components/border-box'
import Decorator from './components/decorator'
import CapsuleChart from './components/capsule-chart'
import LiquidFill from './components/liquidfill'
import ProgressBar from './components/progress-bar'
import ConicalChart from './components/conical-chart'
import FlylineChart from './components/flyline-chart'
import ScrollTable from './components/scroll-table'
import ScrollRank from './components/scroll-rank'

import config from '../package.json'
import * as Util from './utils/util'
import * as Theme from './utils/theme'
import log from './utils/log'

const version = config.version // version_ to fix tsc issue

const components = [
  Icon,
  CountTo,
  Loading,
  BorderBox,
  Decorator,
  CapsuleChart,
  LiquidFill,
  ProgressBar,
  ConicalChart,
  FlylineChart,
  ScrollTable,
  ScrollRank,
]
const install = function (app, options = {}) {
  components.forEach(component => {
    app.use(component)
  })

  if (!options.disabledDoc) {
    log.printVersion(config.name, config.version, config.homepage, '#0a5299')
  }
  return app
}

export {
  Util,
  Theme,
  Icon,
  CountTo,
  Loading,
  BorderBox,
  Decorator,
  CapsuleChart,
  ProgressBar,
  ConicalChart,
  FlylineChart,
  ScrollTable,
  ScrollRank,
}

export default {
  version,
  install,
}
