import * as api from './api.js';


const endpoints = {

    catalog: '/data/posts?sortBy=_createdOn%20desc',
    create: '/data/posts',
    byId: '/data/posts/', 
    delId: '/data/posts/', 
    update: '/data/posts/'
};


export async function getAllInfo() {
    return api.getRequest(endpoints.catalog);
}
export async function getById(id) {
    return api.getRequest(endpoints.byId + id);
}

export async function createData(data) {
    return api.postRequest(endpoints.create, data);
}

export async function updateData(id, data) {
    return api.putRequest(endpoints.update + id, data);
}

export async function deleteById(id) {
    return api.delRequest(endpoints.delId + id);
}


export async function getMyPosts(userId) {
    return api.getRequest(`/data/posts?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

