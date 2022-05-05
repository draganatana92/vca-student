import React, { Fragment, useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.min.css";
import { VideoOneData } from "@/data";

const VideoOne = ({ data }) => {
  const { url, thumnail, id, player_id } = data;
  const [isOpen, setOpen] = useState(false);

  console.log(player_id + '/' + id);
  return (
    <Fragment>
      <section className="video_promotion_area text-center">
        <div className="overlay" style={{ position: 'absolute', top: 0, width: '100%', height: '100%' }}>
          <img style={{ width: '100%', height: '100%' }} src={thumnail}></img>
        </div>
        <div className="overlay">
          <a
            onClick={(e) => {
              e.preventDefault();
              setOpen(true);
            }}
            href="#"
            className="video-img"
            title="Play Icon"
            id="videolink"
          >
            <span className="video-play">
              <i className="fa fa-play"></i>
            </span>
          </a>
        </div>
      </section>
      {typeof window !== "undefined" ? (
        <ModalVideo
          channel="custom"
          autoplay
          ratio="16:9"
          style={{ height: 300 }}
          isOpen={isOpen}
          //api={true}
          url={url}
          //videoId={player_id + '/' + id}
          //player_id={id}
          onClose={() => setOpen(false)}
        />
      ) : null}
    </Fragment>
  );
};

export default VideoOne;
