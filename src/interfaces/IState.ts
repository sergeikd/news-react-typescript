import { IArticle } from './IArticle'

export interface IState {
    themes: string[],
    content: IArticle[],
    activeTab: number,
}