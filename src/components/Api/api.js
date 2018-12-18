import { baseUrl, apiKey} from '../../app-data/app-data'

export const getNews = (searchWord) => {
    const url = `${baseUrl}everything?q=${searchWord}&apiKey=${apiKey}`;
    return fetch(url)
        .then(response => response.json());
};