import React, { useEffect } from "react"
import { IAppState } from "../../core/mainReducer";
import { useDispatch, useSelector } from "react-redux";
import { getTests } from "../../store/test/testActions";
import { Typography } from "@material-ui/core"
import TreeList, { Editing, SearchPanel, Column, RequiredRule, Selection, Sorting, Scrolling, Paging, Pager, HeaderFilter } from "devextreme-react/tree-list"
import { onCellPrepared } from "../../utils/helpSelectors"
import { Page } from "../../utils/page"

export const Test = () => {
    const dispatch = useDispatch()
    const selector = useSelector((state: IAppState) => state.test)

    useEffect(() => {
        dispatch(getTests())
    }, [dispatch])

    return (
        <Typography>
            <TreeList
                id="roles"
                dataSource={selector.tests}
                showRowLines={true}
                showBorders={true}
                columnAutoWidth={true}
                keyExpr="id"
                onCellPrepared={onCellPrepared}
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
            </TreeList>
        </Typography>
    )
}