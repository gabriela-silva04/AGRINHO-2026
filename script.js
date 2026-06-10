function mostrarMensagem() {

    const mensagens = [
        "🌱 Produzir com consciência garante o futuro!",
        "🚜 Tecnologia e natureza podem caminhar juntas.",
        "🌳 Sustentabilidade é investir nas próximas gerações.",
        "💧 Preservar a água é proteger a vida no campo."
    ];

    const aleatoria =
        mensagens[Math.floor(Math.random() * mensagens.length)];

    document.getElementById("mensagem").innerHTML = aleatoria;
}
