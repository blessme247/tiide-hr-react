import axios from 'axios'

export default axios.create(
    {
        baseURL: "https://tiider-hr-tiidelab.herokuapp.com/"
    }
);