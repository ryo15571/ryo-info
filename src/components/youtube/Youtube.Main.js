import React from "react";
import YouTube from "react-youtube";

const YoutubeMain = ({
  videoId = "lwc-RFh6SbU",
  style = {},
  className = "",
  classNameDiv = "",
}) => {
  const opts = {
    playerVars: {
      height: "390",
      width: "640",
      autoplay: false,
    },
  };

  return (
    <div style={style} className={classNameDiv}>
      <YouTube className={className} videoId={videoId} opts={opts} />
    </div>
  );
};

export default YoutubeMain;

{
  /* <YoutubeMain videoId={"gdfgd"} ryo={"dfsd"}/> */
}
