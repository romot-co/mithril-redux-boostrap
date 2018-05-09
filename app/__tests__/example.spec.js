import reducer from '../src/modules/example'

describe('example test', () => {
  const initialState = {
    text: 'sample prop',
  }

  it('returns the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })
})
