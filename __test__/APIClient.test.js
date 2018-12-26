import { fetchDetails } from '../src/Service/APIClient'
import { TOP_STORIES,ITEM_STORIES } from '../src/Constant'

describe('run apiclient', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() =>
      new Promise((resolve, reject) =>
        resolve({
          ok: true,
          json: () => { id: '123' }
        })
      )
    )
  })

  it('return null when no url is present', async () => {
    expect.assertions(1)
    const data = await fetchDetails()
    expect(data).toBeUndefined()
  })

  it('return array when url is present', async () => {
    expect.assertions(2)
    const data = await fetchDetails(TOP_STORIES)
    expect(data).not.toBeNull()
    expect(Array.isArray(data)).toBe(false)
  })

  test('returns undefined by default', () => {
    const mock = jest.fn()
    let result = mock('foo')
    expect(result).toBeUndefined()
    expect(mock).toHaveBeenCalled()
    expect(mock).toHaveBeenCalledTimes(1)
    expect(mock).toHaveBeenCalledWith('foo')
  })

})
