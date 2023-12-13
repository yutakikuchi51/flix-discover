"use client"
import React from 'react';
import SearchMovie from "../_components/movie-search";
import moviesData from "../_data/movies.json";
import Link from 'next/link';
import Header from '../_components/header';

export default function SearchPage() {
    return (
        <div className='bg-blueGray-800' style={{ height: '100vh' }}>
            <Header/>
            <SearchMovie/>
        </div>
    );
}