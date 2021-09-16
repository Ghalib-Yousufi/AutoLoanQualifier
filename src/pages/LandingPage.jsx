import LandingForm from '../components/LandingForm'
import { connect } from 'react-redux';
import { checkEligibility } from '../redux/actions';
import { useEffect } from 'react';
import { useHistory } from "react-router-dom";



const mapStateToProps = state => {
    return {
        isEvaluating: state.isEvaluating,
        evaluationSuccess: state.evaluationSuccess,
        evaluationFailure: state.evaluationFailure,
    };
};
const mapDispatchToProps = dispatch => {
    return {
        evaluateApplication: (application) => dispatch(checkEligibility(application)),
    }
};

const LandingPage = ({ evaluateApplication, isEvaluating, evaluationSuccess, evaluationFailure }) => {
    const history = useHistory();
    useEffect(() => {
        //debugger;
        if (evaluationSuccess) {
            history.push('new-account');
        }
        if (evaluationFailure) {
            history.push('disqualification-page');
        }
    }, [isEvaluating, evaluationSuccess, evaluationFailure])

    return (
        <LandingForm onSubmitApplication={evaluateApplication} />
    )

}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);