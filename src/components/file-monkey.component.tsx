import React, { useRef, useState } from "react";
import { FileMonkey } from "file-monkey";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

const supportedFileExtensions = [
  "docx",
  "odt",
  "rtf",
  "pdf",
  "txt",
  "xlsx",
  "ods",
  "csv",
  "tsv",
  "jpg",
  "png",
  "jpeg",
  "svg",
].sort();

export const FileMonkeyComponent = (props: {
  // eslint-disable-next-line no-unused-vars
  onResult: (collection: any) => void;
  tags: Array<string>;
  username: string;
}) => {
  const inputElementFile = useRef(null as any | null);

  const [state, setState] = useState({ data: null, isLoading: false } as {
    data: any | null;
    isLoading: boolean;
  });

  console.log(state);

  return (
    <div
      className="tw-bg-gray-50 tw-flex tw-flex-col tw-items-center tw-px-12 tw-py-12 tw-rounded-lg"
      onClick={() => inputElementFile.current.click()}
    >
      <FontAwesomeIcon
        className="tw-mb-3 tw-text-3xl tw-text-primary"
        icon={faUpload}
      />

      <div className="tw-font-medium tw-mb-3 tw-text-center tw-text-sm">
        Click or drag files to this area (Max 10 MB)
      </div>

      <div className="tw-mb-3 tw-text-center tw-text-xs">
        Don't upload files that contains sensitive information. Supported file
        extensions are{" "}
        {supportedFileExtensions.map((x) => (
          <span className="tw-mx-0.5 tw-text-primary" key={x}>
            .{x}
          </span>
        ))}
        .
      </div>

      <input
        multiple
        onChange={async (event: any) => {
          setState({
            data: null,
            isLoading: true,
          });

          const collection = await FileMonkey(
            props.username,
            props.tags
          ).onChange(event);

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
