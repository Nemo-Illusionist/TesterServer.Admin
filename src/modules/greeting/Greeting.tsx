import React, { useEffect, useState } from "react"
import { Typography } from "@material-ui/core"
import { useDispatch, useSelector } from "react-redux"
import { IAppState } from "../../core/mainReducer"
import { getTest, getTests } from "../../store/test/testActions"

export const Greeting = () => {
    // const dispath = useDispatch()
    // const selector = useSelector((state: IAppState) => state.test)

    // useEffect(() => {
    //     const fetch = () => {

    //         dispath(getTests())
    //     }
    //     fetch()
    // }, [])

    // console.log("!!!", selector.tests)

    return (
        <Typography>
            Приветствие и инфа о вошедшем
        </Typography>
    )
}