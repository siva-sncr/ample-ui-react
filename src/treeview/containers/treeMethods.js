import DeviceManagement from '../../mainContent/deviceManagement/containers/deviceListTableContainer';

export const findCurrentRouteActions = (currentRoute) => {
    if(currentRoute === '/devicemanagement') {
        DeviceManagement() 
    }   
}