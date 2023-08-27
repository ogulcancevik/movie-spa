import { Input } from 'antd';
import { debounce } from 'lodash';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { SET_ACTIVE_QUERY } from '../store/root';
const { Search } = Input;
const SearchBar = () => {
  const dispatch = useDispatch();
  const debouncedQuuery = useCallback(
    debounce((q) => {
      dispatch(SET_ACTIVE_QUERY({
        y: q,
      }))
    }, 500),
    []
  );
  return (
    <Search
      placeholder="Search a Year"
      onSearch={(value) => debouncedQuuery(value)}
      onChange={(e) => debouncedQuuery(e.target.value)}
      enterButton
      size='large'
    />
  );
};

export default SearchBar;
