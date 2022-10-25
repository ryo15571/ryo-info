import { Storage } from "aws-amplify";

export const CloudFrontUrl = "https://d3ljwfzmgmfy08.cloudfront.net/public/";

export const BunketUrl =
  "https://celestialbucket110221-dev.s3.ap-southeast-1.amazonaws.com/public/";

export const FunctionGetPathUrl = (key) => {
  if (key) {
    return `${CloudFrontUrl}${key}`;
  } else {
    return;
  }
};

export const FunctionGetImageFromS3 = (key) => {
  if (key) {
    return `${BunketUrl}${key}`;
  } else {
    return;
  }
};

export const FunctionChangePath = (key) => {
  if (key) {
    return `${key.replace(CloudFrontUrl, BunketUrl)}`;
  } else {
    return;
  }
};

export const FunctionUploadFileAws = async (file) => {
  if (file?.size) {
    const keyUpload = `${new Date().getTime()}_${file?.name}`;
    await Storage.put(keyUpload, file);
    return keyUpload;
  } else {
    return file;
  }
};
