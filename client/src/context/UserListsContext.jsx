import { createContext, useContext, useEffect, useState } from 'react';
import {
  CREATE_LIST_MUTATION,
  GET_USER_LISTS,
  UPDATE_LIST_MUTATION,
  DELETE_LIST_MUTATION,
} from '../api/listApi';
import { useMutation, useQuery } from '@apollo/client';
import findCursor from '../utils/getCursorFromList';

const ITEMS_PER_PAGE = 5;
const SORT_FIELD = 'createdAt';

const userListsContext = createContext();

export const useUserListsContext = () => {
  const context = useContext(userListsContext);
  if (!context) throw new Error('User Lists Provider is missing');
  return context;
};

export const UserListsProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [userLists, setUserLists] = useState({
    totalCount: 0,
    lists: [],
  });

  const [cursor, setCursor] = useState(new Date());

  const { loading, data, error, refetch } = useQuery(GET_USER_LISTS, {
    variables: {
      user: userId,
      filter: {
        limit: ITEMS_PER_PAGE,
        cursorField: SORT_FIELD,
        cursorValue: cursor,
      },
    },
  });

  const [updateListRequest, { data: updateData, error: updateError }] =
    useMutation(UPDATE_LIST_MUTATION);

  const [createListRequest] = useMutation(CREATE_LIST_MUTATION);

  const [deleteListRequest, { data: deleteData }] =
    useMutation(DELETE_LIST_MUTATION);

  const updateCursor = () => {
    setCursor(findCursor(userLists.lists, SORT_FIELD));
  };

  const loadNextPage = () => {
    updateCursor();
    refetch();
  };

  const refreshList = () => {
    setUserLists({
      totalCount: 0,
      lists: [],
    });
    setCursor(null);
    refetch();
  };

  const addList = () => {
    setUserLists((prevList) => ({
      ...prevList,
      totalCount: prevList.totalCount + 1,
      lists: [
        {
          _id: 'temp',
          items: [],
          name: '',
        },
        ...prevList.lists,
      ],
    }));
  };

  const createList = async (index, body) => {
    const response = await createListRequest({
      variables: body,
    });

    setUserLists((prevLists) => {
      const lists = {
        ...prevLists,
        lists: prevLists.lists.map((item, i) => {
          if (i == index) {
            return response.data.createList;
          }
          return item;
        }),
      };
      return lists;
    });
  };

  const updateList = async (listId, body) => {
    await updateListRequest({
      variables: { listId, body },
    });
  };

  const deleteList = async (listId) => {
    await deleteListRequest({
      variables: { listId },
    });
  };

  const deleteListOnIndex = (index) => {
    setUserLists((prevLists) => ({
      ...prevLists,
      lists: prevLists.lists.filter((list, i) => index != i),
    }));
  };

  useEffect(() => {
    if (updateData) {
      setUserLists((prevList) => {
        const newLists = prevList.lists.map((list) => {
          if (list._id == updateData.updateList._id) {
            return updateData.updateList;
          }
          return list;
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
      const { lists: dataLists, totalCount } = data.userLists;
      const { lists: currentLists } = userLists;
      if (
        findCursor(currentLists, SORT_FIELD) !=
        findCursor(dataLists, SORT_FIELD)
      ) {
        setUserLists((prevLists) => ({
          totalCount,
          lists: [...prevLists.lists, ...dataLists],
        }));
      }
    }
  }, [data]);

  useEffect(() => {
    if (deleteData) {
      const {
        deleteList: { _id: id },
      } = deleteData;
      const updatedLists = userLists.lists.filter((list) => list._id != id);

      setUserLists({
        ...userLists,
        totalCount: userLists.totalCount - 1,
        lists: updatedLists,
      });
    }
  }, [deleteData]);

  return (
    <userListsContext.Provider
      value={{
        error,
        loading,
        userLists,
        loadNextPage,
        refetch,
        refreshList,
        updateList,
        addList,
        createList,
        deleteListOnIndex,
        deleteList,
        setUserId,
      }}
    >
      {children}
    </userListsContext.Provider>
  );
};
