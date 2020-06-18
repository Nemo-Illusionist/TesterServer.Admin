import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Typography } from "@material-ui/core"
import TreeList, { Editing, SearchPanel, Column, RequiredRule, Selection, Sorting, Scrolling, Paging, Pager } from "devextreme-react/tree-list"
import { IAppState } from "../../core/mainReducer"
import { getUsers } from "../../store/user/userActions"

const allowedPageSizes = [5, 10, 20];

export const Users = () => {
    const dispatch = useDispatch()
    const selector = useSelector((state: IAppState) => state.user)

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])

    console.log(selector.users)

    return (
        <Typography>
            <TreeList
                id="roles"
                dataSource={selector.users}
                showRowLines={true}
                showBorders={true}
                columnAutoWidth={true}
                keyExpr="id"
            // onCellPrepared={onCellPrepared}
            >
                <Scrolling mode="standard" />
                <Paging
                    enabled={true}
                    defaultPageSize={5} />
                <Pager
                    showPageSizeSelector={true}
                    allowedPageSizes={allowedPageSizes}
                    showInfo={true} />
                <Sorting mode="multiple" />
                <Selection mode="single" />
                <SearchPanel visible={true} />
                <Editing
                    allowUpdating={true}
                    allowDeleting={true}
                    allowAdding={true}
                    mode="row"
                />
                <Column
                    caption={"Номер"}
                    visible={false}
                    dataField={"id"}>
                </Column>
                <Column
                    caption={"Имя"}
                    dataField={"name"}>
                    <RequiredRule />
                </Column>
                <Column
                    caption={"Отчество"}
                    dataField={"lastName"}>
                    <RequiredRule />
                </Column>
                <Column
                    caption={"Логин"}
                    dataField={"login"}>
                    <RequiredRule />
                </Column>
            </TreeList>
        </Typography>
    )
}