import '../css/components/disqualification-page.css';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        evaluationFailedMessage: state.evaluationFailedMessage,
    };
};
const DisqualificationPage = ({ evaluationFailedMessage }) => {
    return (
        <div id="booking" className="section">
            <div className="section-center">
                <div className="container disqualification-msg-container">
                    <div className="info-message-disqualification">
                        {evaluationFailedMessage}
                    </div>

                </div>
            </div>
        </div>
    )
}


export default connect(mapStateToProps, null)(DisqualificationPage);