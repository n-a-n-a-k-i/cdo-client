import React, {FC} from 'react';
import {Box, Drawer, SwipeableDrawer} from "@mui/material";
import NavMenuList from "./NavMenuList";
import {RouteType} from "../App";

interface NavMenuProps {
    selected: RouteType
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
}

const NavMenu: FC<NavMenuProps> = ({selected, isOpen, setIsOpen}) => {

    return (
        <Box
            component="nav"
            sx={{
                width: {
                    sm: Number(process.env.REACT_APP_NAV_MENU_WIDTH)
                },
                flexShrink: {
                    sm: 0
                }
            }}
        >
            <SwipeableDrawer
                open={isOpen}
                onOpen={() => setIsOpen(true)}
                onClose={() => setIsOpen(false)}
                sx={{
                    display: {
                        xs: 'block',
                        sm: 'none'
                    },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: Number(process.env.REACT_APP_NAV_MENU_WIDTH)
                    }
                }}
            >
                <NavMenuList selected={selected}/>
            </SwipeableDrawer>
            <Drawer
                variant="permanent"
                sx={{
                    display: {
                        xs: 'none',
                        sm: 'block'
                    },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: Number(process.env.REACT_APP_NAV_MENU_WIDTH)
                    }
                }}
            >
                <NavMenuList selected={selected}/>
            </Drawer>
        </Box>
    )

}

export default NavMenu
