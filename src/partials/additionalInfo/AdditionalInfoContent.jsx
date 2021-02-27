import React from 'react';
import PropTypes from 'prop-types';
import {Business, Description, Infrastructure, Plan} from "../index";

const AdditionalInfoContent = ({type}) => {
    return <>
        <div className="AdditionalInfo__content">
            {type === 'Description' && <Description/>}
            {type === 'Business' && <Business/>}
            {type === 'Plan' && <Plan/>}
            {type === 'Infrastructure' && <Infrastructure/>}
        </div>
    </>
};

AdditionalInfoContent.propTypes = {
    type: PropTypes.string.isRequired
};


export default AdditionalInfoContent;
