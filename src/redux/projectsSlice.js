// import { Provider, useSelector, useDispatch } from "react-redux"
import { createSlice, configureStore } from "@reduxjs/toolkit"
import shuffle1 from '../../assets/images/shuffle-01.jpg'
import shuffle2 from '../../assets/images/shuffle-02.jpg'
import shuffle3 from '../../assets/images/shuffle-03.jpg'
import shuffle4 from '../../assets/images/shuffle-04.jpg'
import shuffle5 from '../../assets/images/shuffle-05.jpg'
import shuffle6 from '../../assets/images/shuffle-06.jpg'
import shuffle7 from '../../assets/images/shuffle-07.jpg'
import shuffle8 from '../../assets/images/shuffle-08.jpg'
const projects = [
    { imgLink: shuffle1, title: 'Awesome Image', type: 'Potography' },
]
export const projectsSlice = createSlice({
    name: 'projects',
    initialState: { projects: projects, filtered: [] },
    reducers: {
        setProjects(state, action) {
            state.projects = action.payload
            state.filtered = state.projects.filter((project) => project.mainTool === 'own')
        },
        addProject(state, action) {
            action = action.payload
            addOne(action)

        },
        filterByTool(state, action) {
            const filteredProjects = state.projects.filter((project) => project.mainTool === action.payload)

            state.filtered = filteredProjects
        }
    }
})

const projectsActions = projectsSlice.actions

export default projectsActions