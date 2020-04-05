// src/containers/CameraScreen.js
import React, {Component} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import Toast from 'react-native-tiny-toast';
import {RNCamera} from 'react-native-camera';
import Upload from 'react-native-background-upload';

import Camera from '../components/Camera/Camera';
import CameraControls from '../components/Camera/CameraControls';
import CameraSettings from '../components/Camera/CameraSettings';
import ViewFinder from '../components/Camera/ViewFinder';
import ImagePreview from '../components/Camera/Preview';

export default class CameraScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flashMode: RNCamera.Constants.FlashMode.off,
      flashIcon: 'flash-off',
      zoom: 0,
      zoomValue: '1x',
      showPreview: false,
      imagePath: '',
      uploads: [],
    };
    StatusBar.setHidden(true);
  }

  _toggleFlash = () => {
    console.log('toggle');
    let newFlashMode;
    let icon;
    const {auto, on, off} = RNCamera.Constants.FlashMode;
    switch (this.state.flashMode) {
      case on:
        newFlashMode = off;
        icon = 'flash-off';
        break;
      case auto:
        newFlashMode = on;
        icon = 'flash';
        break;
      case off:
        newFlashMode = auto;
        icon = 'flash-auto';
        break;
    }
    this.setState({
      flashMode: newFlashMode,
      flashIcon: icon,
    });
  };

  _toggleZoom = () => {
    this.setState({
      zoom: this.state.zoom === 0 ? 0.002 : 0,
      zoomValue: this.state.zoomValue === '2x' ? '1x' : '2x',
    });
  };

  _takePicture = async () => {
    Toast.showLoading('Capturing');
    if (this.camera) {
      const options = {
        quality: 0.8,
        width: 2056,
        fixOrientation: true,
      };
      const data = await this.camera.takePictureAsync(options);
      console.log('data', data);
      this.setState({imagePath: data.uri, showPreview: true});
    }
    Toast.hide();
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <CameraSettings
          onClosePress={() => {}}
          toggleFlash={() => this._toggleFlash()}
          flashIcon={this.state.flashIcon}
        />
        <ViewFinder>
          <Camera
            cameraRef={(ref) => {
              this.camera = ref;
            }}
            flashMode={this.state.flashMode}
            zoom={this.state.zoom}
          />
        </ViewFinder>
        <CameraControls
          onCapturePress={() => this._takePicture()}
          toggleZoom={() => this._toggleZoom()}
          onCountPress={() => {}}
          zoomValue={this.state.zoomValue}
        />
        <ImagePreview
          visible={this.state.showPreview}
          source={{uri: this.state.imagePath}}
          close={() => this.setState({showPreview: false})}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
