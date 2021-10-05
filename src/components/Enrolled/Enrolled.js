import React from 'react';
import './Enrolled.css'
import thanksMsg from '../../images/success.png'
import { useHistory } from 'react-router';

const Enrolled = () => {
    // Success Message
    const history = useHistory()
    const handleClick = () => {
        history.push('/home')
    }
    return (
        <div>
            <div className="text-white text-center p-5 bg-thanks">
                <div>
                    <img src={thanksMsg} alt="" />
                    {/* <i class="far fa-check-circle success-icon"></i> */}
                    <h5 className="mt-2 text-secondary">for Enrolled!</h5>
                    <button onClick={handleClick} className="btn btn-primary mt-2">Back to Course</button>
                </div>
            </div>

        </div>
    );
};

export default Enrolled;