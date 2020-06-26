import React from 'react';

const Education = () => {
    return (
        <div className="card m-2 mb-5">
            <p className="card-title text-center m-2 mt-3">تحصیلات من</p>

            <div className="card-body">
                <ul className="list-group-item-info p-3 rounded" style={{listStyleType: 'none'}}>
                    <li className="lead list-unstyled">
                        <span className="fa fa-graduation-cap" /> تحصیلات
                    </li>

                    <li>
                         دیپلم :    دانشگاه صنعتی امیرکبیر   
                    </li>

                </ul>
            </div>
        </div>
    );
}

export default Education;