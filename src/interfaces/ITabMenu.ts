export interface ITabMenu {
    themes: string[],
    activeTab: number,
    onTabClick: (id: number) => void,
}