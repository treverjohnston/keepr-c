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
                url: "https://placebear.com/400/400",
                author: "t-swizzle",
                keeps: 35,
                tags: ["cool", "neat-o", "cat"],
                views: 32
            },
            {
                url: "https://placebear.com/600/700",
                author: "t-swizzle",
                keeps: 35,
                tags: ["cool", "what", "cat"],
                views: 78
            },
            {
                url: "https://placebear.com/200/300",
                author: "t-swizzle",
                keeps: 35,
                tags: ["cool", "large", "cat"],
                views: 78
            },
            {
                url: "https://placebear.com/1600/1300",
                author: "t-swizzle",
                keeps: 35,
                tags: ["cool", "neat-o", "cat"],
                views: 78
            },
            {
                url: "https://placebear.com/800/700",
                author: "t-swizzle",
                keeps: 35,
                tags: ["cool", "neat-o", "cat"],
                views: 78
            },
            {
                url: "https://placebear.com/900/700",
                author: "t-swizzle",
                keeps: 35,
                tags: ["cool", "neat-o", "cat"],
                views: 78
            },
            {
                url: "https://placebear.com/500/300",
                author: "t-swizzle",
                keeps: 35,
                tags: ["cool", "neat-o", "cat"],
                views: 78
            },
            {
                url: "https://placebear.com/600/600",
                author: "t-swizzle",
                keeps: 35,
                tags: ["cool", "neat-o", "cat"],
                views: 78
            },
            {
                url: "https://placebear.com/800/800",
                author: "t-swizzle",
                keeps: 35,
                tags: ["cool", "neat-o", "cat"],
                views: 78
            },
            {
                url: "https://placebear.com/900/900",
                author: "t-swizzle",
                keeps: 35,
                tags: ["cool", "neat-o", "cat"],
                views: 78
            },
            {
                url: "https://placebear.com/200/300",
                author: "t-swizzle",
                keeps: 35,
                tags: ["cool", "neat-o", "cat"],
                views: 78
            },
            {
                url: "https://placebear.com/200/300",
                author: "t-swizzle",
                keeps: 35,
                tags: ["cool", "neat-o", "cat"],
                views: 78
            },
            {
                url: "https://placebear.com/200/300",
                author: "t-swizzle",
                keeps: 35,
                tags: ["cool", "neat-o", "cat"],
                views: 78
            },
            {
                url: "https://placebear.com/500/300",
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

        }
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
			console.log('info', obj)
			state.userInfo = obj
        },
        addToKeeps(state, obj){
            vue.set(state.dummyKeeps, obj.vault, obj)
        }
    },
    actions: {
        getAuth({ commit, dispatch }) {
			auth('account')
				.then(res => {
					if (!res.data.data) {
						return router.push('/')
					}
					commit('setInfo', res.data.data)
					router.push('home')
				})
				.catch(err => {
					commit('handleError', err)
					router.push('/')
				})
        },
        viewPlus({commit, dispatch}){
            console.log("add a plus view function")
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
getAuth()

export default store