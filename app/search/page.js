"use client"
import React from 'react';
import SearchMovie from "../_components/movie-search";
import Header from '../_components/header';

export default function SearchPage() {
    return (
        <div className='bg-blueGray-800' style={{ height: '100vh', paddingTop: '20px' }}>
            <Header/>
            <SearchMovie/>
        </div>
    );
}