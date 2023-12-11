import React from 'react';
import MovieList from './_components/movie-list'
import Link from 'next/link';

export default function Home() {
  return (
    <main className='bg-blueGray-800'>
      <h1>Flix Discover</h1>
      <Link href="search">Search By Name</Link>
      <MovieList />
    </main>
  );
}
