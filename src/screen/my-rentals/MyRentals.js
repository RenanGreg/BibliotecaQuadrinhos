import React from 'react';
import Navbar from '../../components/Navbar';
import './MyRentals.css';

const MyRentals = () => {
  // Recuperar os quadrinhos alugados do localStorage
  const rentedComics = JSON.parse(localStorage.getItem('rentedComics')) || [];

  return (
    <div className="my-rentals-container">
      <Navbar />
      <div className="my-rentals-content">
        <h1>Meus Aluguéis</h1>
        {rentedComics.length === 0 ? (
          <p>Você ainda não possui quadrinhos alugados.</p>
        ) : (
          <div className="rented-comics-grid">
            {rentedComics.map((comic) => (
              <div key={comic.id} className="rented-comic-card">
                <img src={comic.image} alt={comic.title} />
                <div className="comic-info">
                  <h3>{comic.title}</h3>
                  <p>por {comic.author}</p>
                  <p>Data de reserva: {comic.rentDate}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyRentals;
