import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

export function SpacesPage() {
  return (
    <>
      <div className="tw-bg-white tw-px-6 tw-py-4 lg:tw-px-24 md:tw-px-12">
        <img alt="Logo" src="/images/logo.png" style={{ height: "32px" }} />
      </div>
      <div className="tw-px-6 tw-py-36">
        <div className="tw-max-w-xl tw-mx-auto">
          <div className="tw-mb-3 tw-text-center">Your space ID is</div>
          <div className="tw-mb-1 tw-text-center">
            <span className="tw-bg-black tw-px-2.5 tw-py-2.5 tw-rounded-full tw-text-white">
              1234321&nbsp;&nbsp;
              <button>
                <FontAwesomeIcon icon={faCopy} />
              </button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
