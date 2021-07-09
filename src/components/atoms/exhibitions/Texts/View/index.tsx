import React from 'react';
import { Text, ActivityIndicator } from 'react-native';
import { ModelOfTextsTitle, ModelOfTextsBody, ModelOfTextsSubTitle, ModelOfTextsError, ModelOfTextsButton, ModelOfTextsLink } from '../Models';
import { styles } from './styles';


const Body: React.FC<ModelOfTextsBody> = ({ theme, isTextElement = false, style, children }) => {
  return (
    <Text style={[styles(theme, isTextElement).base, styles(theme).body, style]}>
      {children}
    </Text>
  )
}

const Title: React.FC<ModelOfTextsTitle> = ({
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

const SubTitle: React.FC<ModelOfTextsSubTitle> = ({ theme, isTextElement = false, style, children }) => {
  return (
    <Text style={[styles(theme, isTextElement).base, styles(theme).subTitle, style]}>
      {children}
    </Text>
  )
}

const Error: React.FC<ModelOfTextsError> = ({ theme, style, children }) => {
  return (
    <Text style={[styles(theme).base, styles(theme).error, style]}>{children}</Text>
  );
}

const Button: React.FC<ModelOfTextsButton> = ({ isLoading, children, isOutline, theme, style }) => {
  return (
    isLoading
      ? (

        <ActivityIndicator color={theme.colors.textElements} />
      )
      : (
        <Text style={[styles(theme).base, !isOutline ? styles(theme).textElement : {}, style]}>{children}</Text>

      )
  );
}

const Link: React.FC<ModelOfTextsLink> = ({ theme, style, children }) => {
  return (
    <Text style={[styles(theme).base, styles(theme).link, style]}>{children}</Text>
  );
}



export const Texts = { Body, Title, Error, Button, Link, SubTitle };
