
/* eslint-disable */
const actions = {
  addMovie ({ commit }, {
    locale,
    route
  }) {
    try {
      commit ('SET_MOVIES', 'Hey!')
    } catch (error) {
      console.log('CartStore:addMovie Error', error)
    }
  }
}

export default actions
