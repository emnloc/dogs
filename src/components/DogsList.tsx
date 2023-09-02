const DogsList = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3"
      >
        <li className="overflow-hidden rounded-xl border-2 border-gray-200 bg-white">
          <div className="flex items-center gap-4 border-b border-gray-900/5 bg-gray-50 p-6">
            <img
              src="https://tailwindui.com/img/logos/48x48/tuple.svg"
              alt="Tuple"
              className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10"
            />
            <div className="text-sm font-medium leading-6 text-gray-900">
              Tuple
            </div>
            <div className="relative ml-auto" data-headlessui-state="">
              <button
                className="bkx -m-2 block p-[0.625rem] text-gray-400"
                id="headlessui-menu-button-1"
                type="button"
                aria-haspopup="menu"
                aria-expanded="false"
                data-headlessui-state=""
              >
                <span className="hidden">Open options</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5"
                >
                  <path d="M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"></path>
                </svg>
              </button>
            </div>
          </div>
          <dl className="-my-3 divide-y divide-solid divide-gray-100 px-6 py-4 text-sm leading-6">
            <div className="flex justify-between gap-4 py-3">
              <dt className="text-gray-500">Last invoice</dt>
              <dd className="text-gray-700">
                <time dateTime="2022-12-13">December 13, 2022</time>
              </dd>
            </div>
            <div className="flex justify-between gap-4 py-3">
              <dt className="text-gray-500">Amount</dt>
              <dd className="flex items-start gap-x-2">
                <div className="font-medium text-gray-900">$2,000.00</div>
                <div className="rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                  Overdue
                </div>
              </dd>
            </div>
          </dl>
        </li>
        <li className="overflow-hidden rounded-xl border-2 border-gray-200 bg-white">
          <div className="flex items-center gap-4 border-b border-gray-900/5 bg-gray-50 p-6">
            <img
              src="https://tailwindui.com/img/logos/48x48/savvycal.svg"
              alt="SavvyCal"
              className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10"
            />
            <div className="text-sm font-medium leading-6 text-gray-900">
              SavvyCal
            </div>
            <div className="relative ml-auto" data-headlessui-state="">
              <button
                className="bkx -m-2 block p-[0.625rem] text-gray-400"
                id="headlessui-menu-button-2"
                type="button"
                aria-haspopup="menu"
                aria-expanded="false"
                data-headlessui-state=""
              >
                <span className="hidden">Open options</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5"
                >
                  <path d="M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"></path>
                </svg>
              </button>
            </div>
          </div>
          <dl className="-my-3 px-6 py-4 text-sm leading-6">
            <div className="flex justify-between gap-4 py-3">
              <dt className="text-gray-500">Last invoice</dt>
              <dd className="text-gray-700">
                <time dateTime="2023-01-22">January 22, 2023</time>
              </dd>
            </div>
            <div className="flex justify-between gap-4 py-3">
              <dt className="text-gray-500">Amount</dt>
              <dd className="flex items-start gap-x-2">
                <div className="font-medium text-gray-900">$14,000.00</div>
                <div className="rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                  Paid
                </div>
              </dd>
            </div>
          </dl>
        </li>
        <li className="overflow-hidden rounded-xl border-2 border-gray-200 bg-white">
          <div className="flex items-center gap-4 border-b border-gray-900/5 bg-gray-50 p-6">
            <img
              src="https://tailwindui.com/img/logos/48x48/reform.svg"
              alt="Reform"
              className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10"
            />
            <div className="text-sm font-medium leading-6 text-gray-900">
              Reform
            </div>
            <div className="relative ml-auto" data-headlessui-state="">
              <button
                className="bkx -m-2 block p-[0.625rem] text-gray-400"
                id="headlessui-menu-button-3"
                type="button"
                aria-haspopup="menu"
                aria-expanded="false"
                data-headlessui-state=""
              >
                <span className="hidden">Open options</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5"
                >
                  <path d="M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"></path>
                </svg>
              </button>
            </div>
          </div>
          <dl className="-my-3 px-6 py-4 text-sm leading-6">
            <div className="flex justify-between gap-4 py-3">
              <dt className="text-gray-500">Last invoice</dt>
              <dd className="text-gray-700">
                <time dateTime="2023-01-23">January 23, 2023</time>
              </dd>
            </div>
            <div className="flex justify-between gap-4 py-3">
              <dt className="text-gray-500">Amount</dt>
              <dd className="flex items-start gap-x-2">
                <div className="font-medium text-gray-900">$7,600.00</div>
                <div className="rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                  Paid
                </div>
              </dd>
            </div>
          </dl>
        </li>
      </ul>
    </div>
  );
};

export default DogsList;
