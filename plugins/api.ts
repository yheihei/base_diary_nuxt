// TODO: APIFactoryをここで定義してinjectしたい
import * as Axios from "~/types/client-axios";

export default function(
  { $axios, $config }: { $axios: any; $config: any },
  inject: any
): void {
  //BearerTokenやAPIのBasePathを設定する
  console.log('プラグイン')
  const config = (): Axios.Configuration => {
    // const token = localStorage.getItem("auth._token.local");
    const basePath = 'http://localhost:8000';
    // const accessToken = token && typeof token === "string" ? token : "";
    const accessToken = 'b928af02520753aa6c19ec89791e78af9e6f4b62';

    return new Axios.Configuration({
      basePath,
      accessToken
    });
  };

  // const api = {
  //   postApi: new Axios.ApiApi(config()),
  //   // こんな感じでClassごとに書き連ねていく
  // };
  const postApi = new Axios.ApiApi(config())

  inject("postApi", postApi);

  // $axios.onRequest(config => {
  //   console.log('プラグイン')
  //   if (config.token) {
  //     config.headers.Authorization = `Bearer ${config.token}`
  //     delete config.token
  //   }
  //   return config
  // })
}
