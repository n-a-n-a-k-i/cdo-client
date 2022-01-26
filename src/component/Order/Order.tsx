import React, {FC} from 'react';
import ViewNav from "../common/ViewNav";
import {RouteType} from "../App";
import {Toolbar, Typography} from "@mui/material";

const Order: FC = () => {

    return (
        <ViewNav title={'Заказы'} selected={RouteType.ORDER}>
            <Toolbar/>
            <Typography>
                Заказы
            </Typography>
        </ViewNav>
    )

}

export default Order
