"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfei_datav"] = self["webpackChunkfei_datav"] || []).push([[115],{

/***/ 4975:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, {\n  \"default\": function() { return /* binding */ scroll_rank; }\n});\n\n// EXTERNAL MODULE: ./node_modules/.pnpm/@vue+runtime-core@3.3.11/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js\nvar runtime_core_esm_bundler = __webpack_require__(9026);\n;// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.23.6_webpack@5.89.0/node_modules/babel-loader/lib/index.js!./node_modules/.pnpm/vue-loader@17.3.1_@vue+compiler-sfc@3.3.11_vue@3.3.11_webpack@5.89.0/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/.pnpm/vue-loader@17.3.1_@vue+compiler-sfc@3.3.11_vue@3.3.11_webpack@5.89.0/node_modules/vue-loader/dist/index.js??clonedRuleSet-2.use[0]!./build/md-loader/index.js!./examples/docs/scroll-rank.md?vue&type=template&id=f4c2a426\n\nconst _hoisted_1 = {\n  class: \"content element-doc\"\n};\nconst _hoisted_2 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)(\"h2\", {\n  id: \"scrollrank-pai-ming-lun-bo-biao\",\n  tabindex: \"-1\"\n}, \"ScrollRank 排名轮播表\", -1);\nconst _hoisted_3 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)(\"p\", null, \"类似轮播表格，排名有时也需要滚动显示，排名柱图，均为css样式，如需修改不同的样式效果，请自行覆盖实现。\", -1);\nconst _hoisted_4 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)(\"h3\", {\n  id: \"ji-chu-yong-fa\",\n  tabindex: \"-1\"\n}, \"基础用法\", -1);\nconst _hoisted_5 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)(\"pre\", null, [/*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)(\"code\", {\n  class: \"html\"\n}, \"\\n<template>\\n  <div flex=\\\"main:center\\\">\\n    <bv-scroll-rank :config=\\\"config\\\" style=\\\"width: 500px; height: 300px;\\\"></bv-scroll-rank>\\n  </div>\\n</template>\\n<script>\\n  export default {\\n    data() {\\n      return {\\n        config: {\\n          data: [\\n            { name: '漯河', value: 167 },\\n            { name: '三门峡', value: 123 },\\n            { name: '郑州', value: 98 },\\n            { name: '周口', value: 89 },\\n            { name: '濮阳', value: 68 },\\n            { name: '信阳', value: 58 },\\n            { name: '新乡', value: 38 },\\n          ]\\n        }\\n      }\\n    }\\n  }\\n</script>\\n\")], -1);\nconst _hoisted_6 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)(\"h3\", {\n  id: \"shu-zhi-dan-wei\",\n  tabindex: \"-1\"\n}, \"数值单位\", -1);\nconst _hoisted_7 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)(\"pre\", null, [/*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)(\"code\", {\n  class: \"html\"\n}, \"\\n<template>\\n  <div flex=\\\"main:center\\\">\\n    <bv-scroll-rank :config=\\\"config\\\" style=\\\"width: 500px; height: 300px;\\\"></bv-scroll-rank>\\n  </div>\\n</template>\\n<script>\\n  export default {\\n    data() {\\n      return {\\n        config: {\\n          data: [\\n            { name: '荣成', value: 2670 },\\n            { name: '河南', value: 2070 },\\n            { name: '河北', value: 1870 },\\n            { name: '徐州', value: 1700 },\\n            { name: '漯河', value: 1676 },\\n            { name: '三门峡', value: 1234 },\\n            { name: '郑州', value: 982 },\\n            { name: '周口', value: 891 },\\n            { name: '濮阳', value: 683 },\\n            { name: '信阳', value: 587 },\\n            { name: '新乡', value: 383 },\\n            { name: '大同', value: 181 },\\n          ],\\n          unit: '分'\\n        }\\n      }\\n    }\\n  }\\n</script>\\n\")], -1);\nconst _hoisted_8 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)(\"h3\", {\n  id: \"shu-zhi-ge-shi-hua\",\n  tabindex: \"-1\"\n}, \"数值格式化\", -1);\nconst _hoisted_9 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)(\"pre\", null, [/*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)(\"code\", {\n  class: \"html\"\n}, \"\\n<template>\\n  <div flex=\\\"main:center\\\">\\n    <bv-scroll-rank :config=\\\"config\\\" style=\\\"width: 500px; height: 300px;\\\"></bv-scroll-rank>\\n  </div>\\n</template>\\n<script>\\n  export default {\\n    data() {\\n      return {\\n        config: {\\n          data: [\\n            { name: '荣成', value: 26700 },\\n            { name: '河南', value: 20700 },\\n            { name: '河北', value: 18700 },\\n            { name: '徐州', value: 17800 },\\n            { name: '漯河', value: 16756 },\\n            { name: '三门峡', value: 12343 },\\n            { name: '郑州', value: 9822 },\\n            { name: '周口', value: 8912 },\\n            { name: '濮阳', value: 6834 },\\n            { name: '信阳', value: 5875 },\\n            { name: '新乡', value: 3832 },\\n            { name: '大同', value: 1811 },\\n          ],\\n          valueFormatter({ value }) {\\n            const reverseNumber = (value + '').split('').reverse()\\n            let valueStr = ''\\n            while (reverseNumber.length) {\\n              const seg = reverseNumber.splice(0, 3).join('')\\n              valueStr += seg\\n              if (seg.length === 3) valueStr += ','\\n            }\\n            return valueStr.split('').reverse().join('')\\n          }\\n        }\\n      }\\n    }\\n  }\\n</script>\\n\")], -1);\nconst _hoisted_10 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createStaticVNode */.uE)(\"<h3 id=\\\"props\\\" tabindex=\\\"-1\\\">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>config</td><td>定义的config配置项，主要包含下面几个属性值</td><td>Object</td><td>—</td><td>{}</td></tr></tbody></table><h3 id=\\\"config\\\" tabindex=\\\"-1\\\">config</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>data</td><td>表数据[{name,value}]</td><td>Array</td><td>—</td><td>[]</td></tr><tr><td>rowNum</td><td>表行数</td><td>Number</td><td>—</td><td>5</td></tr><tr><td>waitTime</td><td>轮播时间间隔(ms)</td><td>Number</td><td>—</td><td>2000</td></tr><tr><td>unit</td><td>数值单位</td><td>String</td><td>—</td><td>—</td></tr><tr><td>sort</td><td>自动排序</td><td>Boolean</td><td>—</td><td>true</td></tr><tr><td>valueFormatter</td><td>数值格式化(name,value,percent,ranking)</td><td>Function</td><td>—</td><td>undefined</td></tr><tr><td>hoverPause</td><td>悬浮暂停轮播</td><td>Boolean</td><td>true</td><td>false</td></tr></tbody></table>\", 4);\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_element_demo0 = (0,runtime_core_esm_bundler/* resolveComponent */.up)(\"element-demo0\");\n  const _component_demo_block = (0,runtime_core_esm_bundler/* resolveComponent */.up)(\"demo-block\");\n  const _component_element_demo1 = (0,runtime_core_esm_bundler/* resolveComponent */.up)(\"element-demo1\");\n  const _component_element_demo2 = (0,runtime_core_esm_bundler/* resolveComponent */.up)(\"element-demo2\");\n  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(\"section\", _hoisted_1, [_hoisted_2, _hoisted_3, _hoisted_4, (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_demo_block, null, {\n    source: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_element_demo0)]),\n    highlight: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_5]),\n    _: 1\n  }), _hoisted_6, (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_demo_block, null, {\n    source: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_element_demo1)]),\n    highlight: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_7]),\n    _: 1\n  }), _hoisted_8, (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_demo_block, null, {\n    source: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_element_demo2)]),\n    highlight: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_9]),\n    _: 1\n  }), _hoisted_10]);\n}\n;// CONCATENATED MODULE: ./examples/docs/scroll-rank.md?vue&type=template&id=f4c2a426\n\n// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.3.11/node_modules/vue/dist/vue.runtime.esm-bundler.js\nvar vue_runtime_esm_bundler = __webpack_require__(4418);\n;// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.23.6_webpack@5.89.0/node_modules/babel-loader/lib/index.js!./node_modules/.pnpm/vue-loader@17.3.1_@vue+compiler-sfc@3.3.11_vue@3.3.11_webpack@5.89.0/node_modules/vue-loader/dist/index.js??clonedRuleSet-2.use[0]!./build/md-loader/index.js!./examples/docs/scroll-rank.md?vue&type=script&lang=js\n\n/* harmony default export */ var scroll_rankvue_type_script_lang_js = ({\n  name: 'component-doc',\n  components: {\n    \"element-demo0\": function () {\n      const {\n        resolveComponent: _resolveComponent,\n        createVNode: _createVNode,\n        createElementVNode: _createElementVNode,\n        openBlock: _openBlock,\n        createElementBlock: _createElementBlock\n      } = vue_runtime_esm_bundler;\n      const _hoisted_1 = {\n        flex: \"main:center\"\n      };\n      function render(_ctx, _cache) {\n        const _component_bv_scroll_rank = _resolveComponent(\"bv-scroll-rank\");\n        return _openBlock(), _createElementBlock(\"div\", null, [_createElementVNode(\"div\", _hoisted_1, [_createVNode(_component_bv_scroll_rank, {\n          config: _ctx.config,\n          style: {\n            \"width\": \"500px\",\n            \"height\": \"300px\"\n          }\n        }, null, 8, [\"config\"])])]);\n      }\n      const democomponentExport = {\n        data() {\n          return {\n            config: {\n              data: [{\n                name: '漯河',\n                value: 167\n              }, {\n                name: '三门峡',\n                value: 123\n              }, {\n                name: '郑州',\n                value: 98\n              }, {\n                name: '周口',\n                value: 89\n              }, {\n                name: '濮阳',\n                value: 68\n              }, {\n                name: '信阳',\n                value: 58\n              }, {\n                name: '新乡',\n                value: 38\n              }]\n            }\n          };\n        }\n      };\n      return {\n        render,\n        ...democomponentExport\n      };\n    }(),\n    \"element-demo1\": function () {\n      const {\n        resolveComponent: _resolveComponent,\n        createVNode: _createVNode,\n        createElementVNode: _createElementVNode,\n        openBlock: _openBlock,\n        createElementBlock: _createElementBlock\n      } = vue_runtime_esm_bundler;\n      const _hoisted_1 = {\n        flex: \"main:center\"\n      };\n      function render(_ctx, _cache) {\n        const _component_bv_scroll_rank = _resolveComponent(\"bv-scroll-rank\");\n        return _openBlock(), _createElementBlock(\"div\", null, [_createElementVNode(\"div\", _hoisted_1, [_createVNode(_component_bv_scroll_rank, {\n          config: _ctx.config,\n          style: {\n            \"width\": \"500px\",\n            \"height\": \"300px\"\n          }\n        }, null, 8, [\"config\"])])]);\n      }\n      const democomponentExport = {\n        data() {\n          return {\n            config: {\n              data: [{\n                name: '荣成',\n                value: 2670\n              }, {\n                name: '河南',\n                value: 2070\n              }, {\n                name: '河北',\n                value: 1870\n              }, {\n                name: '徐州',\n                value: 1700\n              }, {\n                name: '漯河',\n                value: 1676\n              }, {\n                name: '三门峡',\n                value: 1234\n              }, {\n                name: '郑州',\n                value: 982\n              }, {\n                name: '周口',\n                value: 891\n              }, {\n                name: '濮阳',\n                value: 683\n              }, {\n                name: '信阳',\n                value: 587\n              }, {\n                name: '新乡',\n                value: 383\n              }, {\n                name: '大同',\n                value: 181\n              }],\n              unit: '分'\n            }\n          };\n        }\n      };\n      return {\n        render,\n        ...democomponentExport\n      };\n    }(),\n    \"element-demo2\": function () {\n      const {\n        resolveComponent: _resolveComponent,\n        createVNode: _createVNode,\n        createElementVNode: _createElementVNode,\n        openBlock: _openBlock,\n        createElementBlock: _createElementBlock\n      } = vue_runtime_esm_bundler;\n      const _hoisted_1 = {\n        flex: \"main:center\"\n      };\n      function render(_ctx, _cache) {\n        const _component_bv_scroll_rank = _resolveComponent(\"bv-scroll-rank\");\n        return _openBlock(), _createElementBlock(\"div\", null, [_createElementVNode(\"div\", _hoisted_1, [_createVNode(_component_bv_scroll_rank, {\n          config: _ctx.config,\n          style: {\n            \"width\": \"500px\",\n            \"height\": \"300px\"\n          }\n        }, null, 8, [\"config\"])])]);\n      }\n      const democomponentExport = {\n        data() {\n          return {\n            config: {\n              data: [{\n                name: '荣成',\n                value: 26700\n              }, {\n                name: '河南',\n                value: 20700\n              }, {\n                name: '河北',\n                value: 18700\n              }, {\n                name: '徐州',\n                value: 17800\n              }, {\n                name: '漯河',\n                value: 16756\n              }, {\n                name: '三门峡',\n                value: 12343\n              }, {\n                name: '郑州',\n                value: 9822\n              }, {\n                name: '周口',\n                value: 8912\n              }, {\n                name: '濮阳',\n                value: 6834\n              }, {\n                name: '信阳',\n                value: 5875\n              }, {\n                name: '新乡',\n                value: 3832\n              }, {\n                name: '大同',\n                value: 1811\n              }],\n              valueFormatter({\n                value\n              }) {\n                const reverseNumber = (value + '').split('').reverse();\n                let valueStr = '';\n                while (reverseNumber.length) {\n                  const seg = reverseNumber.splice(0, 3).join('');\n                  valueStr += seg;\n                  if (seg.length === 3) valueStr += ',';\n                }\n                return valueStr.split('').reverse().join('');\n              }\n            }\n          };\n        }\n      };\n      return {\n        render,\n        ...democomponentExport\n      };\n    }()\n  }\n});\n;// CONCATENATED MODULE: ./examples/docs/scroll-rank.md?vue&type=script&lang=js\n \n// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@17.3.1_@vue+compiler-sfc@3.3.11_vue@3.3.11_webpack@5.89.0/node_modules/vue-loader/dist/exportHelper.js\nvar exportHelper = __webpack_require__(8351);\n;// CONCATENATED MODULE: ./examples/docs/scroll-rank.md\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(scroll_rankvue_type_script_lang_js, [['render',render]])\n\n/* harmony default export */ var scroll_rank = (__exports__);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDk3NS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQXlCQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQStCQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTs7Ozs7OztBQXZFQTtBQU1BO0FBQ0E7O0FBeUJBO0FBR0E7QUFDQTs7QUErQkE7QUFHQTtBQUNBOztBQXdDQTs7Ozs7OztBQXdGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUU1VkE7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmVpLWRhdGF2Ly4vZXhhbXBsZXMvZG9jcy9zY3JvbGwtcmFuay5tZD8zMGFmIiwid2VicGFjazovL2ZlaS1kYXRhdi8uL2V4YW1wbGVzL2RvY3Mvc2Nyb2xsLXJhbmsubWQ/MzZlNCIsIndlYnBhY2s6Ly9mZWktZGF0YXYvLi9leGFtcGxlcy9kb2NzL3Njcm9sbC1yYW5rLm1kP2JmODIiLCJ3ZWJwYWNrOi8vZmVpLWRhdGF2Ly4vZXhhbXBsZXMvZG9jcy9zY3JvbGwtcmFuay5tZD9lZGUzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuICA8dGVtcGxhdGU+XG4gICAgPHNlY3Rpb24gY2xhc3M9XCJjb250ZW50IGVsZW1lbnQtZG9jXCI+XG4gICAgICA8aDIgaWQ9XCJzY3JvbGxyYW5rLXBhaS1taW5nLWx1bi1iby1iaWFvXCIgdGFiaW5kZXg9XCItMVwiPlNjcm9sbFJhbmsg5o6S5ZCN6L2u5pKt6KGoPC9oMj5cbjxwPuexu+S8vOi9ruaSreihqOagvO+8jOaOkuWQjeacieaXtuS5n+mcgOimgea7muWKqOaYvuekuu+8jOaOkuWQjeafseWbvu+8jOWdh+S4umNzc+agt+W8j++8jOWmgumcgOS/ruaUueS4jeWQjOeahOagt+W8j+aViOaenO+8jOivt+iHquihjOimhuebluWunueOsOOAgjwvcD5cbjxoMyBpZD1cImppLWNodS15b25nLWZhXCIgdGFiaW5kZXg9XCItMVwiPuWfuuehgOeUqOazlTwvaDM+XG48ZGVtby1ibG9jaz5cbiAgICAgICAgXG4gICAgICAgIDx0ZW1wbGF0ZSAjc291cmNlPjxlbGVtZW50LWRlbW8wIC8+PC90ZW1wbGF0ZT5cbiAgICAgICAgPHRlbXBsYXRlICNoaWdobGlnaHQ+PHByZSB2LXByZT48Y29kZSBjbGFzcz1cImh0bWxcIj5cbiZsdDt0ZW1wbGF0ZSZndDtcbiAgJmx0O2RpdiBmbGV4PSZxdW90O21haW46Y2VudGVyJnF1b3Q7Jmd0O1xuICAgICZsdDtidi1zY3JvbGwtcmFuayA6Y29uZmlnPSZxdW90O2NvbmZpZyZxdW90OyBzdHlsZT0mcXVvdDt3aWR0aDogNTAwcHg7IGhlaWdodDogMzAwcHg7JnF1b3Q7Jmd0OyZsdDsvYnYtc2Nyb2xsLXJhbmsmZ3Q7XG4gICZsdDsvZGl2Jmd0O1xuJmx0Oy90ZW1wbGF0ZSZndDtcbiZsdDtzY3JpcHQmZ3Q7XG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgZGF0YTogW1xuICAgICAgICAgICAgeyBuYW1lOiAn5ryv5rKzJywgdmFsdWU6IDE2NyB9LFxuICAgICAgICAgICAgeyBuYW1lOiAn5LiJ6Zeo5bOhJywgdmFsdWU6IDEyMyB9LFxuICAgICAgICAgICAgeyBuYW1lOiAn6YOR5beeJywgdmFsdWU6IDk4IH0sXG4gICAgICAgICAgICB7IG5hbWU6ICflkajlj6MnLCB2YWx1ZTogODkgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ+a/rumYsycsIHZhbHVlOiA2OCB9LFxuICAgICAgICAgICAgeyBuYW1lOiAn5L+h6ZizJywgdmFsdWU6IDU4IH0sXG4gICAgICAgICAgICB7IG5hbWU6ICfmlrDkuaEnLCB2YWx1ZTogMzggfSxcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiZsdDsvc2NyaXB0Jmd0O1xuPC9jb2RlPjwvcHJlPjwvdGVtcGxhdGU+PC9kZW1vLWJsb2NrPjxoMyBpZD1cInNodS16aGktZGFuLXdlaVwiIHRhYmluZGV4PVwiLTFcIj7mlbDlgLzljZXkvY08L2gzPlxuPGRlbW8tYmxvY2s+XG4gICAgICAgIFxuICAgICAgICA8dGVtcGxhdGUgI3NvdXJjZT48ZWxlbWVudC1kZW1vMSAvPjwvdGVtcGxhdGU+XG4gICAgICAgIDx0ZW1wbGF0ZSAjaGlnaGxpZ2h0PjxwcmUgdi1wcmU+PGNvZGUgY2xhc3M9XCJodG1sXCI+XG4mbHQ7dGVtcGxhdGUmZ3Q7XG4gICZsdDtkaXYgZmxleD0mcXVvdDttYWluOmNlbnRlciZxdW90OyZndDtcbiAgICAmbHQ7YnYtc2Nyb2xsLXJhbmsgOmNvbmZpZz0mcXVvdDtjb25maWcmcXVvdDsgc3R5bGU9JnF1b3Q7d2lkdGg6IDUwMHB4OyBoZWlnaHQ6IDMwMHB4OyZxdW90OyZndDsmbHQ7L2J2LXNjcm9sbC1yYW5rJmd0O1xuICAmbHQ7L2RpdiZndDtcbiZsdDsvdGVtcGxhdGUmZ3Q7XG4mbHQ7c2NyaXB0Jmd0O1xuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgIGRhdGE6IFtcbiAgICAgICAgICAgIHsgbmFtZTogJ+iNo+aIkCcsIHZhbHVlOiAyNjcwIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICfmsrPljZcnLCB2YWx1ZTogMjA3MCB9LFxuICAgICAgICAgICAgeyBuYW1lOiAn5rKz5YyXJywgdmFsdWU6IDE4NzAgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ+W+kOW3nicsIHZhbHVlOiAxNzAwIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICfmvK/msrMnLCB2YWx1ZTogMTY3NiB9LFxuICAgICAgICAgICAgeyBuYW1lOiAn5LiJ6Zeo5bOhJywgdmFsdWU6IDEyMzQgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ+mDkeW3nicsIHZhbHVlOiA5ODIgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ+WRqOWPoycsIHZhbHVlOiA4OTEgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ+a/rumYsycsIHZhbHVlOiA2ODMgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ+S/oemYsycsIHZhbHVlOiA1ODcgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ+aWsOS5oScsIHZhbHVlOiAzODMgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ+Wkp+WQjCcsIHZhbHVlOiAxODEgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIHVuaXQ6ICfliIYnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiZsdDsvc2NyaXB0Jmd0O1xuPC9jb2RlPjwvcHJlPjwvdGVtcGxhdGU+PC9kZW1vLWJsb2NrPjxoMyBpZD1cInNodS16aGktZ2Utc2hpLWh1YVwiIHRhYmluZGV4PVwiLTFcIj7mlbDlgLzmoLzlvI/ljJY8L2gzPlxuPGRlbW8tYmxvY2s+XG4gICAgICAgIFxuICAgICAgICA8dGVtcGxhdGUgI3NvdXJjZT48ZWxlbWVudC1kZW1vMiAvPjwvdGVtcGxhdGU+XG4gICAgICAgIDx0ZW1wbGF0ZSAjaGlnaGxpZ2h0PjxwcmUgdi1wcmU+PGNvZGUgY2xhc3M9XCJodG1sXCI+XG4mbHQ7dGVtcGxhdGUmZ3Q7XG4gICZsdDtkaXYgZmxleD0mcXVvdDttYWluOmNlbnRlciZxdW90OyZndDtcbiAgICAmbHQ7YnYtc2Nyb2xsLXJhbmsgOmNvbmZpZz0mcXVvdDtjb25maWcmcXVvdDsgc3R5bGU9JnF1b3Q7d2lkdGg6IDUwMHB4OyBoZWlnaHQ6IDMwMHB4OyZxdW90OyZndDsmbHQ7L2J2LXNjcm9sbC1yYW5rJmd0O1xuICAmbHQ7L2RpdiZndDtcbiZsdDsvdGVtcGxhdGUmZ3Q7XG4mbHQ7c2NyaXB0Jmd0O1xuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgIGRhdGE6IFtcbiAgICAgICAgICAgIHsgbmFtZTogJ+iNo+aIkCcsIHZhbHVlOiAyNjcwMCB9LFxuICAgICAgICAgICAgeyBuYW1lOiAn5rKz5Y2XJywgdmFsdWU6IDIwNzAwIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICfmsrPljJcnLCB2YWx1ZTogMTg3MDAgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ+W+kOW3nicsIHZhbHVlOiAxNzgwMCB9LFxuICAgICAgICAgICAgeyBuYW1lOiAn5ryv5rKzJywgdmFsdWU6IDE2NzU2IH0sXG4gICAgICAgICAgICB7IG5hbWU6ICfkuInpl6jls6EnLCB2YWx1ZTogMTIzNDMgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ+mDkeW3nicsIHZhbHVlOiA5ODIyIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICflkajlj6MnLCB2YWx1ZTogODkxMiB9LFxuICAgICAgICAgICAgeyBuYW1lOiAn5r+u6ZizJywgdmFsdWU6IDY4MzQgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ+S/oemYsycsIHZhbHVlOiA1ODc1IH0sXG4gICAgICAgICAgICB7IG5hbWU6ICfmlrDkuaEnLCB2YWx1ZTogMzgzMiB9LFxuICAgICAgICAgICAgeyBuYW1lOiAn5aSn5ZCMJywgdmFsdWU6IDE4MTEgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIHZhbHVlRm9ybWF0dGVyKHsgdmFsdWUgfSkge1xuICAgICAgICAgICAgY29uc3QgcmV2ZXJzZU51bWJlciA9ICh2YWx1ZSArICcnKS5zcGxpdCgnJykucmV2ZXJzZSgpXG4gICAgICAgICAgICBsZXQgdmFsdWVTdHIgPSAnJ1xuICAgICAgICAgICAgd2hpbGUgKHJldmVyc2VOdW1iZXIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHNlZyA9IHJldmVyc2VOdW1iZXIuc3BsaWNlKDAsIDMpLmpvaW4oJycpXG4gICAgICAgICAgICAgIHZhbHVlU3RyICs9IHNlZ1xuICAgICAgICAgICAgICBpZiAoc2VnLmxlbmd0aCA9PT0gMykgdmFsdWVTdHIgKz0gJywnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsdWVTdHIuc3BsaXQoJycpLnJldmVyc2UoKS5qb2luKCcnKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuJmx0Oy9zY3JpcHQmZ3Q7XG48L2NvZGU+PC9wcmU+PC90ZW1wbGF0ZT48L2RlbW8tYmxvY2s+PGgzIGlkPVwicHJvcHNcIiB0YWJpbmRleD1cIi0xXCI+UHJvcHM8L2gzPlxuPHRhYmxlPlxuPHRoZWFkPlxuPHRyPlxuPHRoPuWPguaVsDwvdGg+XG48dGg+6K+05piOPC90aD5cbjx0aD7nsbvlnos8L3RoPlxuPHRoPuWPr+mAieWAvDwvdGg+XG48dGg+6buY6K6k5YC8PC90aD5cbjwvdHI+XG48L3RoZWFkPlxuPHRib2R5PlxuPHRyPlxuPHRkPmNvbmZpZzwvdGQ+XG48dGQ+5a6a5LmJ55qEY29uZmln6YWN572u6aG577yM5Li76KaB5YyF5ZCr5LiL6Z2i5Yeg5Liq5bGe5oCn5YC8PC90ZD5cbjx0ZD5PYmplY3Q8L3RkPlxuPHRkPuKAlDwvdGQ+XG48dGQ+e308L3RkPlxuPC90cj5cbjwvdGJvZHk+XG48L3RhYmxlPlxuPGgzIGlkPVwiY29uZmlnXCIgdGFiaW5kZXg9XCItMVwiPmNvbmZpZzwvaDM+XG48dGFibGU+XG48dGhlYWQ+XG48dHI+XG48dGg+5Y+C5pWwPC90aD5cbjx0aD7or7TmmI48L3RoPlxuPHRoPuexu+WeizwvdGg+XG48dGg+5Y+v6YCJ5YC8PC90aD5cbjx0aD7pu5jorqTlgLw8L3RoPlxuPC90cj5cbjwvdGhlYWQ+XG48dGJvZHk+XG48dHI+XG48dGQ+ZGF0YTwvdGQ+XG48dGQ+6KGo5pWw5o2uW3tuYW1lLHZhbHVlfV08L3RkPlxuPHRkPkFycmF5PC90ZD5cbjx0ZD7igJQ8L3RkPlxuPHRkPltdPC90ZD5cbjwvdHI+XG48dHI+XG48dGQ+cm93TnVtPC90ZD5cbjx0ZD7ooajooYzmlbA8L3RkPlxuPHRkPk51bWJlcjwvdGQ+XG48dGQ+4oCUPC90ZD5cbjx0ZD41PC90ZD5cbjwvdHI+XG48dHI+XG48dGQ+d2FpdFRpbWU8L3RkPlxuPHRkPui9ruaSreaXtumXtOmXtOmalChtcyk8L3RkPlxuPHRkPk51bWJlcjwvdGQ+XG48dGQ+4oCUPC90ZD5cbjx0ZD4yMDAwPC90ZD5cbjwvdHI+XG48dHI+XG48dGQ+dW5pdDwvdGQ+XG48dGQ+5pWw5YC85Y2V5L2NPC90ZD5cbjx0ZD5TdHJpbmc8L3RkPlxuPHRkPuKAlDwvdGQ+XG48dGQ+4oCUPC90ZD5cbjwvdHI+XG48dHI+XG48dGQ+c29ydDwvdGQ+XG48dGQ+6Ieq5Yqo5o6S5bqPPC90ZD5cbjx0ZD5Cb29sZWFuPC90ZD5cbjx0ZD7igJQ8L3RkPlxuPHRkPnRydWU8L3RkPlxuPC90cj5cbjx0cj5cbjx0ZD52YWx1ZUZvcm1hdHRlcjwvdGQ+XG48dGQ+5pWw5YC85qC85byP5YyWKG5hbWUsdmFsdWUscGVyY2VudCxyYW5raW5nKTwvdGQ+XG48dGQ+RnVuY3Rpb248L3RkPlxuPHRkPuKAlDwvdGQ+XG48dGQ+dW5kZWZpbmVkPC90ZD5cbjwvdHI+XG48dHI+XG48dGQ+aG92ZXJQYXVzZTwvdGQ+XG48dGQ+5oKs5rWu5pqC5YGc6L2u5pKtPC90ZD5cbjx0ZD5Cb29sZWFuPC90ZD5cbjx0ZD50cnVlPC90ZD5cbjx0ZD5mYWxzZTwvdGQ+XG48L3RyPlxuPC90Ym9keT5cbjwvdGFibGU+XG5cbiAgICA8L3NlY3Rpb24+XG4gIDwvdGVtcGxhdGU+XG4gIDxzY3JpcHQ+XG4gICAgICBpbXBvcnQgKiBhcyBWdWUgZnJvbSAndnVlJztcbiAgICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogJ2NvbXBvbmVudC1kb2MnLFxuICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgXCJlbGVtZW50LWRlbW8wXCI6IChmdW5jdGlvbigpIHtcbiAgICBcbiAgICBjb25zdCB7IHJlc29sdmVDb21wb25lbnQ6IF9yZXNvbHZlQ29tcG9uZW50LCBjcmVhdGVWTm9kZTogX2NyZWF0ZVZOb2RlLCBjcmVhdGVFbGVtZW50Vk5vZGU6IF9jcmVhdGVFbGVtZW50Vk5vZGUsIG9wZW5CbG9jazogX29wZW5CbG9jaywgY3JlYXRlRWxlbWVudEJsb2NrOiBfY3JlYXRlRWxlbWVudEJsb2NrIH0gPSBWdWVcblxuY29uc3QgX2hvaXN0ZWRfMSA9IHsgZmxleDogXCJtYWluOmNlbnRlclwiIH1cblxuZnVuY3Rpb24gcmVuZGVyKF9jdHgsIF9jYWNoZSkge1xuICBjb25zdCBfY29tcG9uZW50X2J2X3Njcm9sbF9yYW5rID0gX3Jlc29sdmVDb21wb25lbnQoXCJidi1zY3JvbGwtcmFua1wiKVxuXG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiZGl2XCIsIG51bGwsIFtcbiAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzEsIFtcbiAgICAgIF9jcmVhdGVWTm9kZShfY29tcG9uZW50X2J2X3Njcm9sbF9yYW5rLCB7XG4gICAgICAgIGNvbmZpZzogX2N0eC5jb25maWcsXG4gICAgICAgIHN0eWxlOiB7XCJ3aWR0aFwiOlwiNTAwcHhcIixcImhlaWdodFwiOlwiMzAwcHhcIn1cbiAgICAgIH0sIG51bGwsIDgsIFtcImNvbmZpZ1wiXSlcbiAgICBdKVxuICBdKSlcbn1cbiAgXG4gICAgY29uc3QgZGVtb2NvbXBvbmVudEV4cG9ydCA9IHtcbiAgICBkYXRhKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgZGF0YTogW1xuICAgICAgICAgICAgeyBuYW1lOiAn5ryv5rKzJywgdmFsdWU6IDE2NyB9LFxuICAgICAgICAgICAgeyBuYW1lOiAn5LiJ6Zeo5bOhJywgdmFsdWU6IDEyMyB9LFxuICAgICAgICAgICAgeyBuYW1lOiAn6YOR5beeJywgdmFsdWU6IDk4IH0sXG4gICAgICAgICAgICB7IG5hbWU6ICflkajlj6MnLCB2YWx1ZTogODkgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ+a/rumYsycsIHZhbHVlOiA2OCB9LFxuICAgICAgICAgICAgeyBuYW1lOiAn5L+h6ZizJywgdmFsdWU6IDU4IH0sXG4gICAgICAgICAgICB7IG5hbWU6ICfmlrDkuaEnLCB2YWx1ZTogMzggfSxcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgICByZXR1cm4ge1xuICAgICAgcmVuZGVyLFxuICAgICAgLi4uZGVtb2NvbXBvbmVudEV4cG9ydFxuICAgIH1cbiAgfSkoKSxcImVsZW1lbnQtZGVtbzFcIjogKGZ1bmN0aW9uKCkge1xuICAgIFxuICAgIGNvbnN0IHsgcmVzb2x2ZUNvbXBvbmVudDogX3Jlc29sdmVDb21wb25lbnQsIGNyZWF0ZVZOb2RlOiBfY3JlYXRlVk5vZGUsIGNyZWF0ZUVsZW1lbnRWTm9kZTogX2NyZWF0ZUVsZW1lbnRWTm9kZSwgb3BlbkJsb2NrOiBfb3BlbkJsb2NrLCBjcmVhdGVFbGVtZW50QmxvY2s6IF9jcmVhdGVFbGVtZW50QmxvY2sgfSA9IFZ1ZVxuXG5jb25zdCBfaG9pc3RlZF8xID0geyBmbGV4OiBcIm1haW46Y2VudGVyXCIgfVxuXG5mdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlKSB7XG4gIGNvbnN0IF9jb21wb25lbnRfYnZfc2Nyb2xsX3JhbmsgPSBfcmVzb2x2ZUNvbXBvbmVudChcImJ2LXNjcm9sbC1yYW5rXCIpXG5cbiAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJkaXZcIiwgbnVsbCwgW1xuICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfMSwgW1xuICAgICAgX2NyZWF0ZVZOb2RlKF9jb21wb25lbnRfYnZfc2Nyb2xsX3JhbmssIHtcbiAgICAgICAgY29uZmlnOiBfY3R4LmNvbmZpZyxcbiAgICAgICAgc3R5bGU6IHtcIndpZHRoXCI6XCI1MDBweFwiLFwiaGVpZ2h0XCI6XCIzMDBweFwifVxuICAgICAgfSwgbnVsbCwgOCwgW1wiY29uZmlnXCJdKVxuICAgIF0pXG4gIF0pKVxufVxuICBcbiAgICBjb25zdCBkZW1vY29tcG9uZW50RXhwb3J0ID0ge1xuICAgIGRhdGEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjb25maWc6IHtcbiAgICAgICAgICBkYXRhOiBbXG4gICAgICAgICAgICB7IG5hbWU6ICfojaPmiJAnLCB2YWx1ZTogMjY3MCB9LFxuICAgICAgICAgICAgeyBuYW1lOiAn5rKz5Y2XJywgdmFsdWU6IDIwNzAgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ+ays+WMlycsIHZhbHVlOiAxODcwIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICflvpDlt54nLCB2YWx1ZTogMTcwMCB9LFxuICAgICAgICAgICAgeyBuYW1lOiAn5ryv5rKzJywgdmFsdWU6IDE2NzYgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ+S4iemXqOWzoScsIHZhbHVlOiAxMjM0IH0sXG4gICAgICAgICAgICB7IG5hbWU6ICfpg5Hlt54nLCB2YWx1ZTogOTgyIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICflkajlj6MnLCB2YWx1ZTogODkxIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICfmv67pmLMnLCB2YWx1ZTogNjgzIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICfkv6HpmLMnLCB2YWx1ZTogNTg3IH0sXG4gICAgICAgICAgICB7IG5hbWU6ICfmlrDkuaEnLCB2YWx1ZTogMzgzIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICflpKflkIwnLCB2YWx1ZTogMTgxIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICB1bml0OiAn5YiGJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlbmRlcixcbiAgICAgIC4uLmRlbW9jb21wb25lbnRFeHBvcnRcbiAgICB9XG4gIH0pKCksXCJlbGVtZW50LWRlbW8yXCI6IChmdW5jdGlvbigpIHtcbiAgICBcbiAgICBjb25zdCB7IHJlc29sdmVDb21wb25lbnQ6IF9yZXNvbHZlQ29tcG9uZW50LCBjcmVhdGVWTm9kZTogX2NyZWF0ZVZOb2RlLCBjcmVhdGVFbGVtZW50Vk5vZGU6IF9jcmVhdGVFbGVtZW50Vk5vZGUsIG9wZW5CbG9jazogX29wZW5CbG9jaywgY3JlYXRlRWxlbWVudEJsb2NrOiBfY3JlYXRlRWxlbWVudEJsb2NrIH0gPSBWdWVcblxuY29uc3QgX2hvaXN0ZWRfMSA9IHsgZmxleDogXCJtYWluOmNlbnRlclwiIH1cblxuZnVuY3Rpb24gcmVuZGVyKF9jdHgsIF9jYWNoZSkge1xuICBjb25zdCBfY29tcG9uZW50X2J2X3Njcm9sbF9yYW5rID0gX3Jlc29sdmVDb21wb25lbnQoXCJidi1zY3JvbGwtcmFua1wiKVxuXG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiZGl2XCIsIG51bGwsIFtcbiAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzEsIFtcbiAgICAgIF9jcmVhdGVWTm9kZShfY29tcG9uZW50X2J2X3Njcm9sbF9yYW5rLCB7XG4gICAgICAgIGNvbmZpZzogX2N0eC5jb25maWcsXG4gICAgICAgIHN0eWxlOiB7XCJ3aWR0aFwiOlwiNTAwcHhcIixcImhlaWdodFwiOlwiMzAwcHhcIn1cbiAgICAgIH0sIG51bGwsIDgsIFtcImNvbmZpZ1wiXSlcbiAgICBdKVxuICBdKSlcbn1cbiAgXG4gICAgY29uc3QgZGVtb2NvbXBvbmVudEV4cG9ydCA9IHtcbiAgICBkYXRhKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgZGF0YTogW1xuICAgICAgICAgICAgeyBuYW1lOiAn6I2j5oiQJywgdmFsdWU6IDI2NzAwIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICfmsrPljZcnLCB2YWx1ZTogMjA3MDAgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ+ays+WMlycsIHZhbHVlOiAxODcwMCB9LFxuICAgICAgICAgICAgeyBuYW1lOiAn5b6Q5beeJywgdmFsdWU6IDE3ODAwIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICfmvK/msrMnLCB2YWx1ZTogMTY3NTYgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ+S4iemXqOWzoScsIHZhbHVlOiAxMjM0MyB9LFxuICAgICAgICAgICAgeyBuYW1lOiAn6YOR5beeJywgdmFsdWU6IDk4MjIgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ+WRqOWPoycsIHZhbHVlOiA4OTEyIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICfmv67pmLMnLCB2YWx1ZTogNjgzNCB9LFxuICAgICAgICAgICAgeyBuYW1lOiAn5L+h6ZizJywgdmFsdWU6IDU4NzUgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ+aWsOS5oScsIHZhbHVlOiAzODMyIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICflpKflkIwnLCB2YWx1ZTogMTgxMSB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgdmFsdWVGb3JtYXR0ZXIoeyB2YWx1ZSB9KSB7XG4gICAgICAgICAgICBjb25zdCByZXZlcnNlTnVtYmVyID0gKHZhbHVlICsgJycpLnNwbGl0KCcnKS5yZXZlcnNlKClcbiAgICAgICAgICAgIGxldCB2YWx1ZVN0ciA9ICcnXG4gICAgICAgICAgICB3aGlsZSAocmV2ZXJzZU51bWJlci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgY29uc3Qgc2VnID0gcmV2ZXJzZU51bWJlci5zcGxpY2UoMCwgMykuam9pbignJylcbiAgICAgICAgICAgICAgdmFsdWVTdHIgKz0gc2VnXG4gICAgICAgICAgICAgIGlmIChzZWcubGVuZ3RoID09PSAzKSB2YWx1ZVN0ciArPSAnLCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZVN0ci5zcGxpdCgnJykucmV2ZXJzZSgpLmpvaW4oJycpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlbmRlcixcbiAgICAgIC4uLmRlbW9jb21wb25lbnRFeHBvcnRcbiAgICB9XG4gIH0pKCksXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICA8L3NjcmlwdD5cbiAgIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2JhYmVsLWxvYWRlckA5LjEuM19AYmFiZWwrY29yZUA3LjIzLjZfd2VicGFja0A1Ljg5LjAvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3Z1ZS1sb2FkZXJAMTcuMy4xX0B2dWUrY29tcGlsZXItc2ZjQDMuMy4xMV92dWVAMy4zLjExX3dlYnBhY2tANS44OS4wL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0hLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3Z1ZS1sb2FkZXJAMTcuMy4xX0B2dWUrY29tcGlsZXItc2ZjQDMuMy4xMV92dWVAMy4zLjExX3dlYnBhY2tANS44OS4wL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMi51c2VbMF0hLi4vLi4vYnVpbGQvbWQtbG9hZGVyL2luZGV4LmpzIS4vc2Nyb2xsLXJhbmsubWQ/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZjRjMmE0MjZcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vYmFiZWwtbG9hZGVyQDkuMS4zX0BiYWJlbCtjb3JlQDcuMjMuNl93ZWJwYWNrQDUuODkuMC9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vdnVlLWxvYWRlckAxNy4zLjFfQHZ1ZStjb21waWxlci1zZmNAMy4zLjExX3Z1ZUAzLjMuMTFfd2VicGFja0A1Ljg5LjAvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0yLnVzZVswXSEuLi8uLi9idWlsZC9tZC1sb2FkZXIvaW5kZXguanMhLi9zY3JvbGwtcmFuay5tZD92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vYmFiZWwtbG9hZGVyQDkuMS4zX0BiYWJlbCtjb3JlQDcuMjMuNl93ZWJwYWNrQDUuODkuMC9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vdnVlLWxvYWRlckAxNy4zLjFfQHZ1ZStjb21waWxlci1zZmNAMy4zLjExX3Z1ZUAzLjMuMTFfd2VicGFja0A1Ljg5LjAvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0yLnVzZVswXSEuLi8uLi9idWlsZC9tZC1sb2FkZXIvaW5kZXguanMhLi9zY3JvbGwtcmFuay5tZD92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vc2Nyb2xsLXJhbmsubWQ/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZjRjMmE0MjZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9zY3JvbGwtcmFuay5tZD92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9zY3JvbGwtcmFuay5tZD92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS92dWUtbG9hZGVyQDE3LjMuMV9AdnVlK2NvbXBpbGVyLXNmY0AzLjMuMTFfdnVlQDMuMy4xMV93ZWJwYWNrQDUuODkuMC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl1dKVxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4975\n");

/***/ })

}]);