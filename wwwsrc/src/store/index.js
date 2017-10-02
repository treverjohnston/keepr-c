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
    state: {
        dummy: [
            {
                url: "https://loremFlickr.com/400/400/dog",
                author: "t-swizzle",
                keeps: 35,
                tags: ["cool", "neat-o", "cat"],
                views: 32
            },
            {
                url: "https://loremFlickr.com/600/700/dog",
                author: "t-swizzle",
                keeps: 35,
                tags: ["cool", "what", "cat"],
                views: 78
            },
            {
                url: "https://loremFlickr.com/200/300/dog",
                author: "t-swizzle",
                keeps: 35,
                tags: ["cool", "large", "cat"],
                views: 78
            },
            {
                url: "https://loremFlickr.com/1600/1300/dog",
                author: "t-swizzle",
                keeps: 35,
                tags: ["cool", "neat-o", "cat"],
                views: 78
            },
            {
                url: "https://loremFlickr.com/800/700/dog",
                author: "t-swizzle",
                keeps: 35,
                tags: ["cool", "neat-o", "cat"],
                views: 78
            },
            {
                url: "https://loremFlickr.com/900/700/dog",
                author: "t-swizzle",
                keeps: 35,
                tags: ["cool", "neat-o", "cat"],
                views: 78
            },
            {
                url: "https://loremFlickr.com/500/300/dog",
                author: "t-swizzle",
                keeps: 35,
                tags: ["cool", "neat-o", "cat"],
                views: 78
            },
            {
                url: "https://loremFlickr.com/600/600/dog",
                author: "t-swizzle",
                keeps: 35,
                tags: ["cool", "neat-o", "cat"],
                views: 78
            },
            {
                url: "https://loremFlickr.com/800/800/dog",
                author: "t-swizzle",
                keeps: 35,
                tags: ["cool", "neat-o", "cat"],
                views: 78
            },
            {
                url: "https://loremFlickr.com/900/900/dog",
                author: "t-swizzle",
                keeps: 35,
                tags: ["cool", "neat-o", "cat"],
                views: 78
            },
            {
                url: "https://loremFlickr.com/200/300/dog",
                author: "t-swizzle",
                keeps: 35,
                tags: ["cool", "neat-o", "cat"],
                views: 78
            },
            {
                url: "https://loremFlickr.com/200/300/dog",
                author: "t-swizzle",
                keeps: 35,
                tags: ["cool", "neat-o", "cat"],
                views: 78
            },
            {
                url: "https://loremFlickr.com/200/300/dog",
                author: "t-swizzle",
                keeps: 35,
                tags: ["cool", "neat-o", "cat"],
                views: 78
            },
            {
                url: "https://loremFlickr.com/500/300/dog",
                author: "t-swizzle",
                keeps: 35,
                tags: ["cool", "neat-o", "cat"],
                views: 78
            }
        ],
        current: {},
        userInfo: {},
        dummyVaults: {

        },
        dummyKeeps: {

        },
        loggedIn: false
    },
    mutations: {
        setZoom(state, item){
            state.current = item;
            // console.log(state.current)
        },
        
		handleError(state, err) {
			state.error = err
        },
        
		setInfo(state, obj) {
			console.log('infocommit', obj)
			state.userInfo = obj
        },
        addToKeeps(state, obj){
            vue.set(state.dummyKeeps, obj.vault, obj)
        },
        setLogged(state){
            state.loggedIn = !state.loggedIn
        }
    },
    actions: {
        addVault({commit, dispatch}, obj){
            api.post('Vaults', obj)
            .then(res=>{
                dispatch(getAuth)
                console.log(res)
            })
        },
        getAuth({ commit, dispatch }) {
			api('account')
				.then(res => {
                    console.log("info", res)
					if (!res.data) {
						return router.push('/')
					}
                    commit('setInfo', res.data)
                    commit('setLogged')
				})
				.catch(err => {
					commit('handleError', err)
					router.push('/')
				})
        },
        viewPlus({commit, dispatch}){
            console.log("add a plus view function")
        },
        createAccount({commit, dispatch}, obj){
            api.post('account', obj)
            .then(res => {
                swal({
                    title: 'Account Created',
                    timer: 2000
                }).then(
                    function () { },
                    // handling the promise rejection
                    function (dismiss) {
                        if (dismiss === 'timer') {
                            console.log('I was closed by the timer')
                        }
                    })
                console.log(res)
            })
        },
        login({commit, dispatch}, obj){
            api.post('account/login', obj)
            .then(res => {
                swal({
                    title: 'Logged in as',
                    text: res.data.username,
                    timer: 2000
                }).then(
                    function () { },
                    // handling the promise rejection
                    function (dismiss) {
                        if (dismiss === 'timer') {
                            console.log('I was closed by the timer')
                        }
                    })
                    commit('setLogged')                    
                console.log(res)
            })
        },
        logout({commit, dispatch}){
            api.delete('account/logout')
            .then(res=>{
                console.log(res)
                commit('setLogged')                
            })            
        }
    }
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
// getAuth()

export default store