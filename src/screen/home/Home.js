import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import ComicCard from '../../components/ComicCard';
import './Home.css';

// Dados de exemplo para simular a resposta da API 
const mockComics = [
    {
        id: 1,
        title: "Batman: O Cavaleiro das Trevas",
        author: "Frank Miller",
        price: 50.00,
        image: "https://d14d9vp3wdof84.cloudfront.net/image/589816272436/image_l55ma6s55129raptum4usjoi1b/-S897-FWEBP" 
      },
      {
        id: 2,
        title: "Watchmen",
        author: "Alan Moore",
        price: 18.50,
        image: "https://www.panini.de/media/catalog/product/cache/2d16730310b7945c46ddd1ca513e3c42/w/a/watchmen-deluxe-cover896duul02bijn_jict4ogzeuvhu5g0.jpg"
      },
      {
        id: 3,
        title: "Sandman",
        author: "Neil Gaiman",
        price: 22.90,
        image: "https://m.media-amazon.com/images/I/61YNpOiCpbL._SY466_.jpg"
      },
      {
        id: 4,
        title: "Turma da Mônica Jovem",
        author: "Mauricio de Sousa",
        price: 12.50,
        image: "https://m.media-amazon.com/images/I/81AhLJUoniL._SY425_.jpg"
      },
      {
        id: 5,
        title: "One Piece Vol. 1",
        author: "Eiichiro Oda",
        price: 19.90,
        image: "https://m.media-amazon.com/images/I/716EGgqzyOL._SY466_.jpg"
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
        image: "https://m.media-amazon.com/images/I/51oGjs9VJOL._SY445_SX342_.jpg"
      },
      {
        id: 9,
        title: "Berserk Vol. 1",
        author: "Kentaro Miura",
        price: 29.90,
        image: "https://a-static.mlcdn.com.br/800x560/livro-berserk-vol-1/apaginadistribuidoradelivros/9788542617092/24403e16fb77d11e3044533f056ac721.jpg" 
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
        image: "https://m.media-amazon.com/images/I/A1Sq8q77OfL._SY466_.jpg" 
      },
      {
        id: 12,
        title: "Turma da Mônica: Laços",
        author: "Mauricio de Sousa", 
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

const Home = () => {
  const [comics, setComics] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [sortOption, setSortOption] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Simulando uma chamada de API
    fetchComics();
  }, []);

  const fetchComics = () => {
    // Em um cenário real, você faria uma chamada fetch para a API
    setTimeout(() => {
      setComics(mockComics);
    }, 500);
  };

  useEffect(() => {
    if (searchTerm) {
      const filteredComics = mockComics.filter(comic => 
        comic.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        comic.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setComics(filteredComics);
    } else {
      setComics(mockComics);
    }
  }, [searchTerm]);

  const handleSearch = (e) => {
    e.preventDefault(); // Previne o recarregamento da página
  };

  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
    // Em um cenário real, você filtraria com base no gênero
    // Por enquanto, apenas recarregamos os quadrinhos
    fetchComics();
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    let sortedComics = [...comics];
    
    switch(e.target.value) {
      case 'preco-asc':
        sortedComics.sort((a, b) => a.price - b.price);
        break;
      case 'preco-desc':
        sortedComics.sort((a, b) => b.price - a.price);
        break;
      default:
        // Sem ordenação específica
        break;
    }
    
    setComics(sortedComics);
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  return (
    <div className="home-container">
      <Navbar onLogout={handleLogout} />
      
      <section className="hero">
        <h2>Bem-vindo à Estante de Heróis</h2>
        <p>Explore nossa coleção ampliada com mais de 15 quadrinhos e HQs para alugar!</p>
      </section>

      <section className="filters">
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Buscar quadrinhos..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="filter-options">
          <select value={selectedGenre} onChange={handleGenreChange}>
            <option value="">Todos os gêneros</option>
            <option value="acao">Ação</option>
            <option value="aventura">Aventura</option>
            <option value="comedia">Comédia</option>
            <option value="drama">Drama</option>
            <option value="ficcao">Ficção Científica</option>
            <option value="manga">Mangá</option>
            <option value="herois">Super-Heróis</option>
            <option value="biografia">Biografia</option>
            <option value="nacional">Nacional</option>
            <option value="seinen">Seinen</option>
            <option value="shonen">Shonen</option>
            <option value="classico">Clássicos</option>
          </select>
          <select value={sortOption} onChange={handleSortChange}>
            <option value="">Ordenar por</option>
            <option value="recentes">Mais recentes</option>
            <option value="populares">Mais populares</option>
            <option value="preco-asc">Preço: menor para maior</option>
            <option value="preco-desc">Preço: maior para menor</option>
          </select>
        </div>
      </section>

      <section className="comics-grid">
        {comics.length > 0 ? (
          comics.map(comic => (
            <ComicCard 
              key={comic.id} 
              comic={comic} 
            />
          ))
        ) : (
          <p className="no-results">Nenhum quadrinho encontrado.</p>
        )}
      </section>
    </div>
  );
};

export default Home;