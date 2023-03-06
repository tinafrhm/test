import {GetterTree, MutationTree} from 'vuex'

export const state = () => ({
	userData: {},
})

export type UserState = ReturnType<typeof state>

export const getters: GetterTree<UserState, UserState> = {
	getUserData: (state) => state.userData,
}

export const mutations: MutationTree<UserState> = {
	saveUserInfo(state, payload) {
		state.userData = payload
	}
}
