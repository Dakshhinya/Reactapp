import axios from 'axios'


const API = "http://localhost:7777"

const getProjects=() => axios.get(`${API}/Projects/all`)
const getProjectbyID=(id) => axios.get(`${API}/Projects/all/${id}`)
const addProject=(projectdata) => axios.post(`${API}/Projects/add`, projectdata)
const editProject=(id, projectdata) => axios.put(`${API}/Projects/edit/${id}`, projectdata)
const deleteProject=(id) => axios.delete(`${API}/Projects/delete/id/${id}`)
export {getProjects,getProjectbyID,addProject,editProject, deleteProject}