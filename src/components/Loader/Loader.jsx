import { Watch } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Watch
      height="80"
      width="80"
      radius="48"
      color="#4fa94d"
      ariaLabel="watch-loading"
      wrapperStyle={{ justifyContent: 'center', position: 'absolute' }}
      wrapperClassName=""
      visible={true}
    />
  );
};

export default Loader;
