import React from 'react';
import { Text, TouchableOpacity, ActivityIndicator } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

import { IButtonProps } from './@interfaces';

import { styles } from './styles';

export function Button({
  title,
  color,
  backgroundColor,
  icon,
  isLoading = false,
  ...rest
}: IButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }]}
      activeOpacity={0.7}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <>
          <AntDesign name={icon} size={24} style={styles.icon} />
          <Text style={[styles.title, { color, backgroundColor }]}>
            {title}
          </Text>
        </>
      )}
    </TouchableOpacity>
  );
}
