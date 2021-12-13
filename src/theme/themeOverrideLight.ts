import { CssRender } from 'css-render'
import { composite, changeColor } from 'seemly'

function createHoverColor(color: string, alpha: number = 0.15) {
  return composite(color, [255, 255, 255, alpha])
}

export const colors = {}

export const themeOverridesLight = {}
