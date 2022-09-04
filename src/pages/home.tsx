import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="tw-bg-white tw-px-6 tw-py-4 lg:tw-px-24 md:tw-px-12">
        <img alt="Logo" src="/images/logo.png" style={{ height: "32px" }} />
      </div>
      <div className="tw-px-6 tw-py-24">
        <div className="tw-max-w-xl tw-mx-auto">
          <div className="tw-gap-4 tw-grid tw-grid-cols-6">
            <div className="tw-col-span-4">
              <input
                className="tw-border tw-border-gray-300 tw-outline-none tw-p-2 tw-rounded-lg tw-text-gray-900 tw-w-full"
                placeholder="Enter your space ID"
                type="text"
              />
            </div>

            <div className="tw-col-span-2">
              <button
                className="tw-bg-primary tw-font-medium tw-px-4 tw-py-2 tw-rounded-lg tw-text-white tw-w-full"
                onClick={() => navigate("/spaces")}
              >
                <FontAwesomeIcon className="text-gray-500" icon={faFile} />
                &nbsp;Files
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
