import 'isomorphic-fetch'
async function fetchDetails(url) {
  try {
    let response = await fetch(url)
    let result = await response.json()
    return result
  } catch (e) {
    return null
  }
}

module.exports = {
  fetchDetails
}
