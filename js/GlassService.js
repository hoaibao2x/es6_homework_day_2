export default class GlassService {
    getGlassList = () => {
        return axios({
            method: 'get',
            url: 'https://62f3954aa84d8c9681270b89.mockapi.io/dataGlasses'
        })
    }

    getGlassDetail = (id) => {
        return axios({
            method: 'get',
            url: `https://62f3954aa84d8c9681270b89.mockapi.io/dataGlasses/${id}`
        })
    }
}