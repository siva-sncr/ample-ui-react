
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
    tableColumns: [
        {   
            name: 'region',
            hidden: true
        }, {
            name: 'substation',
            hidden: true
        }, {
            name: 'feeder',
            hidden: true
        }, {
            name: 'lateral',
            hidden: true
        }, {
            name: 'site',
            hidden: true
        }, {
            name: 'serialNumber',
            hidden: false
        }, {
            name: 'phase',
            hidden: false
        }, {
            name: 'status',
            hidden: false
        }, {
            name: 'deviceType',
            hidden: false
        }, {
            name: 'deviceState',
            hidden: false
        }, {
            name: 'softwareVersion',
            hidden: false
        }, {
            name: 'communicationType',
            hidden: false
        }, {
            name: 'profileName',
            hidden: true
        }, {
            name: 'configStatus',
            hidden: true
        }, {
            name: 'otapStatus',
            hidden: true
        }, {
            name: 'siteLocation',
            hidden: true
        }, {
            name: 'dnp3PointMapVersion',
            hidden: true
        }, {
            name: 'dnpAddress',
            hidden: true
        }, {
            name: 'ipAddress',
            hidden: true
        }, {
            name: 'description',
            hidden: true
        }, {
            name: 'fieldNotes',
            hidden: true
        }, {
            name: 'commServerName',
            hidden: true
        }, {
            name: 'networkGroupName',
            hidden: true
        }, {
            name: 'gpsCoordinates',
            hidden: true
        }, {
            name: 'lastSuccess',
            hidden: true
        }
    ],
    paginationTotalRenderer: this.customTotal,
    sizePerPageList: [{
        text: '5', value: 5
    }, {
        text: '10', value: 10
    }, {
        text: '100', value: 100
    }, {
        text: '250', value: 250
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

export const modelOptions = {
    title: '',
    show:false,
    onHide:false,
    size:'large',
    content:'' 
}