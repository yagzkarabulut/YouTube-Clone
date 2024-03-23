import millify from "millify";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const VideoCard = ({ video, isRow }) => {
  const [isHover, setIsHOver] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/watch?v=${video.videoId}`)}
      onMouseEnter={() => setIsHOver(true)}
      onMouseLeave={() => setIsHOver(false)}
      className={`${isRow ? "row" : ""} cursor-pointer`}
    >
      {/* resim alanı */}
      <div className="flex gap-4 mt-5">
        <img
          className="v-pic rounded-lg w-full h-full"
          src={
            isHover && video.richThumbnail
              ? video.richThumbnail[0].url
              : video.thumbnail[video.thumbnail.length - 1].url
          }
          alt="video banner"
        />
      </div>
      {/* alt detay alanı */}
      <div className="mt-5 flex gap-4 ">
        <img
          className="c-pic w-14 h-14 rounded-full"
          src={
            video.channelThumbnail && video.channelThumbnail.length > 0
              ? video.channelThumbnail[0].url
              : ""
          }
          alt="channel picture"
        />
        <div>
          <h4
            className={`${isRow ? "line-clamp-1" : "line-clamp-2"} font-bold`}
          >
            {video.title}
          </h4>
          <p>{video.channelTitle}</p>
          <div className="detail flex gap-2">
            <p>
              <span>{millify(Number(video.viewCount))}</span>
              <span> Görüntülenme</span>
            </p>
            <p>{video.publishedTimeText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
