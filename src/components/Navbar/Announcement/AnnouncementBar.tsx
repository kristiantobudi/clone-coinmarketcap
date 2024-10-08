export default function AnnouncementBar() {
  return (
    <>
      <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center mt-4 border-b border-gray-200">
          <div className="inset-0 z-40 flex container ">
            <div className="ml-4 flex lg:ml-0">
              <p className="flex h-10 items-center justify-center px-2 text-sm font-medium text-grey-600 sm:px-3 lg:px-5">
                Mata Uang Kripto:
                <span className="text-indigo-600">2.4M+</span>
              </p>
              <p className="flex h-10 items-center justify-center px-2 text-sm font-medium text-grey-600 sm:px-3 lg:px-5">
                Exchange:
                <span className="text-indigo-600">790</span>
              </p>
              <p className="flex h-10 items-center justify-center px-2 text-sm font-medium text-grey-600 sm:px-3 lg:px-5">
                Market Cap:
                <span className="text-indigo-600">$1.96T</span>
              </p>
            </div>
            <div className="flex ml-auto">
              <div className="flex lg-6">
                <div className="inset-0 flex container pr-6 gap-4">
                  <div className="flow-root outline-indigo-600 outline rounded-2xl hover:bg-gray-100">
                    <a
                      href="#"
                      className="flex h-10 items-center justify-center px-4 text-sm font-bold text-grey-700 sm:px-2 lg:px-4 text-indigo-600"
                    >
                      Sign in
                    </a>
                  </div>
                  <div className="flow-root rounded-2xl bg-indigo-600 hover:bg-indigo-700">
                    <a
                      href="#"
                      className="flex h-10 items-center justify-center px-4 text-sm font-bold text-grey-700 sm:px-2 lg:px-4 text-white"
                    >
                      Create account
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
