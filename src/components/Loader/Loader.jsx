import Rive from 'rive-react';
import loaders from '../../assets/animations/loader.riv';

const Loader = () => {
  return (
    <div
      style={{
        position: 'absolute',
        zIndex: '3',
        width: '100%',
        height: '200px',
        display: 'flex',
        justifyContent: 'center',
        maxWidth: '960px',
      }}
    >
      <div
        style={{
          width: '250px',
          height: '250px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'centerdisplay',
          backgroundColor: '#8d8e88bb',
          borderRadius: '50%',
        }}
      >
        <Rive
          style={{ width: '180px', height: '180px' }}
          src={loaders}
          animations="Animation 1"
          autoPlay={true}
        />
      </div>
    </div>
  );
};

export default Loader;
