import React from 'react';
import { ScrollView } from 'react-native';
import Movie from './components/Movie';



const AllMovies = () => {
  return (
    <ScrollView>
      <Movie
        title="Doctor Sleep"
        year="2019"
        icon_name="skull"
        poster={require('./img/doctor-sleep.jpg')}
      />
      <Movie
        title="Midway"
        year="2020"
        icon_name="person-rifle"
        poster={require('./img/midway.jpg')}
      />
      <Movie
        title="'96"
        year="2018"
        icon_name="Entypo-heart"
        poster={{
          uri: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTJi8r3p1ofcc8GwLAjqrENm2YYAOTGOHSnc7jV9UMtSpR1k12D"
        }}
      />
    </ScrollView>
  );
};


export default AllMovies;