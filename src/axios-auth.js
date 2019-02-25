import axios from 'axios'

const instance = axios.create({
	baseURL:"https://wd4168068279tyatty.wilddogio.com"
})

//instance.defaults.headers.common['SOMETHING'] = SOMETHING;
export default instance