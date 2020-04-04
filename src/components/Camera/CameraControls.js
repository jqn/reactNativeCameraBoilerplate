// src/components/Camera/CameraControls.js
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

import useDeviceOrientation from '../../hooks/useDeviceOrientation';

const CameraControls = ({onCapturePress, toggleZoom, count, zoomValue}) => {
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
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={toggleZoom} style={styles.roundButton}>
            <Text style={styles.toggleText}>{zoomValue}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={onCapturePress} style={styles.button}>
          <Ionicons
            name="ios-radio-button-on"
            backgroundColor="#FFF"
            color="#FFF"
            size={deviceOrientation === 'portrait' ? 58 : 72}
            style={styles.icon}
          />
        </TouchableOpacity>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.counter}>
            <Text style={styles.counterText}>{count}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  portraitContainer: {
    backgroundColor: '#22A9E0',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    zIndex: 100,
  },
  landscapeContainer: {
    backgroundColor: '#22A9E0',
    position: 'absolute',
    top: 0,
    right: 0,
    height: '100%',
    zIndex: 100,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingVertical: 8,
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
  counter: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterText: {
    fontFamily: 'System',
    fontWeight: 'bold',
    fontSize: 32,
    color: '#FFF',
    alignSelf: 'center',
  },
  buttonContainer: {
    width: 60,
    height: 60,
    paddingLeft: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toggleText: {
    color: '#FFF',
    fontSize: 15,
    fontFamily: 'System',
  },
  roundButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 30,
    borderWidth: 2,
    borderColor: '#FFF',
    borderRadius: 20,
  },
});

CameraControls.defaultProps = {
  count: 0,
  zoomValue: '1x',
};

CameraControls.propTypes = {
  count: PropTypes.number,
  zoomValue: PropTypes.string,
};

export default CameraControls;
