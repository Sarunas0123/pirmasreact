import React from 'react';
import './Book.css';

export default function Book() {
    return (
        <div class="onebook">
        <Image/>
        <Author/>
        <Title/>
        <Price/>
        </div>
    )
}

const Image = () => <img src='https://images-na.ssl-images-amazon.com/images/I/71kpOWypaFL._AC_SY445_.jpg' alt="tekstas" ></img>;
const Author = () => <h2>Wayna Brothers</h2>;
const Title = () => <h3>Dont Be a Menace</h3>;
const Price = () => <p>your dignity</p>;