import {FC, useState} from 'react';
import {AppBar, Box, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NavMenu from "./NavMenu";
import {RouteType} from "../App";

interface ViewNavProps {
    title: string
    selected: RouteType
}

const ViewNav: FC<ViewNavProps> = ({title, selected, children}) => {

    const [isNavMenuOpen, setIsNavMenuOpen] = useState<boolean>(false)

    return (
        <Box
            sx={{
                display: 'flex'
            }}
        >
            <AppBar
                position="fixed"
                sx={{
                    ml: {
                        sm: `${process.env.REACT_APP_NAV_MENU_WIDTH}px`
                    },
                    width: {
                        sm: `calc(100% - ${process.env.REACT_APP_NAV_MENU_WIDTH}px)`
                    }
                }}
            >
                <Toolbar>
                    <IconButton
                        onClick={() => setIsNavMenuOpen(true)}
                        edge="start"
                        color="inherit"
                        sx={{
                            mr: 2,
                            display: {
                                sm: 'none'
                            }
                        }}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                    >
                        {title}
                    </Typography>
                </Toolbar>
            </AppBar>
            <NavMenu selected={selected} isOpen={isNavMenuOpen} setIsOpen={setIsNavMenuOpen}/>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    width: {
                        sm: `calc(100% - ${process.env.REACT_APP_NAV_MENU_WIDTH}px)`
                    }
                }}
            >
                {children}
            </Box>
        </Box>
    )

}

export default ViewNav
