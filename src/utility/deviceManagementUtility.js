
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
    visbleColumns: [
        {   
            name: 'region',
            hidden: false
        }, {
            name: 'substation',
            hidden: false
        }, {
            name: 'feeder',
            hidden: false
        }, {
            name: 'lateral',
            hidden: false
        }, {
            name: 'site',
            hidden: false
        }, {
            name: 'serialNumber',
            hidden: true
        }, {
            name: 'phase',
            hidden: true
        }, {
            name: 'status',
            hidden: true
        }, {
            name: 'deviceType',
            hidden: true
        }, {
            name: 'deviceState',
            hidden: true
        }, {
            name: 'softwareVersion',
            hidden: true
        }, {
            name: 'communicationType',
            hidden: true
        }, {
            name: 'profileName',
            hidden: false
        }, {
            name: 'configStatus',
            hidden: false
        }, {
            name: 'otapStatus',
            hidden: false
        }, {
            name: 'siteLocation',
            hidden: false
        }, {
            name: 'dnp3PointMapVersion',
            hidden: false
        }, {
            name: 'dnpAddress',
            hidden: false
        }, {
            name: 'ipAddress',
            hidden: false
        }, {
            name: 'description',
            hidden: false
        }, {
            name: 'fieldNotes',
            hidden: false
        }, {
            name: 'commServerName',
            hidden: false
        }, {
            name: 'networkGroupName',
            hidden: false
        }, {
            name: 'gpsCoordinates',
            hidden: false
        }, {
            name: 'lastSuccess',
            hidden: false
        }
    ],
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