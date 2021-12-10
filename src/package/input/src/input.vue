<template>
  <div class="t-input" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
    <div class="t-input-wrapper">
      <div class="t-input__input">
        <input
          ref="input"
          class="t-input__input-el"
          :value="modelValue"
          :type="type"
          :clearable="clearable"
          @input="handleInput"
          @focus="handleFocus"
          @blur="handleBlur"
        />
        <div v-show="!modelValue" class="t-input__placeholder">
          <span>{{ placeholder }}</span>
        </div>
      </div>

      <div v-if="type === 'textarea'" class="t-input__textarea"></div>

      <!-- clearable icon -->
      <div v-show="computedShowClearable" class="t-input__clearable">
        <div class="t-input__clearable-icon" @click="handleClear">
          <t-icon>
            <Close />
          </t-icon>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, PropType, computed } from 'vue'
import { CloseCircleOutline as Close } from '@vicons/ionicons5'
import { modelValue } from './input'

type TargetElement = HTMLInputElement | HTMLTextAreaElement
export default defineComponent({
  name: 'TInput',

  // emits: true,

  props: {
    modelValue: { type: String as PropType<modelValue> },
    type: { type: String, default: 'text' },
    placeholder: String,
    clearable: Boolean,
  },

  components: {
    Close,
  },

  setup(props, { emit }) {
    // const showText = computed(() => {})

    const input = ref<HTMLInputElement>()
    const focused = ref(false)
    const hovering = ref(false)

    const computedShowClearable = computed(() => {
      return props.modelValue && props.clearable && (focused.value || hovering.value)
    })

    const onMouseEnter = (event: MouseEvent) => {
      hovering.value = true
      emit('mouseenter', event)
    }
    const onMouseLeave = (event: MouseEvent) => {
      hovering.value = false
      emit('mouseleave', event)
    }

    const handleInput = (event: Event) => {
      const { value } = event.target as TargetElement
      emit('update:modelValue', value)
    }

    const handleFocus = (event: FocusEvent) => {
      focused.value = true
      emit('foucs', event)
    }

    const handleBlur = (event: FocusEvent) => {
      focused.value = false
      emit('blur', event)
    }

    const handleClear = () => {}

    return {
      input,
      handleInput,
      handleFocus,
      handleBlur,
      handleClear,
      onMouseEnter,
      onMouseLeave,
      computedShowClearable,
    }
  },
})
</script>
<style lang="less" scoped>
@import url('../style/index.less');
</style>
