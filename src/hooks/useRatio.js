import {useState, useEffect} from 'react';
import {Dimensions} from 'react-native';

function useRatio() {
  const [ratio, setRatio] = useState(null);

  useEffect(() => {
    function updateState() {
      const {height, width} = Dimensions.get('window');
      if (height > width) {
        // Portrait
        let ratioHeight = (3 * width) / 4;
        setRatio({height: ratioHeight, width: width});
      } else {
        // Landscape
        let ratioWidth = (4 * height) / 3;
        setRatio({height: height, width: ratioWidth});
      }
    }

    updateState(); // for initial render
    Dimensions.addEventListener('change', updateState);
    return () => Dimensions.removeEventListener('change', updateState);
  }, []);

  return ratio;
}

export default useRatio;
