import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const withFocusManagement = (WrappedComponent) => {
  const WithFocusManagement = (props) => {
    const location = useLocation();
    const componentRef = useRef(null);

    useEffect(() => {
      // Skip focusing for home route
      if (location.pathname === "/") return;

      if (componentRef.current) {
        // Focus the component when route changes
        componentRef.current.focus();
        componentRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, [location.pathname]);

    return (
      <div ref={componentRef} tabIndex={-1}>
        <WrappedComponent {...props} />
      </div>
    );
  };

  return WithFocusManagement;
};

export default withFocusManagement;
