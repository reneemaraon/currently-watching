import { createContext, useContext, useEffect, useState } from 'react';
import {
  GET_LIST,
  //   GET_LIST_COMMENTS,
  //   POST_COMMENT_MUTATION,
  //   POST_LIST_LIKE_MUTATION,
  //   DELETE_LIST_LIKE_MUTATION,
  //   deleteCommentRequest,
} from '../api/listApi';
import { useQuery, useMutation } from '@apollo/client';
import findCursor from '../utils/getCursorFromList';

const listDetailContext = createContext();

export const useListDetailContext = () => {
  const context = useContext(listDetailContext);
  if (!context) throw new Error('List Detail Provider is missing');
  return context;
};

export const ListDetailProvider = ({ children }) => {
  const [list, setList] = useState(null);
  const [listId, setListId] = useState(null);

  //   const [comments, setComments] = useState({
  //     comments: [],
  //     totalCount: 0,
  //   });
  //   const [commentBody, setCommentBody] = useState('');
  //   const [cursor, setCursor] = useState(new Date());

  //   const [postCommentRequest, { loading: postLoading, error: postError }] =
  //     useMutation(POST_COMMENT_MUTATION);

  //   const [postListLikeRequest, { error: likeError, data: likedListData }] =
  //     useMutation(POST_LIST_LIKE_MUTATION);

  //   const [deleteListLikeRequest, { error: deleteLikeError }] = useMutation(
  //     DELETE_LIST_LIKE_MUTATION
  //   );

  const { loading, error, data, refetch } = useQuery(GET_LIST, {
    variables: { id: listId },
  });

  //   const {
  //     loading: commentsLoading,
  //     error: commentsError,
  //     data: commentsData,
  //     refetch: refetchComments,
  //   } = useQuery(GET_LIST_COMMENTS, {
  //     variables: {
  //       id: listId,
  //       filter: {
  //         limit: ITEMS_PER_PAGE,
  //         cursorField: SORT_FIELD,
  //         cursorValue: cursor,
  //       },
  //     },
  //   });

  //   const postComment = async () => {
  //     try {
  //       const response = await postCommentRequest({
  //         variables: {
  //           listId,
  //           commentBody,
  //         },
  //       });

  //       if (response) {
  //         const newComment = response.data.createComment;
  //         setComments((prevComments) => ({
  //           ...prevComments,
  //           totalCount: comments.totalCount + 1,
  //           comments: [newComment, ...prevComments.comments],
  //         }));

  //         setCommentBody('');
  //       }
  //     } catch (error) {
  //       console.log('error');
  //     }
  //   };

  //   const deleteComment = async (id) => {
  //     const response = await deleteCommentRequest(listId, id);

  //     if (response) {
  //       setComments({
  //         ...comments,
  //         totalCount: comments.totalCount - 1,
  //         comments: comments.comments.filter((comment) => comment._id !== id),
  //       });

  //       return response;
  //     }
  //   };

  //   const postLike = async () => {
  //     const { data } = await postListLikeRequest({
  //       variables: { listId },
  //     });
  //   };

  //   const deleteLike = async () => {
  //     const { data } = await deleteListLikeRequest({
  //       variables: { listId },
  //     });
  //   };

  //   const updateCursor = () => {
  //     setCursor(findCursor(comments.comments, SORT_FIELD));
  //   };

  //   const loadNextPage = () => {
  //     updateCursor();
  //     refetchComments();
  //   };

  //   const refreshList = () => {
  //     setComments({
  //       totalCount: 0,
  //       comments: [],
  //     });
  //     setCursor(null);
  //     refetchComments();
  //   };

  //   useEffect(() => {
  //     if (listId) {
  //       refetch();
  //       refetchComments();
  //     }
  //   }, [listId]);

  useEffect(() => {
    if (data) {
      setList(data.list);
    }
  }, [data]);

  //   useEffect(() => {
  //     if (commentsData) {
  //       const { comments: dataComments, totalCount } = commentsData.listComments;
  //       const { comments: currentComments } = comments;
  //       if (
  //         findCursor(currentComments, SORT_FIELD) !=
  //         findCursor(dataComments, SORT_FIELD)
  //       ) {
  //         setComments((prevComments) => ({
  //           totalCount,
  //           comments: [...prevComments.comments, ...dataComments],
  //         }));
  //       }
  //     }
  //   }, [commentsData]);

  return (
    <listDetailContext.Provider
      value={{
        // commentsLoading,
        // postLoading,
        // commentsError,
        // comments,
        // commentBody,
        // setCommentBody,
        // postComment,
        // deleteComment,
        setList,
        setListId,
        list,
        error,
        refetch,
        loading,
        // postLike,
        // refreshList,
        // loadNextPage,
        // deleteLike,
        // heartError: likeError || deleteLikeError,
        // likedListData,
      }}
    >
      {children}
    </listDetailContext.Provider>
  );
};
