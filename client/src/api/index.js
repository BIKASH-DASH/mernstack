import axios from 'axios'

const url ="http://localhost:5000/";

export default fetchPost = ()=>axios.get(url+'posts');