import 'isomorphic-fetch'

export const URL = 'https://www.reddit.com/r/programmerhumor/hot/.json?raw_json=1'

export const fetchProgrammerHumor = async () => {

    const response = await fetch(URL)
    const json = await response.json()

    return json
}