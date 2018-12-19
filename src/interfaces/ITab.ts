export interface ITab {
    tabItem: string,
    activeTab: number,
    index: number,
    onTabClick: (id: number) => void,
}