import React, {FC} from 'react';
import ViewNav from "../common/ViewNav";
import {RouteType} from "../App";
import {Toolbar, Typography} from "@mui/material";

const Object: FC = () => {

    return (
        <ViewNav title={'Объекты'} selected={RouteType.OBJECT}>
            <Toolbar/>
            <Typography>
                Объекты
            </Typography>
        </ViewNav>
    )

}

export default Object
