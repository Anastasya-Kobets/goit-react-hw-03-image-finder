import axios from 'axios';
export const fetchApi = async(name,page) =>{
    const apiSearch = `https://pixabay.com/api/?q=${name}&page=${page}&key=32303276-0307b5802ba9350c98b8452c1&image_type=photo&orientation=horizontal&per_page=12`;
    const response = await axios.get(apiSearch);
    return response.data;
}
