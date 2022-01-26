import React, {FC, useState} from 'react';
import {useAction} from "../../hook/use-action";
import {
    Box,
    Button,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField
} from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import LoginIcon from '@mui/icons-material/Login';

const SignInForm: FC = () => {

    const {accountSignIn} = useAction()

    const [identifier, setIdentifier] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false)

    return (
        <Box>
            <TextField
                label="Имя пользователя или e-mail"
                value={identifier}
                onChange={event => setIdentifier(event.target.value)}
                autoComplete="username email"
                required
                fullWidth
                autoFocus
            />
            <FormControl
                variant="outlined"
                margin="normal"
                fullWidth
            >
                <InputLabel required>
                    Пароль
                </InputLabel>
                <OutlinedInput
                    label="Пароль"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    autoComplete="current-password"
                    type={isPasswordVisible ? 'text' : 'password'}
                    endAdornment={
                        <InputAdornment
                            position="end"
                        >
                            <IconButton
                                aria-label="Переключить отображение пароля"
                                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                                onMouseDown={event => event.preventDefault()}
                                edge="end"
                            >
                                {isPasswordVisible ? <VisibilityOffIcon/> : <VisibilityIcon/>}
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
            <Button
                onClick={() => accountSignIn({identifier, password})}
                variant="contained"
                fullWidth
                sx={{
                    mt: 2
                }}
                startIcon={<LoginIcon/>}
            >
                Войти
            </Button>
        </Box>
    )

}

export default SignInForm
