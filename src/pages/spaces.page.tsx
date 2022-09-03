import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faDownload, faTrash } from "@fortawesome/free-solid-svg-icons";

export function SpacesPage() {
  return (
    <>
      <div className="tw-bg-white tw-px-6 tw-py-4 lg:tw-px-24 md:tw-px-12">
        <img alt="Logo" src="/images/logo.png" style={{ height: "32px" }} />
      </div>
      <div className="tw-px-6 tw-py-36">
        <div className="tw-max-w-xl tw-mx-auto">
          <div className="tw-mb-3 tw-text-center">Your space ID is</div>
          <div className="tw-mb-6 tw-text-center">
            <span className="tw-bg-black tw-px-2.5 tw-py-2.5 tw-rounded-full tw-text-white">
              1234321&nbsp;&nbsp;
              <button>
                <FontAwesomeIcon icon={faCopy} />
              </button>
            </span>
          </div>

          {[0, 0, 0].map((x, index) => (
            <div
              className="tw-bg-gray-50 tw-flex tw-gap-4 tw-justify-between tw-my-3 tw-px-2.5 tw-py-2.5 tw-rounded-lg"
              key={index}
            >
              <div>IMG_0339.jpeg</div>
              <div>
                <button className="tw-mr-1 tw-text-red-500">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
                <button className="tw-ml-1 tw-text-primary">
                  <FontAwesomeIcon icon={faDownload} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
