import {
    ALL_PROJECT_FAIL,
    ALL_PROJECT_REQUEST,
    ALL_PROJECT_SUCCESS,
    NEW_PROJECT_REQUEST,
    NEW_PROJECT_SUCCESS,
    NEW_PROJECT_FAIL,
    UPDATE_PROJECT_REQUEST,
    UPDATE_PROJECT_SUCCESS,
    UPDATE_PROJECT_FAIL,
    DELETE_PROJECT_REQUEST,
    DELETE_PROJECT_SUCCESS,
    DELETE_PROJECT_FAIL,
    PROJECT_DETAILS_REQUEST,
    PROJECT_DETAILS_FAIL,
    PROJECT_DETAILS_SUCCESS,
    CLEAR_ERRORS,
} from "../actionTypes/productType";

export const productsReducer = (state = { projects: [] }, action) => {
    switch (action.type) {
        case ALL_PROJECT_REQUEST:
            return {
                loading: true,
                projects: [],
            };
        case ALL_PROJECT_SUCCESS:
            return {
                loading: false, 
                projects: action.payload.projects,
                projectsCount: action.payload.projectsCount,
                resultPerPage: action.payload.resultPerPage,
                filteredProductsCount: action.payload.filteredProductsCount,
            };
        case ALL_PROJECT_FAIL:
            return {
                loading: false,
                error: action.payload,
            };

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
};

export const newProductReducer = (state = { project: {} }, action) => {
    switch (action.type) {
        case NEW_PROJECT_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case NEW_PROJECT_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                project: action.payload.project,
            };
        case NEW_PROJECT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
};

export const productReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_PROJECT_REQUEST:
        case UPDATE_PROJECT_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case DELETE_PROJECT_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload,
            };

        case UPDATE_PROJECT_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload,
            };
        case DELETE_PROJECT_FAIL:
        case UPDATE_PROJECT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
};

export const productDetailsReducer = (state = { project: {} }, action) => {
    switch (action.type) {
        case PROJECT_DETAILS_REQUEST:
            return {
                loading: true,
                ...state,
            };
        case PROJECT_DETAILS_SUCCESS:
            return {
                loading: false,
                project: action.payload,
            };
        case PROJECT_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload,
            };

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
};
