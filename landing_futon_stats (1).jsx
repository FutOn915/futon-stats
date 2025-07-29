import { useState } from "react";

const jogadores = [
  "Rw", "David", "Jesinho", "Augusto", "Kennedy",
  "Renan", "Matheus", "Gohan", "Leticia",
  "Igor", "Wallace", "Topethy029", "JHOWZÃO"
];

export default function LandingFutOn() {
  const [formData, setFormData] = useState({
    jogador: "",
    data: "",
    passesCertos: "",
    passesErrados: "",
    desarmes: "",
    gols: "",
    assistencias: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Estatísticas enviadas com sucesso! (Integração com planilha vai aqui)");
    setFormData({
      jogador: "",
      data: "",
      passesCertos: "",
      passesErrados: "",
      desarmes: "",
      gols: "",
      assistencias: ""
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">FutOn - Estatísticas do Jogo</h1>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <select
            name="jogador"
            value={formData.jogador}
            onChange={handleChange}
            required
            className="p-2 border rounded-xl"
          >
            <option value="">Selecione o jogador</option>
            {jogadores.map((j) => (
              <option key={j} value={j}>{j}</option>
            ))}
          </select>

          <input
            type="date"
            name="data"
            value={formData.data}
            onChange={handleChange}
            required
            className="p-2 border rounded-xl"
          />

          <input type="number" name="passesCertos" placeholder="Passes Certos" value={formData.passesCertos} onChange={handleChange} className="p-2 border rounded-xl" />
          <input type="number" name="passesErrados" placeholder="Passes Errados" value={formData.passesErrados} onChange={handleChange} className="p-2 border rounded-xl" />
          <input type="number" name="desarmes" placeholder="Desarmes" value={formData.desarmes} onChange={handleChange} className="p-2 border rounded-xl" />
          <input type="number" name="gols" placeholder="Gols" value={formData.gols} onChange={handleChange} className="p-2 border rounded-xl" />
          <input type="number" name="assistencias" placeholder="Assistências" value={formData.assistencias} onChange={handleChange} className="p-2 border rounded-xl" />

          <button type="submit" className="bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700">Enviar Estatísticas</button>
        </form>
      </div>
    </div>
  );
}
