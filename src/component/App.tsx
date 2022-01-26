import React, {FC, useEffect, useState} from 'react';
import {useTypedSelector} from "../hook/use-typed-selector";
import FullScreenLoader from "./common/FullScreenLoader";
import {BrowserRouter, Navigate, Routes, Route} from "react-router-dom";
import SignIn from "./SignIn";
import Map from "./Map";
import Account from "./Account";
import {useAction} from "../hook/use-action";
import Order from "./Order";
import Object from "./Object";
import Device from "./Device";

export enum RouteType {
    SIGN_IN = '/',
    HOME = '/',
    MAP = '/map',
    ORDER = '/order',
    OBJECT = '/object',
    DEVICE = '/device',
    ACCOUNT = '/account'
}

const App: FC = () => {

    const {account, isSignIn, isCheck, errors} = useTypedSelector(state => state.account)
    const {accountCheck} = useAction()
    const [isInit, setIsInit] = useState<boolean>(true)

    useEffect(() => {

        (async () => {

            setIsInit(false)
            await accountCheck()

        })()

    }, [])

    if (isInit) {
        return <FullScreenLoader messages={'Инициализация приложения'}/>
    }

    if (isSignIn) {
        return <FullScreenLoader messages={'Вход в учётную запись'}/>
    }

    if (isCheck) {
        return <FullScreenLoader messages={'Проверка учётной записи'}/>
    }

    if (!account) {

        if (errors.length) console.log(errors)

        return (
            <BrowserRouter>
                <Routes>
                    <Route path={RouteType.SIGN_IN} element={<SignIn/>}/>
                    <Route path={'*'} element={<Navigate to={RouteType.SIGN_IN}/>}/>
                </Routes>
            </BrowserRouter>
        )

    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path={RouteType.MAP} element={<Map/>}/>
                <Route path={RouteType.ORDER} element={<Order/>}/>
                <Route path={RouteType.OBJECT} element={<Object/>}/>
                <Route path={RouteType.DEVICE} element={<Device/>}/>
                <Route path={RouteType.ACCOUNT} element={<Account/>}/>
                <Route path={'*'} element={<Navigate to={RouteType.MAP}/>}/>
            </Routes>
        </BrowserRouter>
    )

}

export default App
