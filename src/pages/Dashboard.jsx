import { Link, useLoaderData, useSearchParams } from "react-router-dom";

const Dashboard = () => {

    const jobs = useLoaderData();

    // read the query params
    const [searchParams] = useSearchParams();

    const pageNumber = searchParams.get('page') || 1;
    const pageSize = searchParams.get('pageSize') || 5;
    const [start, end] = [(pageNumber - 1) * pageSize, pageNumber * pageSize];

    return (
        <div>
            {
                jobs
                    .slice(start, end)
                    .map(job => (
                        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center" key={job.id}>
                            <div className="mx-auto max-w-xl text-center">
                                <h1 className="text-2xl font-extrabold sm:text-3xl">{job.title}</h1>

                                <p className="mt-4 sm:text-xl/relaxed">
                                    {job.description}
                                </p>

                                <div className="mt-8 flex flex-wrap justify-center gap-4">
                                    <Link to={`/jobs/${job.id}`} className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto">
                                        Apply Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
            }

            <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
                <div className="mx-auto max-w-xl text-center">
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        {
                            Array.from({ length: Math.ceil(jobs.length / pageSize) }, (_, index) => (
                                <Link
                                    key={index}
                                    to={`/dashboard?page=${index + 1}`}
                                    className="inline-block rounded bg-gray-200 px-4 py-2 text-sm font-medium text-gray-900"
                                >
                                    {index + 1}
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;