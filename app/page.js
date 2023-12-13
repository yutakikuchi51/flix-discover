import React from 'react';
import MovieList from './_components/movie-list'
import Header from './_components/header';

export default function Home() {
  return (
    <main className='bg-blueGray-800' style={{ paddingTop: '20px', height: '100vh', backgroundColor: '#1E293B'}}>
      <Header />
      <MovieList />
    </main>
  );
}
