import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faDownload, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useQuery } from "react-query";
import { findFiles } from "../api";
import { FileMonkeyComponent, NavbarComponent } from "../components";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

export function SpacesPage() {
  const navigate = useNavigate();

  const params = useParams();

  const useQueryResultFiles = useQuery(
    ["findFiles", params.id],
    async () => await findFiles(params.id || ""),
    {
      enabled: params.id ? true : false,
    }
  );

  useEffect(() => {
    if (!params.id) {
      const id: number = Math.round(
        Math.random() * (1000000 - 100000) + 100000
      );

      navigate(`/spaces/${id}`);
    }
  }, [navigate, params.id]);

  if (!params.id) {
    return <></>;
  }

  return (
    <>
      <NavbarComponent />
      <div className="tw-px-6 tw-py-24">
        <div className="tw-max-w-xl tw-mx-auto">
          <div className="tw-font-medium tw-mb-3 tw-text-center">
            Your space ID
          </div>
          <div className="tw-mb-6 tw-text-center">
            <span className="tw-bg-secondary tw-font-medium tw-px-6 tw-py-2 tw-rounded-full tw-text-primary">
              {params.id || ""}&nbsp;&nbsp;
              <button
                className="tw-px-2 tw-py-2"
                onClick={() => navigator.clipboard.writeText(params.id || "")}
              >
                <FontAwesomeIcon icon={faCopy} />
              </button>
            </span>
          </div>

          {useQueryResultFiles.data?.items.map((x, index) => (
            <div
              className="tw-bg-gray-50 tw-flex tw-gap-2 tw-justify-between tw-my-3 tw-p-2 tw-rounded-lg"
              key={index}
            >
              <div className="tw-px-2 tw-py-2 tw-text-sm">{x.name}</div>
              <div className="tw-text-sm">
                <button className="tw-mr-1 tw-p-2 tw-text-gray-500">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
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
            tags={[params.id || ""]}
            username={"F8BDA464EDC9B041AD311E5806C24475"}
          />
        </div>
      </div>
    </>
  );
}
