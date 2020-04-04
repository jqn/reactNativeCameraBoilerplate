// src/component/Camera/Camera.js
import React from 'react';
import {StyleSheet} from 'react-native';
import {RNCamera} from 'react-native-camera';
import PropTypes from 'prop-types';
import NotAuthView from './NotAuthView';
import PendingAuthView from './PendingAuthView';

const Camera = ({children, cameraRef, whiteBalanceMode, flashMode, zoom}) => {
  return (
    <RNCamera
      ref={cameraRef}
      style={styles.container}
      flashMode={flashMode}
      whiteBalance={whiteBalanceMode}
      captureAudio={false}
      zoom={zoom}
      notAuthorizedView={<NotAuthView />}
      pendingAuthorizationView={<PendingAuthView />}>
      {children}
    </RNCamera>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

Camera.defaultProps = {
  children: null,
  cameraRef: () => null,
  whiteBalanceMode: RNCamera.Constants.WhiteBalance.auto,
  flashMode: RNCamera.Constants.FlashMode.auto,
  zoom: 0,
};

Camera.propTypes = {
  children: PropTypes.node,
  cameraRef: PropTypes.func,
  whiteBalanceMode: PropTypes.number,
  flashMode: PropTypes.number,
  zoom: PropTypes.number,
};

export default Camera;
