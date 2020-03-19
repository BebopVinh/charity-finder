const initialState = {
  isDarkMode: false,
  organizations: [],
}

const TOGGLE_DARKMODE = "TOGGLE_DARKMODE"
const GET_ORGANIZATIONS = "GET_ORGANIZATION"

export const toggleDarkMode = isDarkMode => ({
  type: TOGGLE_DARKMODE,
  isDarkMode,
})

export const getOrganizations = () => ({
  type: GET_ORGANIZATIONS,
})

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DARKMODE:
      console.log(action)
      let newState = { ...state, isDarkMode: action.isDarkMode }
      console.log(newState)
      return newState
    case GET_ORGANIZATIONS:
      debugger
      return
    default:
      return state
  }
}
