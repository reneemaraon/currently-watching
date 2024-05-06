import { createContext, useContext, useEffect, useState } from 'react';
import { GET_MY_LISTS } from '../api/listApi';
import { useQuery } from '@apollo/client';
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

  useEffect(() => {
    if (data) {
      const { lists: dataLists, totalCount } = data.myLists;
      const { lists: currentLists } = myLists;
      console.log('helloe');
      if (
        findCursor(currentLists, SORT_FIELD) !=
        findCursor(dataLists, SORT_FIELD)
      ) {
        console.log('setlist');
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
        loading,
        refreshList,
        // removeReviewFromUserReviewList,
      }}
    >
      {children}
    </myListsContext.Provider>
  );
};
