import createPrismPlugin from '../'

it('should return an object', () => {
  const plugin = createPrismPlugin()
  expect(plugin).toBeInstanceOf(Object)
})
