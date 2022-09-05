import { useFormik } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faUpload } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

export function HomePage() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      id: "",
    },
    onSubmit: async (values: { [key: string]: string }) => {
      navigate(`/spaces/${values.id}`);
    },
    validateOnMount: true,
    validationSchema: yup.object().shape({ id: yup.string().required() }),
  });

  return (
    <>
      <div className="tw-bg-white tw-px-6 tw-py-4 lg:tw-px-24 md:tw-px-12">
        <img alt="Logo" src="/images/logo.png" style={{ height: "32px" }} />
      </div>
      <div className="tw-px-6 tw-py-24">
        <div className="tw-max-w-xl tw-mx-auto">
          <form onSubmit={formik.handleSubmit}>
            <div className="tw-gap-4 tw-grid tw-grid-cols-7">
              <div className="tw-col-span-4">
                <input
                  className="tw-border tw-border-gray-300 tw-outline-none tw-p-2 tw-rounded-lg tw-text-gray-900 tw-w-full"
                  name="id"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  placeholder="Enter your space ID"
                  value={formik.values.id}
                  type="text"
                />
              </div>

              <div className="tw-col-span-3">
                <button
                  className="tw-bg-primary tw-font-medium tw-px-4 tw-py-2 tw-rounded-lg tw-text-white tw-w-full"
                  type="submit"
                >
                  <FontAwesomeIcon
                    className="text-gray-500"
                    icon={faDownload}
                  />
                  &nbsp;Download files
                </button>
              </div>
            </div>
          </form>

          <button
            className="tw-border tw-border-primary tw-font-medium tw-mt-6 tw-px-4 tw-py-2 tw-rounded-lg tw-text-primary tw-w-full"
            onClick={() => {
              const id: number = Math.round(
                Math.random() * (1000000 - 100000) + 100000
              );

              navigate(`/spaces/${id}`);
            }}
          >
            <FontAwesomeIcon className="text-gray-500" icon={faUpload} />
            &nbsp;Upload files
          </button>
        </div>
      </div>
    </>
  );
}
