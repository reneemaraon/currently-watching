import { useParams } from 'react-router-dom';
import { useListDetailContext } from '../../context/ListDetailContext';
import FullPageLoading from '../Common/FullPageLoading';
import List from '../UserLists/List';
import { useEffect } from 'react';

const ListDetail = () => {
  const { setListId, list, loading, error } = useListDetailContext();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setListId(id);
    }
  }, [id]);

  if (!list || loading) {
    return <FullPageLoading />;
  }
  return (
    <div className="w-full pb-96 max-w-[1200px] px-10 max-[900px]:px-8 max-[600px]:px-5 max-[400px]:px-2 pt-2 sm:pt-8 flex-col justify-start items-center gap-6 sm:gap-8 md:gap-12 inline-flex">
      <List list={list} />
    </div>
  );
};

export default ListDetail;
