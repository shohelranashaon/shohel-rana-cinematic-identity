import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen min-h-[100dvh] items-center justify-center bg-muted px-4 py-10 pb-[max(2.5rem,env(safe-area-inset-bottom,0px))]">
      <div className="text-center max-w-md w-full">
        <h1 className="mb-3 sm:mb-4 text-5xl sm:text-6xl font-bold">404</h1>
        <p className="mb-4 sm:mb-6 text-lg sm:text-xl text-muted-foreground text-pretty px-2">
          Oops! Page not found
        </p>
        <a
          href="/"
          className="inline-flex min-h-12 items-center justify-center rounded-md text-primary underline underline-offset-4 hover:text-primary/90 px-4 py-2"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
