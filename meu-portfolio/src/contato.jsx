import React, { useState } from 'react';

function Contato() {
  const [formData, setFormData] = useState({ nome: '', email: '', mensagem: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso!');
    setFormData({ nome: '', email: '', mensagem: '' });
  };

  return (
    <div>
      <h1>Entre em Contato</h1>
      <form onSubmit={handleSubmit}>
        <label>Nome:</label>
        <input type="text" name="nome" value={formData.nome} onChange={handleChange} required />
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        <label>Mensagem:</label>
        <textarea name="mensagem" value={formData.mensagem} onChange={handleChange} required />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contato;
