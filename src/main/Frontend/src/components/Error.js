import React from 'react';
import './css/Error.css';

const Error = () => {
    return <div className="error_component">
        <img id="error_image" src={process.env.PUBLIC_URL + "/images/Crockpot-Express-E6-Error-Code.png"} alt="error" />
        <div className="error_message">에러가 발생했습니다. 다시 시도해 주세요.</div>
    </div>
}

export default Error;