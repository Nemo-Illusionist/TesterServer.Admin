import React, { useEffect } from "react"
import { IAppState } from "../../core/mainReducer";
import { useDispatch, useSelector } from "react-redux";
import { getQuestions } from "../../store/question/questionActions";
import TreeList, { Editing, SearchPanel, Column, RequiredRule, Selection, Sorting, Scrolling, HeaderFilter } from "devextreme-react/tree-list"
import { onCellPrepared } from "../../utils/helpSelectors"
import { Page } from "../../utils/page"
import { Loading } from "../../components/loading/Loading";

export const Question = () => {
    const dispatch = useDispatch()
    const selector = useSelector((state: IAppState) => state.question)

    useEffect(() => {
        dispatch(getQuestions())
    }, [dispatch])


    return (
        <Loading loading={selector.loadState}>
            <TreeList
                id="roles"
                dataSource={selector.questions?.data}
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
                <Column
                    caption={"Тип вопроса"}
                    dataField={"type"}>
                    <RequiredRule />
                </Column>
            </TreeList>
        </Loading>
    )
}