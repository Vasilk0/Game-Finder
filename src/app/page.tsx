"use client";
import { useState } from "react";
import { FiSearch, FiGamepad2, FiStar, FiCalendar } from "react-icons/fi";
const gamesData = [
  { id: 1, title: "The Witcher 3", rating: 9.8, year: 2015, genre: "RPG", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400" },
  { id: 2, title: "Cyberpunk 2077", rating: 8.5, year: 2020, genre: "Action RPG", image: "https://images.unsplash.com/photo-1605901309584-818e25960b8f?w=400" },
  { id: 3, title: "Red Dead Redemption 2", rating: 9.7, year: 2018, genre: "Action", image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400" },
  { id: 4, title: "Elden Ring", rating: 9.6, year: 2022, genre: "Action RPG", image: "https://images.unsplash.com/photo-1593305841991-05c29736560e?w=400" },
  { id: 5, title: "God of War", rating: 9.5, year: 2018, genre: "Action", image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400" },
  { id: 6, title: "Horizon Zero Dawn", rating: 9.0, year: 2017, genre: "Action RPG", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400" },
];
const genres = ["Все", "RPG", "Action", "Action RPG"];
export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("Все");
  const filteredGames = gamesData.filter(game => {
    const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre = selectedGenre === "Все" || game.genre === selectedGenre;
    return matchesSearch && matchesGenre;
  });
  return (
    <main className="min-h-screen">
      <header className="bg-secondary/80 backdrop-blur-md border-b border-accent/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FiGamepad2 className="w-8 h-8 text-accent" />
              <h1 className="text-2xl font-bold text-white">Game Finder</h1>
            </div>
          </div>
        </div>
      </header>
      <section className="py-16 px-6 bg-gradient-to-b from-accent/10 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Поиск <span className="text-accent">видеоигр</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">Найди лучшие игры по жанрам и рейтингам</p>
          <div className="relative max-w-xl mx-auto mb-8">
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input type="text" placeholder="Поиск игр..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-secondary border border-accent/30 rounded-xl text-white placeholder-gray-500 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" />
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {genres.map((genre) => (
              <button key={genre} onClick={() => setSelectedGenre(genre)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${selectedGenre === genre ? "bg-accent text-white" : "bg-secondary text-gray-400 hover:text-white hover:bg-secondary/80"}`}>
                {genre}
              </button>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGames.map((game) => (
              <div key={game.id} className="bg-secondary rounded-xl overflow-hidden border border-gray-800 hover:border-accent/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/20 group">
                <div className="relative h-48 overflow-hidden">
                  <img src={game.image} alt={game.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-3 right-3 px-3 py-1 bg-accent rounded-full text-white text-sm font-bold flex items-center gap-1">
                    <FiStar className="w-4 h-4" />{game.rating}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-white mb-2">{game.title}</h3>
                  <div className="flex items-center justify-between text-gray-400 text-sm">
                    <span className="flex items-center gap-2"><FiCalendar className="w-4 h-4" />{game.year}</span>
                    <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-medium">{game.genre}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {filteredGames.length === 0 && (
            <div className="text-center py-16"><FiGamepad2 className="w-16 h-16 text-gray-600 mx-auto mb-4" /><p className="text-gray-400 text-xl">Игры не найдены</p></div>
          )}
        </div>
      </section>
      <footer className="py-8 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center text-gray-500 text-sm">© 2026 Game Finder. Создано Вероникой Архиповой</div>
      </footer>
    </main>
  );
}
