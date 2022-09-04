import React, { useRef, useState } from "react";
import { FileMonkey } from "file-monkey";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

export const FileMonkeyComponent = (props: {
  // eslint-disable-next-line no-unused-vars
  onResult: (collection: any) => void;
  username: string;
}) => {
  const inputElementFile = useRef(null as any | null);

  const [state, setState] = useState({ data: null, isLoading: false } as {
    data: any | null;
    isLoading: boolean;
  });

  console.log(state);

  return (
    <div className="tw-bg-gray-50 tw-flex tw-flex-col tw-items-center tw-px-12 tw-py-12 tw-rounded-lg">
      <FontAwesomeIcon
        className="tw-mb-3 tw-text-3xl tw-text-primary"
        icon={faUpload}
      />

      <div className="tw-font-medium tw-mb-3 tw-text-center tw-text-sm">
        Click or drag file to this area (Max 10 Mb)
      </div>

      <div className="tw-mb-3 tw-text-center tw-text-xs">
        Don't upload assets which has sensitive information. Supported file
        extensions are <span className="tw-text-primary">.pdf</span>{" "}
        <span className="tw-text-primary">.docx</span>{" "}
        <span className="tw-text-primary">.doc</span>{" "}
        <span className="tw-text-primary">.rtf</span>{" "}
        <span className="tw-text-primary">.ppt</span>{" "}
        <span className="tw-text-primary">.pptx</span>{" "}
        <span className="tw-text-primary">.txt</span>{" "}
        <span className="tw-text-primary">.xlsx</span>{" "}
        <span className="tw-text-primary">.png</span>{" "}
        <span className="tw-text-primary">.jpg</span>{" "}
        <span className="tw-text-primary">.jpeg</span>{" "}
        <span className="tw-text-primary">.psd</span>{" "}
        <span className="tw-text-primary">.ai</span>{" "}
        <span className="tw-text-primary">.svg</span>{" "}
        <span className="tw-text-primary">.bmp</span>.
      </div>

      {/* <button
        className=""
        disabled={state.isLoading}
        onClick={() => inputElementFile.current.click()}
      >
        <FontAwesomeIcon icon={faTrash} />
        &nbsp;Upload File
      </button> */}

      <input
        multiple
        onChange={async (event: any) => {
          setState({
            data: null,
            isLoading: true,
          });

          const collection = await FileMonkey(props.username).onChange(event);

          setState({
            data: collection,
            isLoading: false,
          });

          props.onResult(collection);
        }}
        ref={inputElementFile}
        style={{ display: "none" }}
        type="file"
      />
    </div>
  );
};
