import { TOGGLE_SIDEBAR } from './patientInfo';

export default (state, action) => {
    switch (action.type) {
        case TOGGLE_SIDEBAR:
            return {
                ...state,
                isSidebarCollapsed: action.payload
            }
        default:
            return state;
    }
}
