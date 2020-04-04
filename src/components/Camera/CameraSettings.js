// src/components/Camera/CameraControls.js
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

import useDeviceOrientation from '../../hooks/useDeviceOrientation';

const CameraControls = ({onClosePress, toggleFlash}) => {
  const deviceOrientation = useDeviceOrientation();
  return (
    <View
      style={
        deviceOrientation === 'portrait'
          ? styles.portraitContainer
          : styles.landscapeContainer
      }>
      <View
        style={
          deviceOrientation === 'portrait'
            ? styles.rowContainer
            : styles.columnContainer
        }>
        <TouchableOpacity onPress={toggleFlash} style={styles.button}>
          <MaterialCommunityIcons
            name="flash"
            backgroundColor="#FFF"
            color="#FFF"
            size={35}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={onClosePress} style={styles.button}>
          <MaterialCommunityIcons
            name="close"
            backgroundColor="#FFF"
            color="#FFF"
            size={35}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  portraitContainer: {
    backgroundColor: '#22A9E0',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 100,
  },
  landscapeContainer: {
    backgroundColor: '#22A9E0',
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    zIndex: 100,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  columnContainer: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  icon: {
    alignSelf: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

CameraControls.defaultProps = {
  onClosePress: () => {},
  toggleFlash: () => {},
};

CameraControls.propTypes = {
  onClosePress: PropTypes.func,
  toggleFlash: PropTypes.func,
};

export default CameraControls;
