import * as React from "react";
import { FunctionAddUrlToFile } from "radium-omnibus";

const TEXT_UPLOAD_FILE = "อัพโหลดไฟล์";

const FieldUploadFile = ({
  name,
  value,
  setValue,
  getPathUrl,
  received,
  clearForm,
  isLoad,
}) => {
  React.useEffect(() => {
    if (isLoad) return;
    if (clearForm) {
      clearForm();
    }
  }, [received]);

  const onClickUpLoadImage = async ({ target: { files } }) => {
    if (files?.length > 0) {
      const file = await files[0];
      setValue(file);
    } else {
      return;
    }
  };

  const id = new Date().getTime();

  return (
    <React.Fragment>
      <label htmlFor={`index-file-${name}-${id}`}>
        {value?.size > 0 ? (
          <img className={"my-5"} src={FunctionAddUrlToFile(value)} />
        ) : (
          [
            value ? (
              <img className={``} src={`${getPathUrl + value}`} />
            ) : (
              <React.Fragment />
            ),
          ]
        )}

        <div
          className={
            value
              ? "hidden"
              : "border w-28 h-10 text-center py-2 rounded-md cursor-pointer mt-5 bg-gray-100 hover:bg-gray-200"
          }
        >
          <div id={name} className={``}>
            {TEXT_UPLOAD_FILE}
          </div>
          <input
            style={{
              display: "none",
            }}
            // accept={accept}
            name={name}
            id={`index-file-${name}-${id}`}
            type="file"
            onChange={onClickUpLoadImage}
          />
        </div>
      </label>
    </React.Fragment>
  );
};

export default FieldUploadFile;
