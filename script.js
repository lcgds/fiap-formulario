// Adicione este script ao final do seu arquivo HTML ou em um arquivo JS vinculado

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('formulario').addEventListener('submit', function(event) {
        event.preventDefault();

        const nomes = [];
        for (let i = 1; i <= 5; i++) {
            const nome = document.getElementById(`nome-${i}`).value;
            nomes.push(nome);
        }

        console.log('Integrantes do grupo:', nomes);
    });
});
