import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100 p-6">
      <h1 className="text-7xl font-bold text-red-700 mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-2">Page Not Found</h2>
      <p className="mb-6 text-gray-700">
        Oops! The page you are looking for does not exist.
      </p>
      <Link to="/" className="btn btn-primary">
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
