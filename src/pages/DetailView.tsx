import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Detail from '../components/Detail';
import { getDetail } from '../store/actions';
import { useAppDispatch } from '../store';
import '../styles/detail.css';
import { Spin } from 'antd';
import { motion } from 'framer-motion';
const DetailView = () => {
  const { search } = useLocation();
  const thunkDispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    const id = search.split('=')[1];
    thunkDispatch(getDetail(id));
    setIsLoading(false);
  }, []);
  if (!isLoading)
    return (
      <motion.div
        initial={{ y: '-100%', opacity: 0.1 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="detail-container"
      >
        <Detail />
        <div className="back-link-container">
          Go back to <a href="/">Home</a>
        </div>
      </motion.div>
    );
  return (
    <div className="spinner-container">
      <Spin size="large" />
    </div>
  );
};

export default DetailView;
