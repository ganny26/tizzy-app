import { fetchDetails } from '../src/Service/APIClient';
import {TOP_STORIES} from '../src/Constant';

describe('run apiclient', () => {
  beforeEach(() => {
    console.log('beforeEach called');
  });


  it('return null when no url is present', async () => {
    expect.assertions(1);
    const data = await fetchDetails();
    expect(data).toBeNull()
  });

  it('return array when url is present', async () => {
    expect.assertions(2);
    const data = await fetchDetails(TOP_STORIES);
    expect(data).not.toBeNull()
    expect(Array.isArray(data)).toBe(true)
  });

  test("returns undefined by default", () => {
    const mock = jest.fn();
    let result = mock("foo");
    expect(result).toBeUndefined();
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith("foo");
  });

})