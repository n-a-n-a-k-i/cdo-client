import React, {FC} from 'react';
import {Toolbar, Typography} from "@mui/material";
import {RouteType} from "../App";
import ViewNav from "../common/ViewNav";

const Device: FC = () => {

    return (
        <ViewNav title={'Устройства'} selected={RouteType.DEVICE}>
            <Toolbar/>
            <Typography>
                Устройства
            </Typography>
        </ViewNav>
    )

}

export default Device
