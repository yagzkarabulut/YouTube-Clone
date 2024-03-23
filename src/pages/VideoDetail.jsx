import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getData } from "../helpers/getData";
import ReactPlayer from "react-player";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { millify } from "millify";
import TextArea from "../components/TextArea";
import Loader from "./../components/Loader";
import VideoCard from "./../components/VideoCard";
import Comment from "../components/Comment";

const VideoDetail = () => {
  const [video, setVideo] = useState(null);
  // 1-arama parametresine erişmek içn kurulum
  const [searchParams] = useSearchParams();

  // 2-urlden arama parametresini al
  const id = searchParams.get("v");

  // 3-idsini bilinen videonun APİ den  alıcaz
  axios;
  useEffect(() => {
    getData(`/video/info?id=${id}&extend=1`).then((data) => setVideo(data));
  }, [searchParams]);

  return (
    <div className="detail-page h-screen overflow-auto p-5">
      {/* video içeriği */}
      <div>
        <ReactPlayer
          className={"rounded"}
          controls
          playing
          light
          width={"100%"}
          height={"50vh"}
          url={`https://www.youtube.com/watch?v=${id}`}
        />

        {!video ? (
          <p>Yükleniyor...</p>
        ) : (
          <>
            {/* başlık */}
            <h1 className="my-3 text-xl font-bold">{video.title}</h1>
            {/* kanal bilgileri */}
            <div className="flex justify-between">
              {/* sol */}
              <div className="flex items-center gap-4">
                <img
                  className="rounded-full w-12 h-12"
                  src={video.channelThumbnail[0].url}
                />
                <div>
                  <h4 className="font-bold ">{video.channelTitle}</h4>
                  <p className="text-gray-400">{video.subscriberCountText}</p>
                </div>

                <button className="bg-white  rounded-full text-black px-3 h-9 transition hover:bg-gray-400">
                  Abone ol
                </button>
              </div>
              {/* sağ */}
              <div className="flex items-center bg-[#272727] rounded-full cursor-pointer">
                <div className="flex item-center gap-3 py-2 px-4 border-r">
                  <AiFillLike className="text-2xl" />
                  <p>{millify(video.likeCount)}</p>
                </div>
                <div className="py-2 px-4 text-2xl">
                  <AiFillDislike />
                </div>
              </div>
            </div>
            {/* video bilgileri */}
            <div className="bg-[#272727] rounded p-2 mt-4 cursor-pointer hover:bg-opacity-80">
              <div className="flex gap-3">
                <p>{millify(video.viewCount)} görüntülenme</p>
                <p>{new Date(video.publishDate).toLocaleDateString()}</p>
              </div>

              <TextArea text={video.description} />
            </div>
            {/* yorumlar */}
            <div>
              <Comment video={video} />
            </div>
          </>
        )}
      </div>
      {/* alakalı içerikler */}
      <div className="flex flex-col gap-5 p-1 md:p-7 max-md:mt-6">
        {!video ? (
          <Loader />
        ) : (
          video.relatedVideos.data.map(
            (item) =>
              item.type === "video" && <VideoCard video={item} isRow={true} />
          )
        )}
      </div>
    </div>
  );
};

export default VideoDetail;
