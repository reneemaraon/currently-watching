import { createContext, useContext } from "react";
import {
  POST_SHOW_WATCH_MUTATION,
  DELETE_SHOW_WATCH_MUTATION,
} from "../api/showsApi";
import { useMutation } from "@apollo/client";

const watchShowContext = createContext();

export const useWatchShowContext = () => {
  const context = useContext(watchShowContext);
  if (!context) throw new Error("Watch Show Provider is missing");
  return context;
};

export const WatchShowProvider = ({ children }) => {
  const [postShowWatchRequest, { error: watchError, data: watchedShowData }] =
    useMutation(POST_SHOW_WATCH_MUTATION);

  const [deleteShowWatchRequest, { error: deleteWatchError }] = useMutation(
    DELETE_SHOW_WATCH_MUTATION
  );

  const postWatch = async (showId) => {
    const { data } = await postShowWatchRequest({
      variables: {
        showId,
      },
    });

    return data;
  };

  const deleteWatch = async (showId) => {
    const { data } = await deleteShowWatchRequest({
      variables: {
        showId,
      },
    });
    return data;
  };

  return (
    <watchShowContext.Provider
      value={{
        postWatch,
        deleteWatch,
        watchError,
        deleteWatchError,
      }}
    >
      {children}
    </watchShowContext.Provider>
  );
};
