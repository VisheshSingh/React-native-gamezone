import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import { Formik } from 'formik';

const ReviewForm = props => {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: '', body: '', rating: '' }}
        onSubmit={values => console.log(values)}
      >
        {formikProps => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder='Review title'
              value={formikProps.values.title}
              onChangeText={formikProps.handleChange('title')}
            />
            <TextInput
              style={globalStyles.input}
              placeholder='Review body'
              value={formikProps.values.body}
              onChangeText={formikProps.handleChange('body')}
            />
            <TextInput
              style={globalStyles.input}
              placeholder='Rating (1-5)'
              value={formikProps.values.rating}
              onChangeText={formikProps.handleChange('rating')}
              keyboardType='numeric'
            />
            <Button
              title='Submit'
              color='maroon'
              onPress={formikProps.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default ReviewForm;
