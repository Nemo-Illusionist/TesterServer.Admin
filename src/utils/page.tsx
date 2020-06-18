import React, { FC } from "react"
import { Pager, Paging } from "devextreme-react/tree-list"

const allowedPageSizes = [5, 10, 20];

interface IProps {
    papges?: Array<number>;
    defaultPageSize?: number;
    showPageSizeSelector?: boolean;
    showInfo?: boolean;
}

export const Page: FC<IProps> = ({
    papges = allowedPageSizes,
    showInfo = true,
    showPageSizeSelector = true,
    defaultPageSize = allowedPageSizes[0]
}) => {
    return (
        <>
            <Paging
                enabled={true}
                defaultPageSize={defaultPageSize}
            />
            <Pager
                showPageSizeSelector={showPageSizeSelector}
                allowedPageSizes={papges}
                showInfo={showInfo}
            />
        </>
    )
}