const api = 'http://localhost:3001';

// Generate a unique token for storing data of Readable on the backend server
let token = localStorage.token;
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
  'Accept': 'application/json',
  'Authorization': token,
  'Content-Type': 'application/json'
}

export const getAllCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(response => response.json())
    .then(data => data.categories)

