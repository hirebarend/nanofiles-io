import { useFormik } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faUpload } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { NavbarComponent } from "../components";

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
    validationSchema: yup.object().shape({ id: yup.string().matches(/^\d{6}$/).required() }),
  });

  return (
    <>
      <NavbarComponent />
      <div className="tw-px-6 tw-py-24">
        <div className="tw-max-w-xl tw-mx-auto">
          <form onSubmit={formik.handleSubmit}>
            <div className="tw-gap-2 tw-grid tw-grid-cols-6">
              <div className="tw-col-span-4">
                <input
                  className="numeric tw-border tw-border-gray-300 tw-outline-none tw-p-2 tw-rounded-lg tw-text-gray-900 tw-w-full"
                  name="id"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  placeholder="Enter your space ID"
                  value={formik.values.id}
                  type="number"
                />
              </div>

              <div className="tw-col-span-2">
                <button
                  className="tw-bg-primary tw-font-medium tw-px-4 tw-py-2 tw-rounded-lg tw-text-white tw-w-full"
                  type="submit"
                >
                  <FontAwesomeIcon
                    className="text-gray-500"
                    icon={faDownload}
                  />
                  &nbsp; Files
                </button>
              </div>
            </div>
          </form>

          <button
            className="tw-border tw-border-primary tw-font-medium tw-mt-6 tw-px-4 tw-py-2 tw-rounded-lg tw-text-primary tw-w-full hover:tw-bg-primary hover:tw-text-white"
            onClick={() => {
              const id: number = Math.round(
                Math.random() * (1000000 - 100000) + 100000
              );

              navigate(`/spaces/${id}`);
            }}
          >
            <FontAwesomeIcon className="text-gray-500" icon={faUpload} />
            &nbsp;Upload your files
          </button>

          <div className="tw-absolute tw-bottom-0 tw-left-0 tw-w-full">
            <div className="tw-bg-gray-50 tw-flex tw-gap-2 tw-justify-center tw-items-center tw-py-3 tw-text-sm">
              <img
                alt="Icon"
                src="/images/icon.png"
                style={{ height: "24px" }}
              />
              <div>
                {new Intl.NumberFormat("en-US", {
                  maximumFractionDigits: 0,
                }).format(
                  ((new Date().getTime() - new Date(2022, 8, 4).getTime()) /
                    86400000) *
                    3650
                )}{" "}
                files uploaded
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
