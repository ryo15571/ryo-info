import React from "react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import { CloudFrontUrl, FunctionUploadFileAws } from "../../utils/useFunction";

const onImageUploadBefore = (files, info, uploadHandler) => {
  if (!files && files === null && files === undefined && files < 0) return;
  (async () => {
    const responseStorage = await FunctionUploadFileAws(files[0]);
    const responseUpload = {
      result: [
        {
          url: `${CloudFrontUrl}${responseStorage}`,
          name: files[0].name,
          size: files[0].size,
        },
      ],
    };
    await uploadHandler(responseUpload);
  })();
  uploadHandler();
};

const FieldWysiwyg = ({ value, setValue }) => {
  const [loaded, setLoaded] = React.useState(false);

  React.useLayoutEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1000);
  }, []);

  if (loaded) {
    return (
      <SunEditor
        showToolbar={true}
        onChange={(event) => {
          setValue(event);
        }}
        setContents={value}
        setDefaultStyle="height: auto ;text-align:left"
        onImageUploadBefore={onImageUploadBefore}
        setOptions={{
          minHeight: 500,
          buttonList: [
            ["font", "fontSize", "align", "fontColor", "hiliteColor"],
            [
              "bold",
              "underline",
              "italic",
              "strike",
              "subscript",
              "superscript",
            ],
            ["horizontalRule", "list", "table"],
            ["image", "link"],
            ["undo", "redo"],
          ],
        }}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default FieldWysiwyg;
