export default {
  entityMap: {
    '0': {
      type: 'emoji',
      mutability: 'IMMUTABLE',
      data: {
        emojiUnicode: '📓',
      },
    },
    '1': {
      type: 'emoji',
      mutability: 'IMMUTABLE',
      data: {
        emojiUnicode: '❤️',
      },
    },
    '2': {
      type: 'emoji',
      mutability: 'IMMUTABLE',
      data: {
        emojiUnicode: '😂',
      },
    },
  },
  blocks: [
    {
      key: '9sj65',
      text: 'Write it down! 📓',
      type: 'header-one',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [
        {
          offset: 15,
          length: 1,
          key: 0,
        },
      ],
      data: {},
    },
    {
      key: 'rohu',
      text: 'Dolphino is an beautiful note writing app. You will ❤️ it!',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [
        {
          offset: 15,
          length: 14,
          style: 'UNDERLINE',
        },
      ],
      entityRanges: [
        {
          offset: 52,
          length: 2,
          key: 1,
        },
      ],
      data: {},
    },
    {
      key: 'dcj23',
      text: '',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
    {
      key: '7rb0v',
      text: 'Add emojis by typing :emoji-name: example :joy: 😂 ',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [
        {
          offset: 21,
          length: 12,
          style: 'CODE',
        },
        {
          offset: 42,
          length: 5,
          style: 'CODE',
        },
      ],
      entityRanges: [
        {
          offset: 48,
          length: 1,
          key: 2,
        },
      ],
      data: {},
    },
    {
      key: 'f7okh',
      text: 'You can organize your notes by using hashtags #tips #reminders',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
    {
      key: 'm154',
      text: '',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
    {
      key: 'aj3uf',
      text: 'Write code',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
    {
      key: 'cfn9q',
      text:
        "const peopleNames = ['John', 'Sara']\nconst people = peopleNames.map((name, i) => ({\n  id: i,\n  name, \n})\n",
      type: 'code-block',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {
        language: 'javascript',
      },
    },
    {
      key: '5eabb',
      text: 'Everything looks better with colors !!! ',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [
        {
          offset: 0,
          length: 10,
          style: 'color-#0074D9',
        },
        {
          offset: 11,
          length: 5,
          style: 'color-#228B22',
        },
        {
          offset: 17,
          length: 6,
          style: 'color-#9370DB',
        },
        {
          offset: 24,
          length: 4,
          style: 'color-#FF69B4',
        },
        {
          offset: 29,
          length: 6,
          style: 'color-#FF851B',
        },
        {
          offset: 36,
          length: 4,
          style: 'color-#B71427',
        },
      ],
      entityRanges: [],
      data: {},
    },
  ],
}
