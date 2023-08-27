import type { RadioChangeEvent } from 'antd';
import { Radio, Space } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SET_ACTIVE_QUERY } from '../store/root';

const Switcher = () => {
  const [value, setValue] = useState<string>('movie');
  const dispatch = useDispatch();

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
    dispatch(
      SET_ACTIVE_QUERY({
        type: e.target.value,
      })
    );
  };
  return (
    <Radio.Group onChange={onChange} value={value}>
      <Space>
        <Radio value="movie">Movie</Radio>
        <Radio value="series">Series</Radio>
      </Space>
    </Radio.Group>
  );
};

export default Switcher;
