import React, {useState, useEffect} from 'react';
import { Box, Stack, Button, TextField, Typography}
from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollBar from './HorizontalScrollBar';
import ExerciseCard from './ExerciseCard';

const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {

  const [search, setSearch] = useState('');

  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
       exerciseOptions);

       setBodyParts(["all", ...bodyPartsData]);
          
    };
    fetchExercisesData();
  }, []);
  
  const handleSearch = async () => {
    if(search){
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',
        exerciseOptions); 

        const searchedExercises = exercisesData.filter(
          (exercise) => exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search));

        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

       setSearch("");
       setExercises(searchedExercises); 
    }

  }
  
  return (
    <Stack alignItems='center' mt='37px'
     justifyContent='center' p='20px'>
      <Typography fontWeight={700} 
      sx={{
        fontSize: { md: 44, xs: 30},
      }}mt='100px' mb='50px' textAlign='center'>Exercises EveryOne <br />
      Should Know !</Typography>
      <Box position='relative'
       mb='72px'
       >
        <TextField
        height="76px"
        sx={{
          input: {
            fontWeight: '700',
            border: 'none',
            borderRadius: '4px'
          },
          width : { md: 800, xs: 350 },
          backgroundColor: '#fff',
          borderRadius: '40px',
        }}
        
         value= {search} 
         onChange={(e) => setSearch(e.target.value.toLowerCase())}
         placeholder='Search Exercises'
         type= 'text' 
        />
        <Button className='search-btn'
        sx={{
          bgcolor: '#ff2625',
          color: '#fff',
          textTransform: 'none',
          width: { md: '175px', xs: '80px'},
          height: '56px',
          position: 'absolute',
          right: '0',
          fontSize: {md: '20px', xs: '14px'}
        }}
        onClick={handleSearch}
        
        >Search
        </Button>
      </Box>
      <Box sx={{
       position: 'relative', width: '100%', p: '20px'
      }}>
        <HorizontalScrollBar  
        data={bodyParts} 
         bodyPart={bodyPart} 
         setBodyPart={setBodyPart} isBodyParts />
      </Box>
   
</Stack>
  );
}

export default SearchExercises;
