// src/containers/CameraScreen.js
import React, {Component} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import Camera from '../components/Camera/Camera';
import CameraControls from '../components/Camera/CameraControls';
import CameraSettings from '../components/Camera/CameraSettings';

import ViewFinder from '../components/Camera/ViewFinder';

export default class CameraScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    StatusBar.setHidden(true);
  }

  _takePicture = async () => {
    if (this.camera) {
      const options = {
        quality: 0.8,
        width: 2056,
        fixOrientation: true,
      };
      const data = await this.camera.takePictureAsync(options);
      console.log('data', data);
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <CameraSettings />
        <ViewFinder>
          <Camera
            cameraRef={(ref) => {
              this.camera = ref;
            }}
          />
        </ViewFinder>
        <CameraControls onCapturePress={() => this._takePicture()} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
