import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import TreeList, { Editing, SearchPanel, Column, RequiredRule, Selection, Sorting, Scrolling, HeaderFilter } from "devextreme-react/tree-list"
import { IAppState } from "../../core/mainReducer"
import { getTopics } from "../../store/topic/topicActions"
import { onCellPreparedDel } from "../../utils/helpSelectors"
import { Page } from "../../utils/page"
import { Loading } from "../../components/loading/Loading"

export const Topic = () => {
    const dispatch = useDispatch()
    const selector = useSelector((state: IAppState) => state.topic)

    useEffect(() => {
        dispatch(getTopics())
    }, [dispatch])

    return (
        <Loading loading={selector.loadState}>
            <TreeList
                id="roles"
                dataSource={selector.topics?.data}
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
                    caption={"Тест"}
                    dataField={"parent.name"}>
                    <RequiredRule />
                </Column>
                <Column
                    caption={"Тема"}
                    dataField={"name"}>
                    <RequiredRule />
                </Column>
            </TreeList>
        </Loading>
    )
}