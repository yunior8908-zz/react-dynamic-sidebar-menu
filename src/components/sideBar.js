import React from 'react';
import {List, Divider} from '@material-ui/core';
import SideBarItem from "./sideBarItem";

const SideBar = props => {
    const {items = [], depth, depthStep, expanded} = props;
    return <List disablePadding dense className="sidebar">
        {items.map((i, index) => <React.Fragment key={`${i.name}${index}`}>
                {i === "divider" ? <Divider style={{margin: '6px auto'}}/> : (
                    <SideBarItem
                        depthStep={depthStep}
                        expanded={expanded}
                        item={i}
                    />)}
            </React.Fragment>
        )}
    </List>
};

export default SideBar;