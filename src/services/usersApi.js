import axios from 'axios'

// axios.defaults.baseURL =
//   'https://itrex-react-lab-files.s3.eu-central-1.amazonaws.com/react-test-api.json'

const fetchData = () => {
  return axios
    .get(
      `https://itrex-react-lab-files.s3.eu-central-1.amazonaws.com/react-test-api.json`
    )
    .then((response) => response.data)
}

export default { fetchData }
