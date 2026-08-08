import axios from 'axios';


// -----------------------------------
// Axios Instance
// -----------------------------------

const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL ||
    'http://localhost:5000/api',

  headers: {
    'Content-Type': 'application/json'
  }
});


// -----------------------------------
// PROJECTS
// -----------------------------------

export const getProjects = async () => {
  const response = await api.get('/projects');

  return response.data;
};


// -----------------------------------
// SINGLE PROJECT
// -----------------------------------

export const getProjectById = async (id) => {
  const response = await api.get(`/projects/${id}`);

  return response.data;
};


// -----------------------------------
// SKILLS
// -----------------------------------

export const getSkills = async () => {
  const response = await api.get('/skills');

  return response.data;
};


// -----------------------------------
// EXPERIENCE
// -----------------------------------

export const getExperience = async () => {
  const response = await api.get('/experience');

  return response.data;
};


// -----------------------------------
// CONTACT
// -----------------------------------

export const sendContactMessage = async (formData) => {
  const response = await api.post(
    '/contact',
    formData
  );

  return response.data;
};


export default api;