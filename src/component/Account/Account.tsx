import React, {FC} from 'react';
import {RouteType} from "../App";
import {Avatar, Box, Button, Container, Toolbar} from "@mui/material";
import ViewNav from "../common/ViewNav";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountForm from "./AccountForm";
import {useAction} from "../../hook/use-action";
import LogoutIcon from '@mui/icons-material/Logout';

const Account: FC = () => {

    const {accountSignOut} = useAction()

    return (
        <ViewNav title={'Аккаунт'} selected={RouteType.ACCOUNT}>
            <Toolbar/>
            <Container
                maxWidth="xs"
            >
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                >
                    <Avatar
                        sx={{
                            my: 2
                        }}
                    >
                        <AccountCircleIcon/>
                    </Avatar>
                    <AccountForm/>
                    <Button
                        onClick={() => accountSignOut()}
                        variant="contained"
                        fullWidth
                        sx={{
                            mt: 2
                        }}
                        startIcon={<LogoutIcon/>}
                    >
                        Выйти
                    </Button>
                </Box>
            </Container>
        </ViewNav>
    )
}

export default Account
