import { baseUrl } from '../config';



export const cards = () => async dispatch => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({}),
  }

  async function test() {
  const response = await fetch(`${baseUrl}/deck/cards`, requestOptions)
  const newData = await response.json()
  return newData
  }
  test()
}
