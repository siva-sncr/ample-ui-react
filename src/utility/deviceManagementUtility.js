
export const tableOptions = {
    paginationSize: 4,
    firstPageText: 'First',
    prePageText: 'Back',
    nextPageText: 'Next',
    lastPageText: 'Last',
    nextPageTitle: 'First page',
    prePageTitle: 'Pre page',
    firstPageTitle: 'Next page',
    lastPageTitle: 'Last page',
    showTotal: true,
    paginationTotalRenderer: this.customTotal,
    sizePerPageList: [{
        text: '5', value: 5
    }, {
        text: '10', value: 10
    }, {
        text: 'All', value: null
    }]
}

export const payload = {
    commTypes: [],
    deviceTypes: [],
    fwUpgradeStatuses: [],
    networkGroupNames: [],
    profileStatuses: [],
    searchPattern: "",
    softwareVersions: [],
    states: [],
    statuses: []
}