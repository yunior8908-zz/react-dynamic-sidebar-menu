import React from 'react';
import ReactDOM from 'react-dom';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import ReceiptIcon from '@material-ui/icons/Receipt';
import NotificationsIcon from '@material-ui/icons/Notifications';
import './index.css';
import SideBar from "./components/sideBar";

const items = [{
    name: 'home', label: 'Home', Icon: HomeIcon,
},{
    name: 'billing', label: 'Billing', Icon: ReceiptIcon,
    items:[{
        name: 'statements', label: 'Statements'
    },{
        name: 'reports', label: 'Reports'
    }]
},"divider",{
    name: 'settings', label: 'Settings',Icon: SettingsIcon,
    items: [{
        name: 'profile', label: 'Profile'
    },{
        name: 'insurance', label: 'Insurance'
    },"divider",{
        name: 'notifications', label: 'Notifications', Icon: NotificationsIcon,
        items: [{
            name: 'email', label: 'Email',
        },{
            name: 'desktop', label: 'Desktop',Icon: DesktopWindowsIcon,
            items: [{
                name: 'schedule', label: 'Schedule'
            },{
                name: 'frecuency', label: 'Frecuency'
            }]
        },{
            name: 'sms', label: 'SMS',
        }]
    }]
}];

const App = () => {
    return <div className="App">
        <SideBar items={items}/>
    </div>
};

ReactDOM.render(<App/>, document.getElementById('app'));