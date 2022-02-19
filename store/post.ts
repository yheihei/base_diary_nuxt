/* eslint-disable camelcase */
import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { Post, ApiApiFactory } from '~/types/client-axios/api'
import { Configuration } from '~/types/client-axios/configuration'

type State = {
  posts: Post[]
}

type Mutations = {
  SET_POSTS: State['posts']
}

type Getters = {
  posts: State['posts']
}

type Actions = {
  getPosts: {
    search: string
  }
}
export { State, Mutations, Getters, Actions }

export const state = (): State => ({
  posts: [],
})

export type LocalState = ReturnType<typeof state>

export const mutations: MutationTree<LocalState> = {
  SET_POSTS(state, p: Mutations['SET_POSTS']) {
    state.posts = p
  },
}

export const getters: GetterTree<LocalState, {}> = {
  posts: (state): Getters['posts'] => state.posts,
}

import { ApiApi } from '~/types/client-axios/api'
declare module 'vuex/types' {
  interface Store<S> {
    readonly $postApi: ApiApi;
  }
}

export const actions: ActionTree<LocalState, {}> = {
  async getPosts({ commit }, { search }: Actions['getPosts']) {
    // TODO APIFactoryはプラグインでinjectしたい
    const api = ApiApiFactory(new Configuration(), 'http://localhost:8000', this.$axios);
    const { data } = await api.listPosts(search)
    console.log('getPosts!!')
    commit('SET_POSTS', data)
  },
}
