import CircularButton from "../Common/CircleButton";
import { HeartIcon, ShareIcon, WatchIcon } from "../Common/IconList";
import { useToast } from "../../context/ToastContext";
import { useShowDetailContext } from "../../context/ShowDetailContext";
import { useEffect, useState } from "react";

const ShowActions = () => {
  const [watched, setWatched] = useState(false);

  const { showToast } = useToast();
  const { show, deleteWatch, postWatch, watchError } = useShowDetailContext();

  useEffect(() => {
    if (watchError) {
      showToast("Something went wrong. Please try again.", "error");
      setLiked(!liked);
    }
  }, [watchError]);

  useEffect(() => {
    if (show) {
      setWatched(show.watched);
    }
  }, [show]);

  const onWatchClick = () => {
    if (watched) {
      deleteWatch();
      setWatched(false);
    } else {
      postWatch();
      setWatched(true);
    }
  };

  const copyPathToClipboard = () => {
    const fullPath = window.location.href;
    navigator.clipboard
      .writeText(fullPath)
      .then(() => {
        showToast("Copied link to clipboard", "info");
      })
      .catch((error) => {
        console.error("Failed to copy path to clipboard", error);
      });
  };

  return (
    <div className="justify-start items-start pb-2 gap-1.5 sm:gap-2.5 flex">
      <CircularButton active={watched} onClick={onWatchClick}>
        <WatchIcon />
      </CircularButton>
      <CircularButton onClick={copyPathToClipboard}>
        <ShareIcon />
      </CircularButton>
    </div>
  );
};

export default ShowActions;
