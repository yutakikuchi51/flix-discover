"use client"
import React from 'react';
import SearchMovie from "../_components/movie-search";
import moviesData from "../_data/movies.json";
import Link from 'next/link';

export default function SearchPage() {
    return (
        <div>
            <h1>Search for a Movie</h1>
            <SearchMovie moviesData={moviesData} />
            <Link href="./">Back to home</Link>
        </div>
    );
}
