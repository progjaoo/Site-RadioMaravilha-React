import { pageview } from "@/lib/analytics";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    pageview(location.pathname);
  }, [location]);

  return null;
};

export default AnalyticsTracker;