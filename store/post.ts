/* eslint-disable camelcase */
import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { Post } from '~/types/client-axios/api'
import { Api } from '~/plugins/api'

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

declare module 'vuex/types' {
  interface Store<S> {
    readonly $api: Api;
  }
}

export const actions: ActionTree<LocalState, {}> = {
  async getPosts({ commit }, { search }: Actions['getPosts']) {
    const { data } = await this.$api.post.listPosts(search)
    console.log('getPosts!!')
    commit('SET_POSTS', data)
  },
}
