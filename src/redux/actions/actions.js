import { TAKE_DATA } from '../types.js'

export function takeData(url) {
    let controller = new AbortController()
    let signal = controller.signal
    return async dispatch => {
        try {
            const result = await fetch(`${url}`, { signal: signal })
            const json = await result.json()
            dispatch({ type: TAKE_DATA, payload: json })
        } catch (e) {
            console.log('Erorr', e)
        }
    }
}

