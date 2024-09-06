export default function AnnouncementBar() {
  return (
    <>
      <div className="inset-0 z-40 flex container items-start mt-4">
        <div className="justified-star">
          <p className="flex h-10 items-center justify-center px-4 text-sm font-medium text-grey-700 sm:px-6 lg:px-8">
            Get free delivery on orders over $100
          </p>
        </div>
        <div className="justify-end items-end inset-0 flex container pr-6">
          <div className="flow-root">
            <a
              href="#"
              className="flex h-10 items-center justify-center px-4 text-sm font-medium text-grey-700 sm:px-2 lg:px-4"
            >
              Sign in
            </a>
          </div>
          <div className="flow-root">
            <a
              href="#"
              className="flex h-10 items-center justify-center px-4 text-sm font-medium text-grey-700 sm:px-2 lg:px-4"
            >
              Create account
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
