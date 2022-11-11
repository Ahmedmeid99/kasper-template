// import { Provider, useSelector, useDispatch } from "react-redux"
import { createSlice, configureStore } from "@reduxjs/toolkit"

const projects = [
    { imgindex: '0', title: 'Awesome Image', type: 'app' },
    { imgindex: '1', title: 'Awesome Image', type: 'Potography' },
    { imgindex: '2', title: 'Awesome Image', type: 'app' },
    { imgindex: '3', title: 'Awesome Image', type: 'Potography' },
    { imgindex: '4', title: 'Awesome Image', type: 'web' },
    { imgindex: '5', title: 'Awesome Image', type: 'print' },
    { imgindex: '6', title: 'Awesome Image', type: 'web' },
    { imgindex: '7', title: 'Awesome Image', type: 'print' },
]
export const projectsSlice = createSlice({
    name: 'projects',
    initialState: { projects: projects, filtered: projects },
    reducers: {
        setAllProjects(state, action) {
            state.filtered = state.projects
        },
        filterBy(state, action) {
            const filteredProjects = state.projects.filter((project) => project.type === action.payload)
            state.filtered = filteredProjects
        }
    }
})

const projectsActions = projectsSlice.actions

export default projectsActions