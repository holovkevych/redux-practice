import { COMMENT_CREATE } from "./types"
import { errorOn } from "./actions"

const badWords = ['bitch', 'pig']

export function spamFilter({ dispatch }) {
  return function(next) {
    return function(action) {
      if (action.type === COMMENT_CREATE) {
        const hasBadWords = badWords.some(res => action.data.text.includes(res))
        if (hasBadWords) {
          return dispatch(errorOn('respect people!!!'))
        }
      }
      return next(action)
    }
  }
}