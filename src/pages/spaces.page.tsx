import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faDownload } from "@fortawesome/free-solid-svg-icons";
import { useQuery } from "react-query";
import { findFiles } from "../api";
import { FileMonkeyComponent } from "../components";
import { useParams } from "react-router-dom";

export function SpacesPage() {
  const params = useParams();

  const useQueryResultFiles = useQuery(
    ["findFiles", params.id],
    async () => await findFiles(params.id || "263737")
  );

  return (
    <>
      <div className="tw-bg-white tw-px-6 tw-py-4 lg:tw-px-24 md:tw-px-12">
        <img alt="Logo" src="/images/logo.png" style={{ height: "32px" }} />
      </div>
      <div className="tw-px-6 tw-py-24">
        <div className="tw-max-w-xl tw-mx-auto">
          <div className="tw-font-medium tw-mb-3 tw-text-center">
            Your space ID is
          </div>
          <div className="tw-mb-6 tw-text-center">
            <span className="tw-bg-secondary tw-font-medium tw-px-6 tw-py-2 tw-rounded-full tw-text-primary">
              {params.id || "263737"}&nbsp;&nbsp;
              <button
                className="tw-px-2 tw-py-2"
                onClick={() =>
                  navigator.clipboard.writeText(params.id || "263737")
                }
              >
                <FontAwesomeIcon icon={faCopy} />
              </button>
            </span>
          </div>

          {useQueryResultFiles.data?.items.map((x, index) => (
            <div
              className="tw-bg-gray-50 tw-flex tw-gap-4 tw-justify-between tw-my-3 tw-p-2 tw-rounded-lg"
              key={index}
            >
              <div className="tw-px-2 tw-py-2 tw-text-sm">{x.name}</div>
              <div className="tw-text-sm">
                {/* <button className="tw-mr-1 tw-p-2 tw-text-red-500">
                  <FontAwesomeIcon icon={faTrash} />
                </button> */}
                <button
                  className="tw-ml-1 tw-p-2 tw-text-primary"
                  onClick={() => window.open(x.url, "_blank")}
                >
                  <FontAwesomeIcon icon={faDownload} />
                </button>
              </div>
            </div>
          ))}

          <FileMonkeyComponent
            onResult={() => useQueryResultFiles.refetch()}
            tags={[params.id || "263737"]}
            username={"F8BDA464EDC9B041AD311E5806C24475"}
          />
        </div>
      </div>
    </>
  );
}
