import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './SuccessMessage.css';

function EnquiredSucessfully() {
    const location = useLocation();
    const navigate = useNavigate();
    const studentName = location.state;

    const [allowRender, setAllowRender] = useState(false);
    useEffect(() => {
        window.scrollTo(0, 0);
       
    }, []);
    useEffect(() => {
        if (!studentName) {
            navigate('/');
        } else {
            setAllowRender(true);
        }
    }, [studentName, navigate]);

    if (!allowRender) return null; // 

    return (
        <>
            <div className="success-container">
                <svg
                    className="smvec-animated-logo"
                    width="226"
                    height="221"
                    viewBox="0 0 226 221"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path className="petals" d="M115.239 0C102.985 15.919 85.8289 59.6056 115.239 107C125.623 88.6629 140.162 41.591 115.239 0Z" />
                    <path className="petals" d="M13.7012 54.1107C20.3279 69.2312 45.3434 99.3311 92.3914 98.7668C83.2113 83.9303 54.6211 54.228 13.7012 54.1107Z" />
                    <path className="petals" d="M213.157 58.6068C196.512 55.7973 156.95 59.8608 131.856 98.5902C149.644 99.1599 190.807 91.9609 213.157 58.6068Z" />
                    <path className="petals" d="M172.547 16.5035C161.617 21.5935 138.902 40.0657 135.48 73.2343C146.421 66.3512 169.153 45.3686 172.547 16.5035Z" />
                    <path className="petals" d="M53.9139 16.5035C64.8438 21.5935 87.5591 40.0657 90.9812 73.2343C80.0398 66.3512 57.3083 45.3686 53.9139 16.5035Z" />
                    <path className="petals" d="M32.0564 31.2458C37.8077 31.4847 50.2406 35.7112 53.9608 50.7066C48.0947 49.6226 35.5012 44.213 32.0564 31.2458Z" />
                    <path className="petals" d="M82.8106 1.53243C87.7297 4.44208 96.5235 13.9816 92.3462 28.8625C87.7456 25.1588 79.3977 14.5076 82.8106 1.53243Z" />
                    <path className="petals" d="M3.09035 82.8127C8.32018 80.4718 21.3653 78.7129 31.7069 90.4047C25.9787 92.0446 12.236 92.8221 3.09035 82.8127Z" />
                    <path className="petals" d="M196.944 33.6721C191.192 33.9109 178.759 38.1375 175.039 53.1328C180.905 52.0489 193.499 46.6393 196.944 33.6721Z" />
                    <path className="petals" d="M146.189 3.95919C141.27 6.86884 132.476 16.4084 136.654 31.2893C141.254 27.5856 149.602 16.9344 146.189 3.95919Z" />
                    <path className="petals" d="M225.91 85.2385C220.68 82.8976 207.635 81.1387 197.293 92.8305C203.021 94.4704 216.764 95.2479 225.91 85.2385Z" />

                    <g className="base-section">
                        <path d="M108.025 220.5C74.0247 220.1 53.5247 207.334 47.5247 201L78.0247 170.5C88.8247 178.5 103.525 180.5 109.525 180.5L108.025 220.5Z" />
                        <path d="M73.0247 167.5L43.0247 197C20.6247 181.8 10.6913 160.334 8.52465 151.5H60.0247C62.4247 158.3 69.6913 165 73.0247 167.5Z" />
                        <path d="M56.5247 145C50.8356 134.6 49.8209 121 50.0247 115.5H55.0234C57.0234 149.9 77.5234 165.5 87.5234 169V110.5H0.0246531C-0.375347 126.1 4.19132 140 6.52465 145H56.5247Z" />
                        <path d="M93.0234 170.5V110.5C93.0234 110.5 108.522 109.501 109.023 126C109.525 142.5 109.023 174 109.023 174C102.223 174.8 95.5234 172 93.0234 170.5Z" />
                        <path d="M116.022 220C150.022 219.6 170.522 206.833 176.522 200.5L146.022 170C135.222 178 120.522 180 114.522 180L116.022 220Z" />
                        <path d="M151.022 167L181.022 196.5C203.422 181.3 213.356 159.833 215.522 151H164.022C161.622 157.8 154.356 164.5 151.022 167Z" />
                        <path d="M167.522 144.5C173.211 134.1 174.226 120.5 174.022 115H169.023C167.023 149.4 146.523 165 136.523 168.5V110H224.022C224.422 125.6 219.856 139.5 217.522 144.5H167.522Z" />
                        <path d="M131.023 170V110C131.023 110 115.023 112 115.023 125.5V173.5C121.823 174.3 128.523 171.5 131.023 170Z" />
                    </g>
                </svg>

                <h1 className="thankyou-text">Enquired successfully! {studentName}</h1>
                <p className="sub-text">You have successfully enquired. We will contact you soon.</p>
                <p className="sub-text">If you have any urgent questions, feel free to contact our admissions office.</p>

                <button onClick={() => navigate('/')} className="sub-button">Back to Home</button>
            </div>

        </>
    );
}

export default EnquiredSucessfully;
