import v4 from 'uuid/v4';
let danishFlagTab = {
    tabId: v4(),
    viewType: 'Start',
    baseUrl: '/',
    title: 'Dansk flag',
    closable: false
};
export default function reducer(state = {
                                    tabs: [danishFlagTab],
                                    selectedTab: danishFlagTab
                                }, action) {
    switch (action.type) {
        case "addCaseOverviewTab": {
            let newTab = {
                tabId: v4(),
                viewType: 'CaseOverview',
                baseUrl: '/caseworker/caseoverview',
                title: 'Sagsoversigt',
                closable: true
            };
            return {...state, tabs: [...state.tabs, newTab], selectedTab: newTab};
        }
        case "selectTab": {
            return {...state, selectedTab: action.selectedTab};
        }
    }
    return state;
}