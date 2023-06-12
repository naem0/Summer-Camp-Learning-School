
import { Link, useRouteError } from 'react-router-dom';
import errorimg from '../../assets/20230521_093919.jpg'


const ErrorPage = () => {
  const { error, status } = useRouteError()
  return (
    // error page 
    <div>
      <section className='flex items-center h-screen text-gray-900 bg-none'>
        <div className='container flex flex-col items-center justify-center mx-auto '>
          <img className='w-1/4' src={errorimg} alt="" />
          <div className='max-w-md text-center'>
            <h2 className='mb-4 -mt-20 font-extrabold text-2xl text-blue-900'>
              <span className='sr-only'>Error</span>
              {status || 404}
            </h2>
            <p className='text-2xl font-semibold md:text-xl mb-4 text-slate-700'>
              {error?.message}
            </p>
            <Link to='/' >
              <button className='btn'>Back to Home</button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ErrorPage;