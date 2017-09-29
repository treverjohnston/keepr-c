import vue from 'vue'
import axios from 'axios'
import vuex from 'vuex'
import router from '../router'

let api = axios.create({
    baseURL: 'http://localhost:5000/api/',
    timeout: 2000,
    withCredentials: true
})

vue.use(vuex)

var store = new vuex.Store({
    state: {},
    mutations: {},
    actions: {}
})

function CreateAccountExample() {
    api.post('account', { email: "j@j.com", password: 'Testing123!' }).then(GetDataExample)
}

function loginAndGetDataExample() {
    api.post('account/login', { email: "j@j.com", password: 'Testing123!' }).then(GetDataExample)
}

function logout() {
    api.delete('account/logout')
}

function GetDataExample() {
    api('values').then(d => {
        console.log("Values Controller Data:", d)
    }).catch(err => {
        console.error(err)
    })
}
function getAuth() {
    api('account').then(res => {
        console.log("Auth Response", res)
    })
}

// loginAndGetDataExample()
getAuth()

