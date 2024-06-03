import { Link, useRouteError } from 'react-router-dom';
import img from '../assets/images/coffee.jpg';

const ErrorPage = () => {
    const {error, status} = useRouteError();
    return (
        <div>
<div className="hero min-h-screen bg-base-100">
    <div>
      <h1 className="text-5xl font-bold">Error {status || 404}</h1>
      <p className="py-6">{error?.message}</p>
      <Link to='/' className="btn btn-primary">Home</Link>
    </div>
</div>
        </div>
    );
};

export default ErrorPage;