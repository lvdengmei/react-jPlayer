import {actionTypes} from "../util/constants";

export const updateOption = (key, value) => ({
    type: actionTypes.UPDATE,
    key,
    value
});

export const addUniqueToArrayByValue = (key, value) => ({
    type: actionTypes.ARRAY_ADD_UNIQUE_BY_VALUE,
    key,
    value
});

export const removeFromArrayByValue = (key, value) => ({
    type: actionTypes.ARRAY_REMOVE_BY_VALUE,
    key,
    value
});

export const removeFromArrayByIndex = (key, value) => ({
    type: actionTypes.ARRAY_REMOVE_BY_INDEX,
    key,
    value
});