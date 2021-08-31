/// <reference types="react-scripts" />

import {AxiosResponse} from "axios";

export interface res {
    searchId: string
}

export interface ResponseGenerator {
    config?: any,
    data?: res,
    headers?: any,
    request?: any,
    status?: number,
    statusText?: string
}