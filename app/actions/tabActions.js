export function addCaseOverviewTab() {
    console.log("addCaseOverviewTab called");
    return {type: "addCaseOverviewTab"};
}

export function selectTab(selectedTab) {
    return {type: "selectTab", selectedTab};
}