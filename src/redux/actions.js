export const checkEligibility = (application) => {
    return async (dispatch) => {
        dispatch(setIsEvaluating())
        let res = await checkLoanEligibility(application);
        //debugger;
        res.data.isSuccessful ?
            dispatch(setEvaluationSuccess()) :
            dispatch(setEvaluationFailed(res.data.message));
    };
}

export const setIsEvaluating = (payload = null) => {
    return { type: 'IS_EVALUATING', payload: payload }
}

export const setEvaluationSuccess = (payload = null) => {
    return { type: 'EVALUATION_SUCCESS', payload: payload }
}

export const setEvaluationFailed = (payload = null) => {
    return { type: 'EVALUATION_FAILED', payload: payload }
}


const checkLoanEligibility = (loanApplication) => new Promise((resolve, reject) => {
    var delayInMilliseconds = 1000;

    setTimeout(function () {
        if (loanApplication.autoPurchasePrice <= (loanApplication.userEstimatedYearlyIncome/5) || loanApplication.userEstimatedCreditScore >= 600) {
            resolve({
                data: {
                    isSuccessful: true,
                    message: "Success! Please proceed your account creation"
                }
            });
        }

        else {
            resolve({
                data: {
                    isSuccessful: false,
                    message: "We're really sorry"
                }
            })
        }
    }, delayInMilliseconds);

})