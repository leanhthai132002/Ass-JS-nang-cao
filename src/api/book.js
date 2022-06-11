import api from './axios';

const prefix = '/books';

export const getBooks = () => api.get(prefix);

export const getBook = (id) => api.get(`${prefix}/${id}`);

export const deleteBook = (id) => api.delete(`${prefix}/${id}`);

export const createBook = (data) => api.post(prefix, data);

export const updateBook = (id, data) => api.put(`${prefix}/${id}`, data);