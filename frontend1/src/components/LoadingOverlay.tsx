"use client";
import { useEffect, useState } from "react";

const LoadingOverlay = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulating a delay - remove this in actual implementation

    return () => clearTimeout(timer);
  }, []);

  return (
    loading && (
      <div className="fixed top-0 left-0 w-full h-full bg-app-purple flex items-center justify-center z-50">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
      </div>
    )
  );
};

export default LoadingOverlay;
