import axios from 'axios'
var axiosHttp = {
  post:(url,data)=>{
    axios.post(url, data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  get:(url)=>{
    axios
      .get(url)
      .then(response => (this.info = response))
      .catch(function (error) { // 请求失败处理
        console.log(error);
      });
  }
}

export default axiosHttp
