import React, { Component } from 'react'
import { EditorState } from 'draft-js'
import Editor from 'draft-js-plugins-editor'
import {
  BlockquoteButton,
  BoldButton,
  CodeBlockButton,
  HeadlineOneButton,
  HeadlineThreeButton,
  HeadlineTwoButton,
  ItalicButton,
  UnderlineButton,
} from 'draft-js-buttons'
import createToolbarPlugin from 'draft-js-static-toolbar-plugin'
import createMarkdownPlugin from 'draft-js-markdown-plugin'
import toolbarTheme from 'draft-js-static-toolbar-plugin/lib/plugin.css'
import createColorPickerPlugin from './plugins/color-picker-plugin'
import createPrismPlugin from './plugins/prism-plugin'

const colorPickerPlugin = createColorPickerPlugin({ theme: toolbarTheme })
const toolbarPlugin = createToolbarPlugin({
  structure: [
    BoldButton,
    ItalicButton,
    UnderlineButton,
    colorPickerPlugin.ColorPickerButton,
    BlockquoteButton,
    CodeBlockButton,
    HeadlineOneButton,
    HeadlineTwoButton,
    HeadlineThreeButton,
  ],
})
const { Toolbar } = toolbarPlugin
const plugins = [
  toolbarPlugin,
  colorPickerPlugin,
  createPrismPlugin(),
  createMarkdownPlugin(),
]

const styles = {
  editorWrapper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    background: '#fbfbfb',
  },
  editor: {
    flex: 1,
    cursor: 'text',
    padding: '1em',
    overflow: 'scroll',
  },
}

class DolphinoEditor extends React.Component {
  constructor(props) {
    super(props)
    this.state = { editorState: EditorState.createEmpty() }
  }

  componentDidMount() {
    // for whatever reason, if this is not done async. Prism does not work
    requestAnimationFrame(() => this.focus())
  }

  onChange = editorState => this.setState({ editorState })

  focus = () => this.editor.focus()

  render() {
    return (
      <div style={styles.editorWrapper} onClick={this.focus}>
        <div style={styles.editor}>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            plugins={plugins}
            ref={element => (this.editor = element)}
          />
        </div>
        <Toolbar />
      </div>
    )
  }
}

export default DolphinoEditor
