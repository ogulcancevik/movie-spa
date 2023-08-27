import { Input } from 'antd';
import { debounce } from 'lodash';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { SET_ACTIVE_QUERY } from '../store/root';
const { Search } = Input;
const SearchBar = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>('Pokemon');
  const debouncedQuuery = useCallback(
    debounce((q) => {
      dispatch(
        SET_ACTIVE_QUERY({
          s: q,
          page: 1,
          type: 'movie',
        })
      );
    }, 500),
    []
  );
  useEffect(() => {
    debouncedQuuery(value);
  }, [value]);
  return (
    <Search
      placeholder="Search"
      onSearch={(value) => setValue(value)}
      onChange={(e) => setValue(e.target.value)}
      value={value}
      enterButton
      size="large"
    />
  );
};

export default SearchBar;
