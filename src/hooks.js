import { useState, useEffect, useRef } from 'react';

export default function useComponentVisible(initialIsVisible=false) {
    const [isVisible, setVisible] = useState(initialIsVisible);
    const ref = useRef(null);

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    return { ref, isVisible, setVisible };
}