import '../css/components/landing-form.css';

const LandingForm = ({ onSubmitApplication }) => {

    return (
        <div id="booking" className="section">
            <div className="loader" id="loader-4">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="section-center">
                <div className="container">
                    <div className="row">
                        <div className="booking-form">
                            <form onSubmit={handleSubmit}>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <input required {...bindAutoPurchasePrice} className="form-control" type="number" placeholder="Enter Auto Purchase Price" />
                                        <span className="form-label">Auto Purchase Price ($)</span>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <input required {...bindAutoMake} className="form-control" type="text" placeholder="Enter Auto Make" />
                                        <span className="form-label">Auto Make</span>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <input required {...bindAutoModel} className="form-control" type="text" placeholder="Enter Auto Model" />
                                        <span className="form-label">Auto Model</span>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <input required {...bindUserEstimatedYearlyIncome} className="form-control" type="number" placeholder="Enter User Estimated Yearly Income" />
                                        <span className="form-label">User Estimated Yearly Income ($)</span>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <input min="300" max="850" required {...bindUserEstimatedCreditScore} className="form-control" type="number" placeholder="Enter User Estimated Credit Score" />
                                        <span className="form-label">User Estimated Credit Score</span>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-btn">
                                        <button className="submit-btn">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}

export default LandingForm;