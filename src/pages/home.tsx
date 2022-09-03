import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";

export function HomePage() {
  return (
    <div className="tw-px-6 tw-py-36">
      <div className="tw-max-w-xl tw-mx-auto">
        <div className="tw-flex tw-justify-center tw-font-bold tw-mb-12 tw-text-4xl tw-text-center">
          <img alt="Logo" src="/images/logo.png" style={{ height: "32px" }} />
        </div>
        <div className="tw-gap-4 tw-grid tw-grid-cols-6">
          <div className="tw-col-span-4">
            <input
              className="tw-border tw-border-gray-300 tw-outline-none tw-p-2.5 tw-rounded-lg tw-text-gray-900 tw-w-full"
              placeholder="Enter your space ID"
              type="text"
            />
          </div>

          <div className="tw-col-span-2">
            <button className="tw-bg-primary tw-font-medium tw-px-5 tw-py-2.5 tw-rounded-lg tw-text-white tw-w-full">
              <FontAwesomeIcon className="text-gray-500" icon={faFile} />
              &nbsp;Files
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
