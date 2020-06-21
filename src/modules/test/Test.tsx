import React, { useEffect } from "react"
import { IAppState } from "../../core/mainReducer";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getTests } from "../../store/test/testActions";
import TreeList, { Editing, SearchPanel, Column, RequiredRule, Selection, Sorting, Scrolling, HeaderFilter } from "devextreme-react/tree-list"
import { onCellPrepared } from "../../utils/helpSelectors"
import { Page } from "../../utils/page"

export const Test = React.memo(() => {
    const dispatch = useDispatch()
    const { tests } = useSelector((state: IAppState) => ({ tests: state.test.tests }), shallowEqual)

    useEffect(() => {
        dispatch(getTests())
    }, [dispatch])
    console.log(tests?.data);

    return (
        <TreeList
            id="roles"
            dataSource={tests?.data}
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
    )
})