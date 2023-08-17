import Rive from 'rive-react';
import loaders from '../../assets/animations/loader.riv';

const Loader = () => {
  return (
    <div
      style={{
        position: 'absolute',
        // left: '50%',
        // top: '50%',
        // transform: 'translate(-50%, -50%)',
        zIndex: '3',
        // boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
        // borderRadius: '50%',
      }}
    >
      <Rive
        style={{ width: '180px', height: '180px' }}
        src={loaders}
        animations="Animation 1"
        autoPlay={true}
      />
    </div>
  );
};

export default Loader;
