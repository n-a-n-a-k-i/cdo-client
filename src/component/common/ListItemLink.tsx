import React, {FC, forwardRef, useMemo} from 'react';
import {ListItem} from "@mui/material";
import {Link, LinkProps} from "react-router-dom";
import {RouteType} from "../App";

interface ListItemLinkProps {
    to: RouteType
    selected: boolean
}

const ListItemLink: FC<ListItemLinkProps> = ({to, selected, children}) => {

    const renderLink = useMemo(() => forwardRef<HTMLAnchorElement, Omit<LinkProps, 'to'>>(
        (props, ref) => (
            <Link to={to} ref={ref} {...props} role={undefined}/>
        )
    ), [to])

    return (
        <ListItem
            button
            component={renderLink}
            selected={selected}
        >
            {children}
        </ListItem>
    )

}

export default ListItemLink
