import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <section className="bg-gray-50">
                <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
                    <div className="mx-auto max-w-xl text-center">
                        <h1 className="text-3xl font-extrabold sm:text-5xl">
                            Find your dream job now.
                            <div>
                                <strong className="font-extrabold text-red-700 sm:block"> 5 lakh+ jobs for you to explore </strong>
                            </div>
                        </h1>

                        <p className="mt-4 sm:text-xl/relaxed">
                            You can search for jobs by job title, location, or company and you can also apply for jobs.
                        </p>

                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <Link
                                className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                                to="/register"
                            >
                                Register
                            </Link>

                            <Link
                                className="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                                to="/login"
                            >
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;