import React, {FC} from 'react';
import {Avatar, Box, Divider, List, ListItemAvatar, ListItemIcon, ListItemText} from "@mui/material";
import TodayIcon from "@mui/icons-material/Today";
import MapIcon from "@mui/icons-material/Map";
import ApartmentIcon from "@mui/icons-material/Apartment";
import SensorsIcon from "@mui/icons-material/Sensors";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {RouteType} from "../App";
import ListItemLink from "./ListItemLink";

interface NavMenuListProps {
    selected: RouteType
}

const NavMenuList: FC<NavMenuListProps> = ({selected}) => {

    return (
        <Box>

            <List>

                <ListItemLink
                    to={RouteType.HOME}
                    selected={RouteType.HOME === selected}
                >
                    <ListItemAvatar>
                        <Avatar
                            alt="logo40.png"
                            src="/logo40.png"
                        />
                    </ListItemAvatar>
                    <ListItemText primary="ПУО" secondary="Проверка устройств на объектах"/>
                </ListItemLink>

            </List>

            <Divider/>

            <List>

                <ListItemLink
                    to={RouteType.MAP}
                    selected={RouteType.MAP === selected}
                >
                    <ListItemIcon>
                        <MapIcon/>
                    </ListItemIcon>
                    <ListItemText primary={'Карта'}/>
                </ListItemLink>

                <ListItemLink
                    to={RouteType.ORDER}
                    selected={RouteType.ORDER === selected}
                >
                    <ListItemIcon>
                        <TodayIcon/>
                    </ListItemIcon>
                    <ListItemText primary={'Заказы'}/>
                </ListItemLink>

            </List>

            <Divider/>

            <List>

                <ListItemLink
                    to={RouteType.OBJECT}
                    selected={RouteType.OBJECT === selected}
                >
                    <ListItemIcon>
                        <ApartmentIcon/>
                    </ListItemIcon>
                    <ListItemText primary={'Объекты'}/>
                </ListItemLink>

                <ListItemLink
                    to={RouteType.DEVICE}
                    selected={RouteType.DEVICE === selected}
                >
                    <ListItemIcon>
                        <SensorsIcon/>
                    </ListItemIcon>
                    <ListItemText primary={'Устройства'}/>
                </ListItemLink>

            </List>

            <Divider/>

            <List>

                <ListItemLink
                    to={RouteType.ACCOUNT}
                    selected={RouteType.ACCOUNT === selected}
                >
                    <ListItemIcon>
                        <AccountCircleIcon/>
                    </ListItemIcon>
                    <ListItemText primary={'Аккаунт'}/>
                </ListItemLink>

            </List>

        </Box>
    )

}

export default NavMenuList
