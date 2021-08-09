export const StatusFilters = {
    All: 'all',
    Active: 'active',
    Completed: 'completed',
  }
const initialState = {
      status: 'All', //We can have an enum here though, similarly for colors as well
      colors: []
}
  
export default function reducer(state = initialState, action) {

    switch (action.type) {
        case 'filters/statusFilterChanged':
            return {
                ...state,
                status : action.payload
            }
        case 'filters/colorFilterChanged':
            let index = state.colors.indexOf(action.payload.color)
            if (action.payload.changeType === "added" && index === -1) {
                return {
                    ...state, 
                    colors: [...state.colors].append(action.payload.color)
                }
            } 
            if (action.payload.changeType === "removed" && index !== -1) {
                return {
                    ...state,
                    colors: [...state.colors].splice(index, 1)
                }
            }
            return state
        default:
            return state
    }

}