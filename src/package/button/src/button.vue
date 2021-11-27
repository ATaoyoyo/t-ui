<template>
  <button
    class="t-button"
    :class="[
      type ? type : 'default',
      size,
      {
        'is-circle': circle,
        'is-disabled': disabled,
        'is-round': round,
        'is-plain': plain,
      },
    ]"
  >
    <slot></slot>
  </button>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'

import { buttonType, buttonSize } from './button'

import '../style'

export default defineComponent({
  name: 'TButton',

  props: {
    type: String as PropType<buttonType>,

    size: String as PropType<buttonSize>,

    circle: Boolean,

    disabled: Boolean,

    round: Boolean,

    plain: Boolean,
  },
})
</script>
<style lang="less" scoped>
@import url('@/style/theme.less');
.t-button {
  transition: all 0.5s;
  &.default {
    color: @textBlack;
    background-color: @default;
    border-color: @textBorder;

    &:hover,
    &:focus {
      color: @primary;
      background-color: @hoverDefault;
      border-color: @primary;
    }

    &.is-disabled {
      color: @textBorder;
      background-color: @disabledDefault;
      border-color: @textBorder;
    }

    &.is-plain {
      &:hover {
        color: @primary;
        background-color: @default;
        border-color: @primary;
      }
    }
  }

  &.primary {
    color: @textWhite;
    background-color: @primary;
    border-color: @primary;

    &:hover,
    &:focus {
      background-color: @hoverPrimary;
    }

    &.is-disabled {
      background-color: @disabledPrimary;
    }

    &.is-plain {
      color: @primary;
      background-color: @plainPrimary;
      border: 1px solid @primary;
      &:hover {
        color: @default;
        background-color: @primary;
      }
    }
  }

  &.success {
    color: @textWhite;
    background-color: @success;
    border-color: @success;

    &:hover,
    &:focus {
      background-color: @hoverSuccess;
    }

    &.is-disabled {
      background-color: @disabledSuccess;
    }

    &.is-plain {
      color: @success;
      background-color: @plainSuccess;
      border: 1px solid @success;

      &:hover {
        color: @default;
        background-color: @success;
      }
    }
  }

  &.warning {
    color: @textWhite;
    background-color: @warning;
    border-color: @warning;

    &:hover,
    &:focus {
      background-color: @hoverWarning;
    }

    &.is-disabled {
      background-color: @disabledWarning;
    }

    &.is-plain {
      color: @warning;
      background-color: @plainWarning;
      border: 1px solid @warning;

      &:hover {
        color: @default;
        background-color: @warning;
      }
    }
  }

  &.danger {
    color: @textWhite;
    background-color: @error;
    border-color: @error;

    &:hover,
    &:focus {
      background-color: @hoverError;
    }

    &.is-disabled {
      background-color: @disabledError;
    }

    &.is-plain {
      color: @error;
      background-color: @plainError;
      border: 1px solid @error;

      &:hover {
        color: @default;
        background-color: @error;
      }
    }
  }
  &.info {
    color: @textWhite;
    background-color: @info;
    border-color: @info;

    &:hover,
    &:focus {
      background-color: @hoverInfo;
    }

    &.is-disabled {
      background-color: @disabledInfo;
    }

    &.is-plain {
      color: @info;
      background-color: @plainInfo;
      border: 1px solid @info;

      &:hover {
        color: @default;
        background-color: @info;
      }
    }
  }

  &.text {
    color: @primary;
    background-color: #fff;
    border: none;

    &:hover,
    &:focus {
      color: @hoverPrimary;
      background-color: #fff;
    }

    &.is-disabled {
      color: @disabledPrimary;
    }
  }

  &.is-circle {
    padding: 0;
    width: 40px;
    height: 40px;
    border-radius: 50%;

    &.middle {
      width: 36px;
      height: 36px;
    }

    &.small {
      width: 32px;
      height: 32px;
    }

    &.mini {
      width: 28px;
      height: 28px;
    }
  }

  &.is-disabled {
    cursor: not-allowed;
  }

  &.is-round {
    border-radius: 20px;
  }

  &.middle {
    height: 36px;
  }

  &.small {
    height: 32px;
  }

  &.mini {
    height: 28px;
  }
}
</style>
