import React, { Component } from 'react'
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js'
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
import createEmojiPlugin from 'draft-js-emoji-plugin'
import createHashtagPlugin from 'draft-js-hashtag-plugin'
import createColorPickerPlugin from './plugins/color-picker-plugin'
import createPrismPlugin from './plugins/prism-plugin'
import initalContent from './initalContent'
import 'draft-js-static-toolbar-plugin/lib/plugin.css'
import 'draft-js-emoji-plugin/lib/plugin.css'
import './editor.css'

const colorPickerPlugin = createColorPickerPlugin()
const emojiPlugin = createEmojiPlugin()
const { EmojiSuggestions } = emojiPlugin
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
  emojiPlugin,
  colorPickerPlugin,
  createPrismPlugin(),
  createMarkdownPlugin(),
  createHashtagPlugin({ theme: { hashtag: 'plugins-hashtag' } }),
]

const styles = {
  editorWrapper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    background: '#fbfbfb',
    color: '#222222',
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
    this.state = {
      editorState: EditorState.createWithContent(convertFromRaw(initalContent)),
    }
  }

  componentDidMount() {
    // for whatever reason, if this is not done async. Prism does not work
    requestAnimationFrame(() => this.focus())
  }

  save = () => convertToRaw(this.state.editorState.getCurrentContent())

  focus = () => this.editor.focus()

  onChange = editorState => this.setState({ editorState })

  blockStyleFn = contentBlock => {
    const type = contentBlock.getType()
    if (type === 'unstyled') {
      return 'block-unstyled'
    }
  }

  render() {
    window.save = this.save
    return (
      <div style={styles.editorWrapper} onClick={this.focus}>
        <div style={styles.editor}>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            plugins={plugins}
            blockStyleFn={this.blockStyleFn}
            ref={element => (this.editor = element)}
          />
        </div>
        <Toolbar />
        <EmojiSuggestions />
      </div>
    )
  }
}

export default DolphinoEditor
