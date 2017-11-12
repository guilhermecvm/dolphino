import React from 'react'
import { RichUtils, Modifier, EditorState } from 'draft-js'
import ColorPickerButton from './ColorPickerButton'
import { colors as DEFAULT_COLORS } from './colors'

const STYLE_NAME = 'color-'

const DEFAULT_THEME = {}

const getStyleName = color => `${STYLE_NAME}${color}`

export default (config = {}) => {
  const { theme = DEFAULT_THEME, colors = DEFAULT_COLORS } = config

  const store = {
    getEditorState: undefined,
    setEditorState: undefined,
  }

  const styleReducer = (style = {}, color) => ({
    ...style,
    [getStyleName(color)]: { color },
  })
  const customStyleMap = colors.reduce(styleReducer, null)

  const handleSelect = color => {
    const editorState = store.getEditorState()
    const selection = editorState.getSelection()

    // remove previous color styles from selection in content
    const nextContentState = Object.keys(
      customStyleMap
    ).reduce((contentState, style) => {
      return Modifier.removeInlineStyle(contentState, selection, style)
    }, editorState.getCurrentContent())

    // FIXME Try not to add to the undo stack
    let nextEditorState = EditorState.push(
      editorState,
      nextContentState,
      'change-inline-style'
    )

    const currentStyle = editorState.getCurrentInlineStyle()

    // Unset style override for current color.
    if (selection.isCollapsed()) {
      nextEditorState = currentStyle.reduce((state, color) => {
        return RichUtils.toggleInlineStyle(state, color)
      }, nextEditorState)
    }

    // If the color is being toggled on, apply it.
    const colorStyleName = getStyleName(color)
    if (!currentStyle.has(colorStyleName)) {
      // && color !== null) {
      nextEditorState = RichUtils.toggleInlineStyle(
        nextEditorState,
        colorStyleName
      )
    }

    store.setEditorState(nextEditorState)
  }

  return {
    initialize: ({ getEditorState, setEditorState }) => {
      store.getEditorState = getEditorState
      store.setEditorState = setEditorState
    },

    customStyleMap,

    ColorPickerButton: props => {
      const getStyleColor = () => {
        const stylesSet = props
          .getEditorState()
          .getCurrentInlineStyle()
          .keys()
        const style = [...stylesSet].find(style => style.startsWith(STYLE_NAME))
        return style && style.substr(STYLE_NAME.length)
      }
      const color = getStyleColor()

      return (
        <ColorPickerButton
          {...props}
          color={color}
          ownTheme={theme}
          onSelect={handleSelect}
        />
      )
    },
  }
}
