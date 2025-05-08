import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import './ComicDetail.css';

// Dados de exemplo para simular a resposta da API
const mockComics = [
  {
    id: 1,
    title: "Batman: O Cavaleiro das Trevas",
    author: "Frank Miller",
    price: 15.90,
    image: "https://m.media-amazon.com/images/I/81Q26VNallL._AC_UL320_.jpg"
  },
  {
    id: 2,
    title: "Watchmen",
    author: "Alan Moore",
    price: 18.50,
    image: "https://m.media-amazon.com/images/I/81SXU0TTdxL._AC_UL320_.jpg"
  },
  {
    id: 3,
    title: "Sandman",
    author: "Neil Gaiman",
    price: 22.90,
    image: "https://m.media-amazon.com/images/I/81YUGMBd0aL._AC_UL320_.jpg"
  },
  {
    id: 4,
    title: "Turma da Mônica Jovem",
    author: "Mauricio de Sousa",
    price: 12.50,
    image: "https://m.media-amazon.com/images/I/91CjuqOgbDL._AC_UL320_.jpg"
  },
  {
    id: 5,
    title: "One Piece Vol. 1",
    author: "Eiichiro Oda",
    price: 19.90,
    image: "https://m.media-amazon.com/images/I/716EGgqzyOL._AC_UL320_.jpg"
  },
  {
    id: 6,
    title: "Naruto Vol. 1",
    author: "Masashi Kishimoto",
    price: 17.90,
    image: "https://m.media-amazon.com/images/I/91xUwI2UEVL._AC_SY741_.jpg"
  },
  {
    id: 7,
    title: "Homem-Aranha: De Volta ao Lar",
    author: "Marvel Comics",
    price: 16.50,
    image: "https://imgv2-1-f.scribdassets.com/img/document/698726093/original/0cf5a384eb/1?v=1"
  },
  {
    id: 8,
    title: "Saga Vol. 1",
    author: "Brian K. Vaughan",
    price: 24.90,
    image: "https://m.media-amazon.com/images/I/81s49EEptML._AC_UL320_.jpg"
  },
  {
    id: 9,
    title: "Berserk Vol. 1",
    author: "Kentaro Miura",
    price: 29.90,
    image: "https://m.media-amazon.com/images/I/61K0fW6l1-L._SL1455_.jpg"
  },
  {
    id: 10,
    title: "Akira Vol. 1",
    author: "Katsuhiro Otomo",
    price: 32.50,
    image: "https://m.media-amazon.com/images/I/61ud5BuLRML._SL1000_.jpg"
  },
  {
    id: 11,
    title: "Vingadores: Guerra Infinita",
    author: "Marvel Comics",
    price: 21.90,
    image: "https://m.media-amazon.com/images/I/91Ngg-4Lh9L._SL1500_.jpg"
  },
  {
    id: 12,
    title: "Turma da Mônica: Laços",
    author: "Vitor Cafaggi e Lu Cafaggi",
    price: 14.90,
    image: "https://m.media-amazon.com/images/I/71VzStzoicL._SL1263_.jpg"
  },
  {
    id: 13,
    title: "Death Note Vol. 1",
    author: "Tsugumi Ohba e Takeshi Obata",
    price: 18.90,
    image: "https://m.media-amazon.com/images/I/612x+rQ0yJL._SL1000_.jpg"
  },
  {
    id: 14,
    title: "V de Vingança",
    author: "Alan Moore e David Lloyd",
    price: 26.90,
    image: "https://m.media-amazon.com/images/I/71RccWOPFKL._SL1024_.jpg"
  },
  {
    id: 15,
    title: "Persépolis",
    author: "Marjane Satrapi",
    price: 27.50,
    image: "https://m.media-amazon.com/images/I/71Hda5IPs3L._SL1500_.jpg"
  },
  {
    id: 16,
    title: "Maus",
    author: "Art Spiegelman",
    price: 29.90,
    image: "https://m.media-amazon.com/images/I/71nXxfnNEcL._SL1375_.jpg"
  }
];

const ComicDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Simulando busca do quadrinho pelo ID
  const comic = mockComics.find(comic => comic.id === parseInt(id));

  const handleBack = () => {
    navigate(-1);
  };

  const handleBuy = () => {
    alert(`Quadrinho "${comic.title}" comprado com sucesso!`);
    // Em um cenário real, você faria uma chamada para a API
  };

  const handleReserve = () => {
    alert(`Quadrinho "${comic.title}" reservado com sucesso!`);
    // Em um cenário real, você faria uma chamada para a API
  };

  if (!comic) {
    return (
      <div className="comic-detail-container">
        <Navbar />
        <div className="comic-detail-content">
          <h2>Quadrinho não encontrado</h2>
          <button className="back-btn" onClick={handleBack}>Voltar</button>
        </div>
      </div>
    );
  }

  return (
    <div className="comic-detail-container">
      <Navbar />
      <div className="comic-detail-content">
        <div className="comic-detail-grid">
          <div className="comic-detail-image">
            <img src={comic.image} alt={comic.title} />
          </div>
          <div className="comic-detail-info">
            <h1>{comic.title}</h1>
            <p className="author">por {comic.author}</p>
            <p className="price">
              {comic.price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              })}            </p>
            <div className="comic-detail-actions">
              <button className="rent-btn" onClick={handleBuy}>Comprar</button>
              <button className="reserve-btn" onClick={handleReserve}>Reservar</button>
              <button className="back-btn" onClick={handleBack}>Voltar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComicDetail;