import React, {FC} from 'react';
import {useTypedSelector} from "../../hook/use-typed-selector";
import {Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography} from "@mui/material";
import {formatDate} from "../../utility/format";

const AccountForm: FC = () => {

    const {account} = useTypedSelector(state => state.account)

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            <Typography variant="caption">Имя пользователя</Typography>
                            <Typography>
                                {account?.user.username}
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Typography variant="caption">E-mail</Typography>
                            <Typography>
                                {account?.user.email}
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Typography variant="caption">Создан</Typography>
                            <Typography>
                                {formatDate(account?.user.createdAt, 'H:i:s d.m.Y')}
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Typography variant="caption">Изменён</Typography>
                            <Typography>
                                {formatDate(account?.user.updatedAt, 'H:i:s d.m.Y')}
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )

}

export default AccountForm
