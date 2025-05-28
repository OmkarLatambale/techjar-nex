// hooks/useKpis.js
import { useState, useEffect } from "react";
import { fetchKPIs } from "../services/kpiService";

const useKpis = () => {
  const [kpis, setKpis] = useState({
    activeListings: 0,
    totalJobsPosted: 0,
    candidatesInPipeline: 0,
    applicationsProcessed: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadKPIs = async () => {
      try {
        const data = await fetchKPIs();
        setKpis(data);
        setError(null);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadKPIs();
  }, []);

  return { kpis, loading, error };
};

export default useKpis;
