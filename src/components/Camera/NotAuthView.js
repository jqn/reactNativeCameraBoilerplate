// src/components/Camera/NotAuthView.js
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import PropTypes from 'prop-types';
import AntDesign from 'react-native-vector-icons/AntDesign';

const NotAuthView = ({onClosePress, message}) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <AntDesign
        name="close"
        backgroundColor="#FFF"
        color="#000"
        size={40}
        onPress={onClosePress}
        style={styles.icon}
      />
    </View>
    <View style={styles.section}>
      <Image
        source={require('../../images/no_cam_auth.png')}
        style={styles.image}
      />
      <Text style={styles.bodyText}>{message}</Text>
    </View>
    <View style={styles.footer} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  section: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    alignSelf: 'center',
    marginHorizontal: 8,
  },
  image: {
    margin: 16,
  },
  bodyText: {
    fontFamily: 'System',
    fontSize: 24,
  },
  footer: {
    flex: 0.15,
  },
});

NotAuthView.defaultProps = {
  message: 'Camera Not Authorized',
  onClosePress: () => {},
};

NotAuthView.propTypes = {
  message: PropTypes.string,
  onClosePress: PropTypes.func,
};

export default NotAuthView;
