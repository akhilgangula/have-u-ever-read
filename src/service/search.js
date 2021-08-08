import axios from 'axios';
import httpStatus from 'http-status';
import { constructQueryParams } from "../utils/utilityFunctions";
const Search = async (params) => {
    const queryParams = constructQueryParams(params);
    const { data, status } = await axios.get(`http://localhost:3010/api/search?${queryParams}`);
    if (status === httpStatus.OK) {
        return { data };
    }
    return { error: data };
}

export default Search;