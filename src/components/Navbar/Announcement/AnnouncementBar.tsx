export default function AnnouncementBar() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inset-0 z-40 flex container mt-4 border-b border-gray-200">
          <div className="flex h-16 items-center">
            <div className="ml-4 flex lg:ml-0">
              <p className="flex h-10 items-center justify-center px-4 text-sm font-medium text-grey-700 sm:px-6 lg:px-8">
                Get free delivery on orders over $100
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
