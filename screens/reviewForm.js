import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import { Formik } from 'formik';
import * as yup from 'yup';

const reviewSchema = yup.object({
  title: yup
    .string()
    .required()
    .min(4),
  body: yup
    .string()
    .required()
    .min(8),
  rating: yup
    .string()
    .required()
    .test('is-num-1-5', 'rating must be a number between 1-5', val => {
      return parseInt(val) > 0 && parseInt(val) < 6;
    })
});

const ReviewForm = ({ addReview }) => {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: '', body: '', rating: '' }}
        validationSchema={reviewSchema}
        onSubmit={(values, action) => {
          action.resetForm();
          addReview(values);
        }}
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
