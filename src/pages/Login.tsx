const Login = () => {
  return (
    <div className="flex min-h-full min-w-full items-center justify-center">
      <div className="m-8  max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-3xl">
        <div className="sm:flex">
          <div className="md:shrink-0">
            <img
              className="h-48 w-full object-cover sm:h-full sm:w-64  lg:w-80"
              src="https://picsum.photos/id/169/833/554"
              alt="Modern building architecture"
            />
          </div>
          <div className="p-8">
            <div className="text-sm font-semibold uppercase tracking-wide text-indigo-500">
              Welcome back
            </div>
            <p className="mt-1 block font-medium leading-tight text-black">
              Enter your email and password to start
            </p>
            <form className="py-8">
              <div className="mt-4">
                <label
                  htmlFor="user"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  E-mail
                </label>
                <input
                  type="text"
                  name="user"
                  id="user"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 lg:w-96"
                />
              </div>
              <div className="mt-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div className="mt-8">
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
