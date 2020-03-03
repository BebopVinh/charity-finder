const initialState = {
  isDarkMode: false,
}

const TOGGLE_DARKMODE = "TOGGLE_DARKMODE"

export const toggleDarkMode = isDarkMode => ({
  type: TOGGLE_DARKMODE,
  isDarkMode,
})

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DARKMODE:
      console.log(action)
      let newState = { ...state, isDarkMode: action.isDarkMode }
      console.log(newState)
      return newState
    default:
      return state
  }
}
