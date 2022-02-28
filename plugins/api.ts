// TODO: APIFactoryをここで定義してinjectしたい
import * as Axios from "~/types/client-axios";
import { AxiosInstance, AxiosRequestConfig } from 'axios';

type Api = {
  post: Axios.ApiApi
}

export { Api }

export default function(
  { $axios, $config }: { $axios: AxiosInstance; $config: any },
  inject: any
): void {
  console.log('apiプラグイン')
  const api = {
    // 日記ドメイン
    post: new Axios.ApiApi(undefined, $config.apiBaseUrl, $axios)
  } as Api
  inject("api", api);

  /**
   * axiosリクエスト前の前処理
   */
  $axios.interceptors.request.use((config: AxiosRequestConfig) => {
    console.log('axiosリクエスト前の前処理')
    const accessToken = 'b928af02520753aa6c19ec89791e78af9e6f4b62'
    // TODO トークン取得済みであればトークン付与みたいなのをする
    if (accessToken) {
      config.headers.Authorization = `Token ${accessToken}`;
      // config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config
  })

  /**
   * axiosリクエスト後の後処理
   */
  $axios.interceptors.response.use(
    (response) => {
      console.log('axiosリクエスト後の後処理')
      return response
    },
    (error) => {
      console.log('axiosリクエスト後の後処理 エラー')
      console.log(error.response.status)
      // TODO 401であればログインページにリダイレクトみたいな処理
      return Promise.reject(error)
    }
  )
}
