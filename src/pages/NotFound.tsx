import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center space-y-4">
        <p className="font-mono text-sm text-primary">error_code: 404</p>
        <h1 className="font-display text-6xl font-bold tracking-tight">Not found</h1>
        <p className="text-lg text-muted-foreground font-mono">
          route &quot;{location.pathname}&quot; does not exist
        </p>
        <a
          href="/"
          className="inline-block font-mono text-sm text-accent hover:text-primary transition-colors"
        >
          cd ~/
        </a>
      </div>
    </div>
  );
};

export default NotFound;
