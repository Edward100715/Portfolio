import React, { useState, useEffect } from 'react';

export const Loader = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <div className={`lds-ripple loader ${isLoading ? '' : 'hide-loader'}`} id="loader">
                <div></div>
                <div></div>
            </div>
        </div>
    );
};