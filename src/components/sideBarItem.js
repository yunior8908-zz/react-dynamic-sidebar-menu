import React, {useState} from 'react';
import {Collapse, Divider, List, ListItem} from '@material-ui/core';
import ExpandedLessIcon from "@material-ui/icons/ExpandLess";
import ExpandedMoreIcon from "@material-ui/icons/ExpandMore";

const SideBarItem = props => {
    const {item, depthStep = 10, depth = 0, expanded, ...rest} = props;
    const [collapsed, setCollapsed] = useState(true);
    const {label, Icon, items} = item;

    const toggleCollapse = () => {
        setCollapsed(prev => !prev);
    };

    const onClick = (e) => {
        if (Array.isArray(items)) {
            toggleCollapse();
        }
    };

    let expandIcon;

    if (Array.isArray(items) && items.length) {
        expandIcon = !collapsed ? (
            <ExpandedLessIcon className={"sidebar-item-expand-arrow" + " sidebar-item-expand-arrow-expanded"}/>
        ) : (
            <ExpandedMoreIcon className={"sidebar-item-expand-arrow"}/>
        )
    }

    return <>
        <ListItem className="sidebar-item" button dense {...rest} onClick={onClick}>
            <div
                style={{paddingLeft: depth * depthStep}}
                className="sidebar-item-content"
            >
                {Icon && <Icon className="sidebar-item-icon" fontSize="small"/>}
                <div className="sidebar-item-text">{label}</div>
            </div>
            {expandIcon}
        </ListItem>
        <Collapse in={!collapsed} timeout="auto" unmountOnExit>
            {Array.isArray(items) && (
                <List disablePadding dense>
                    {items.map((_, index) => <React.Fragment key={`${_.name}${index}`}>
                        {_ === "divider" ? (
                            <Divider style={{margin: '6px auto'}}/>) : (
                            <SideBarItem depth={depth + 1} depthStep={depthStep} item={_}/>
                        )}
                    </React.Fragment>)}
                </List>
            )}
        </Collapse>
    </>
};

export default SideBarItem;