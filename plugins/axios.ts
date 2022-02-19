// import Vue from 'vue';
import { Context, Plugin } from '@nuxt/types';
import { AxiosError, AxiosRequestConfig } from 'axios';
// import { StorageKey } from '~/constants/storage.constant';
// import { DefaultApi } from '~/openapi';
// import { BASE_PATH } from '~/openapi/base';

export default ({ $axios }: Context) => {
  $axios.onRequest((config: AxiosRequestConfig) => {
    // TODO Client Credentials Flow 然るべきところから取得する
    const accessToken = 'b928af02520753aa6c19ec89791e78af9e6f4b62'
    if (accessToken) {
      config.headers.Authorization = `Token ${accessToken}`;
    }
    console.log('プラグイン')
    return config
  })
}
