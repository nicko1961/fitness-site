import React from 'react';


import {Box, Stack, Typography } from '@mui/material';
import HorizontalScrollBar from './HorizontalScrollBar';
import Loader from './Loader';
const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{
      mt: { md:'20px', xs: '0'}}}>
        <Typography variant='h3'>Similar exercises that target<br /> the same Muscle group</Typography>
        <Stack direction='row' sx={{
          p: '2', position: 'relative'}}>
            {targetMuscleExercises.length ? <HorizontalScrollBar 
            data={targetMuscleExercises}/> : <Loader /> }

        </Stack>
       <Typography variant='h3'>Equipment that target<br /> the same Muscle group</Typography>
        <Stack direction='row' sx={{
          p: '2', position: 'relative'}}>
            {equipmentExercises.length ? <HorizontalScrollBar 
            data={equipmentExercises}/> : <Loader /> }

        </Stack>
      
    </Box>
  );
};

export default SimilarExercises;
