import React from 'react';
import { Text, ActivityIndicator } from 'react-native';
import { ModelOfTexts } from '../Models';
import { styles } from './styles';


const Body: React.FC<ModelOfTexts> = ({ theme, isTextElement = false, children }) => {
  return (
    <Text style={[styles(theme, isTextElement).base, styles(theme).body,]}>
      {children}
    </Text>
  )
}

const Title: React.FC<ModelOfTexts> = ({
  children,
  style,
  small = false,
  isTextElement = false,
  theme,
}) => {
  return (
    <Text style={[styles(theme, isTextElement).base, small
      ? styles(theme).titleSmall : styles(theme).title,
      style]}>
      {children}
    </Text>);
}

const SubTitle: React.FC<ModelOfTexts> = ({ theme, isTextElement = false, children }) => {
  return (
    <Text style={[styles(theme, isTextElement).base, styles(theme).subTitle,]}>
      {children}
    </Text>
  )
}

const Error: React.FC<ModelOfTexts> = ({ theme, children }) => {
  return (
    <Text style={[styles(theme).base, styles(theme).error]}>{children}</Text>
  );
}

const Button: React.FC<ModelOfTexts> = ({ isLoading, children, isOutline, theme }) => {
  return (
    isLoading
      ? (

        <ActivityIndicator color={theme.colors.textElements} />
      )
      : (
        <Text style={[styles(theme).base, !isOutline ? styles(theme).textElement : {}]}>{children}</Text>

      )
  );
}

const Link: React.FC<ModelOfTexts> = ({ theme, style, children }) => {
  return (
    <Text style={[styles(theme).base, styles(theme).link, style]}>{children}</Text>
  );
}



export const Texts = { Body, Title, Error, Button, Link, SubTitle };
