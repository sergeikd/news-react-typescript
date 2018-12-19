import { baseUrl, apiKey} from '../../app-data/app-data'
import { IArticles } from '../../interfaces/IArticles'

export const getNews = (searchWord: string): Promise<IArticles> => {
    const url: string = `${baseUrl}everything?q=${searchWord}&apiKey=${apiKey}`;
    return fetch(url)
        .then(response => response.json());
};