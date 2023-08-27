import { motion } from 'framer-motion';
import DataGrid from '../components/DataGrid';
import SearchBar from '../components/SearchBar';
import Switcher from '../components/Switcher';
import YearBar from '../components/YearBar';
import '../styles/homeView.css';
const HomeView = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="home-view"
    >
      <div className="home-view__filters">
        <Switcher />
        <SearchBar />
        <YearBar />
      </div>
      <DataGrid />
    </motion.div>
  );
};

export default HomeView;
