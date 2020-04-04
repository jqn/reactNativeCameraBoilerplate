import React from 'react';
import {StyleSheet, View} from 'react-native';

import useRatio from '../../hooks/useRatio';
import useDeviceOrientation from '../../hooks/useDeviceOrientation';

const ViewFinder = ({children}) => {
  const deviceOrientation = useDeviceOrientation();
  const ratio = useRatio();
  return (
    <View
      style={
        deviceOrientation === 'portrait'
          ? styles.portraitContainer
          : styles.landscapeContainer
      }>
      <View style={styles.header} />
      <View style={ratio}>{children}</View>
      <View
        style={
          deviceOrientation === 'portrait' ? styles.footer : styles.rightSideBar
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {flex: 1, backgroundColor: '#232325'},
  footer: {flex: 1.2, backgroundColor: '#232325'},
  rightSideBar: {flex: 1.33, backgroundColor: '#232325'},
  portraitContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  landscapeContainer: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default ViewFinder;
