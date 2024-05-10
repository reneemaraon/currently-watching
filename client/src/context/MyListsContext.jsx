import { createContext, useContext, useEffect, useState } from 'react';
import { GET_MY_LISTS, UPDATE_LIST_MUTATION } from '../api/listApi';
import { useMutation, useQuery } from '@apollo/client';
import findCursor from '../utils/getCursorFromList';

const ITEMS_PER_PAGE = 3;
const SORT_FIELD = 'createdAt';

const myListsContext = createContext();

export const useMyListsContext = () => {
  const context = useContext(myListsContext);
  if (!context) throw new Error('My Lists Provider is missing');
  return context;
};

export const MyListsProvider = ({ children }) => {
  const [myLists, setMyLists] = useState({
    totalCount: 0,
    lists: [],
  });

  const [cursor, setCursor] = useState(new Date());

  const { loading, data, error, refetch } = useQuery(GET_MY_LISTS, {
    variables: {
      filter: {
        limit: ITEMS_PER_PAGE,
        cursorField: SORT_FIELD,
        cursorValue: cursor,
      },
    },
  });

  const [updateListRequest, { data: updateData, error: updateError }] =
    useMutation(UPDATE_LIST_MUTATION);

  const updateCursor = () => {
    setCursor(findCursor(myLists.lists, SORT_FIELD));
  };

  const loadNextPage = () => {
    updateCursor();
    refetch();
  };

  const refreshList = () => {
    setMyLists({
      totalCount: 0,
      lists: [],
    });
    setCursor(null);
    refetch();
  };

  const updateList = async (listId, body) => {
    await updateListRequest({
      variables: { listId, body },
    });
  };

  useEffect(() => {
    if (updateData) {
      console.log(updateData);

      setMyLists((prevList) => {
        const newLists = prevList.lists.map((list) => {
          if (list._id == updateData.updateList._id) {
            return updateData.updateList;
          }
          return;
        });

        return {
          ...prevList,
          lists: newLists,
        };
      });
    }
  }, [updateData]);

  useEffect(() => {
    if (data) {
      const { lists: dataLists, totalCount } = data.myLists;
      const { lists: currentLists } = myLists;
      if (
        findCursor(currentLists, SORT_FIELD) !=
        findCursor(dataLists, SORT_FIELD)
      ) {
        setMyLists((prevLists) => ({
          totalCount,
          lists: [...prevLists.lists, ...dataLists],
        }));
      }
    }
  }, [data]);

  //   const removeReviewFromUserReviewList = (id) => {
  //     const reviewIndex = userReviews.reviews.findIndex(
  //       (review) => review._id === id
  //     );
  //     if (reviewIndex !== -1) {
  //       const updatedReviews = userReviews.reviews.filter(
  //         (review) => review._id !== id
  //       );
  //       setMyLists({
  //         ...userReviews,
  //         totalCount: userReviews.totalCount - 1,
  //         reviews: updatedReviews,
  //       });
  //     }
  //   };

  return (
    <myListsContext.Provider
      value={{
        error,
        loading,
        myLists,
        loadNextPage,
        refetch,
        refreshList,
        updateList,
        // removeReviewFromUserReviewList,
      }}
    >
      {children}
    </myListsContext.Provider>
  );
};
