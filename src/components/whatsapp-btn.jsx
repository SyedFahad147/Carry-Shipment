import React, {useEffect, useState} from 'react';
import {ContactDetails} from "../models";
import {fetchContactDetails} from "../js/api";

const WhatsappBtn = () => {
    let [contactDetails, setContactDetails] = useState(JSON.parse(localStorage.contactDetails || null) || ContactDetails);
    useEffect(() => {
        fetchContactDetails().then(res => {
            try {
                if (res.success) {
                    setContactDetails(res.data);
                } else {
                    throw Error(res.message);
                }
            } catch (error) {
                console.log(error.message);
            }
        });
    }, []);
    return (
        <div className="whatsapp-btn d-flex position-fixed rounded-circle align-items-center justify-content-center">
            <a
                href={"https://api.whatsapp.com/send?phone=" + contactDetails.whatsapp_no}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white d-flex align-items-center justify-content-center"
            >
                <i className="bi d-flex bi-whatsapp fs-4" style={{borderRadius: "50%"}}></i>
            </a>
        </div>
    );
};

export default WhatsappBtn;
