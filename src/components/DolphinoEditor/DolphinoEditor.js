import React from 'react'
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
import createColorPickerPlugin from './plugins/color-picker-plugin'
import toolbarTheme from 'draft-js-static-toolbar-plugin/lib/plugin.css'

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
const plugins = [toolbarPlugin, colorPickerPlugin]

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
    this.editor.focus()
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
