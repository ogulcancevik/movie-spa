import { Table } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { rootSelector } from '../store/root';
import { SET_ACTIVE_QUERY, SET_SELECTED_ID } from '../store/root';
import { getData } from '../store/actions';
import { useAppDispatch } from '../store';
import { ISearch } from '../store/types';
import columns from './columns';

const DataGrid = () => {
  const { searchData, activeQuery } = useSelector(rootSelector);
  const dispatch = useDispatch();
  const thunkDisatch = useAppDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    if (!activeQuery.s) return;
    thunkDisatch(getData());
    setIsLoading(false);
  }, [activeQuery]);

  const onPageChange = (page: number) => {
    dispatch(SET_ACTIVE_QUERY({ page }));
  }
  const handleRowClick = (record: ISearch) => {
    const { imdbID } = record;
    dispatch(SET_SELECTED_ID(imdbID));
    navigate(`/detail?id=${imdbID}`, { replace: true });
  };
  return (
    <Table
      rowKey="imdbID"
      dataSource={searchData.Search}
      columns={columns}
      onRow={(record) => {
        return {
          onClick: () => handleRowClick(record as unknown as ISearch),
        };
      }}
      pagination={{
        total: searchData.totalResults,
        showSizeChanger: false, // omdbapi not support page size.
        onChange: (page) => onPageChange(page),
      }}
      loading={isLoading}
    />
  );
};

export default DataGrid;
