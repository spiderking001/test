import axios from '@/axios.js'

export function getUser(){
    return axios.get('/user')
}

export function addUser(data){
    return axios.post('/user',data)
}

export function deleteUser(id){
    return axios.post(`/user/${id}`)
}