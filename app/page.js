import React from 'react';
import MovieList from './_components/movie-list'

export default function Home() {
  return (
    <main className='bg-blueGray-800'>
      <h1>Flix Discover</h1>
      <MovieList />
    </main>
  );
}
