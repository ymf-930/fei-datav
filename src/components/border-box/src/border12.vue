<template>
  <div class="bv-border-box-12" ref="domRef">
    <svg class="bv-border-svg-container" :width="width" :height="height">
      <defs>
        <filter :id="filterId" height="150%" width="150%" x="-25%" y="-25%">
          <feMorphology operator="dilate" radius="1" in="SourceAlpha" result="thicken"/>
          <feGaussianBlur in="thicken" stdDeviation="2" result="blurred"/>
          <feFlood :flood-color="alpha(mergedColor[1] || defaultColor[1], .7)" result="glowColor">
            <animate
              attributeName="flood-color"
              :values="`
                ${alpha(mergedColor[1] || defaultColor[1], .7)};
                ${alpha(mergedColor[1] || defaultColor[1], .3)};
                ${alpha(mergedColor[1] || defaultColor[1], .7)};
              `"
              dur="3s"
              begin="0s"
              repeatCount="indefinite"
            />
          </feFlood>
          <feComposite in="glowColor" in2="blurred" operator="in" result="softGlowColored"/>
          <feMerge>
            <feMergeNode in="softGlowColored"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      <path
        v-if="width && height"
        :fill="backgroundColor"
        stroke-width="2"
        :stroke="mergedColor[0]"
        :d="`
          M15 5 L ${width - 15} 5 Q ${width - 5} 5, ${width - 5} 15
          L ${width - 5} ${height - 15} Q ${width - 5} ${height - 5}, ${width - 15} ${height - 5}
          L 15, ${height - 5} Q 5 ${height - 5} 5 ${height - 15} L 5 15
          Q 5 5 15 5
        `"
      />

      <path
        stroke-width="2"
        fill="transparent"
        stroke-linecap="round"
        :filter="`url(#${filterId})`"
        :stroke="mergedColor[1]"
        :d="`M 20 5 L 15 5 Q 5 5 5 15 L 5 20`"
      />

      <path
        stroke-width="2"
        fill="transparent"
        stroke-linecap="round"
        :filter="`url(#${filterId})`"
        :stroke="mergedColor[1]"
        :d="`M ${width - 20} 5 L ${width - 15} 5 Q ${width - 5} 5 ${width - 5} 15 L ${width - 5} 20`"
      />

      <path
        stroke-width="2"
        fill="transparent"
        stroke-linecap="round"
        :filter="`url(#${filterId})`"
        :stroke="mergedColor[1]"
        :d="`
          M ${width - 20} ${height - 5} L ${width - 15} ${height - 5}
          Q ${width - 5} ${height - 5} ${width - 5} ${height - 15}
          L ${width - 5} ${height - 20}
        `"
      />

      <path
        stroke-width="2"
        fill="transparent"
        stroke-linecap="round"
        :filter="`url(#${filterId})`"
        :stroke="mergedColor[1]"
        :d="`
          M 20 ${height - 5} L 15 ${height - 5}
          Q 5 ${height - 5} 5 ${height - 15}
          L 5 ${height - 20}
        `"
      />
    </svg>

    <div class="border-box-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { generateId } from '../../../utils/util'
import { useBorderBox } from '../../../hooks'
import { alpha } from '../../../utils/color'

export default {
  name: 'border12',
  props: {
    color: {
      type: Array,
      default: () => ([]),
    },
    backgroundColor: {
      type: String,
      default: 'transparent',
    },
  },
  setup(props) {
    const id = generateId()
    const status = useBorderBox(props, ['#2e6099', '#7ce7fd'])
    return {
      ...status,
      filterId: `border-box-12-filterId-${id}`,
      alpha,
    }
  },
}
</script>
