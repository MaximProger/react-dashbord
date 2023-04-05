import React, { useRef, useEffect, ForwardedRef } from "react";
import PropTypes from "prop-types";
import { useStateContext } from "../../contexts/ContextProvider";
/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref: any) {
  const { handleClick } = useStateContext();

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        handleClick();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

/**
 * Component that alerts if you click outside of it
 */
function OutsideAlerter({ children }: { children: React.ReactNode }) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return <div ref={wrapperRef}>{children}</div>;
}

OutsideAlerter.propTypes = {
  children: PropTypes.element.isRequired,
};

export default OutsideAlerter;
