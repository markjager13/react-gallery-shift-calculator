import { useState, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';
import createWrapperAndAppendToBody from './utils/createWrapperAndAppendToBody';

const ReactPortal = ({ children, wrapperId = "react-portal-wrapper" }) => {

    const [wrapperElement, setWrapperElement] = useState(null);

    // handles a dynamic wrapperId
    useLayoutEffect(() => {
        let element = document.getElementById(wrapperId);
        let systemCreated = false;
        // if element is not found with wrapperId,
        // create and append to body
        if (!element) {
            systemCreated = true;
            element = createWrapperAndAppendToBody(wrapperId);
        }   
        setWrapperElement(element);
        
        return () => {
            // delete the programatically created element
            if (systemCreated && element.parentNode) {
                element.parentNode.removeChild(element);        
            }
        }
    }, [wrapperId]);
  
        // wrapperElement state will be null on very first render.
    if (wrapperElement === null) return null;

    return createPortal(children, wrapperElement);
}

export default ReactPortal;