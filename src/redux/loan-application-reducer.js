export const loanApplicationReducer = function (state = defaultState, action) {
    switch (action.type) {
        case "IS_EVALUATING":
            return { ...state, isEvaluating: true };
        case "EVALUATION_SUCCESS":
            return { ...state, evaluationSuccess: true, isEvaluating: false, evaluationFailure: false };
        case "EVALUATION_FAILED":
            return { ...state, evaluationSuccess: false, isEvaluating: false, evaluationFailure: true, evaluationFailedMessage: action.payload };
        default:
            return state;
    }
};


const defaultState = {
    isEvaluating: null,
    evaluationSuccess: null,
    evaluationFailure: null,
    evaluationFailedMessage: '',
}