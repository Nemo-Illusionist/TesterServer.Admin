import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import TreeList, { Editing, SearchPanel, Column, RequiredRule, Selection, Sorting, Scrolling, HeaderFilter } from "devextreme-react/tree-list"
import { IAppState } from "../../core/mainReducer"
import { getUsers } from "../../store/user/userActions"
import { onCellPreparedDel } from "../../utils/helpSelectors"
import { Page } from "../../utils/page"
import { Loading } from "../../components/loading/Loading"

export const Users = () => {
    const dispatch = useDispatch()
    const selector = useSelector((state: IAppState) => state.user)

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])

    return (
        <Loading loading={selector.loadState}>
            <TreeList
                id="roles"
                dataSource={selector.users?.data}
                showRowLines={true}
                showBorders={true}
                columnAutoWidth={true}
                keyExpr="id"
                onCellPrepared={onCellPreparedDel}
            >
                <HeaderFilter visible={true} />
                <Scrolling mode="standard" />
                <Page />
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
        </Loading>
    )
}