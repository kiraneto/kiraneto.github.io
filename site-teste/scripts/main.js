let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function() {
	let meuSrc = minhaImagem.getAttribute('src');
	if (meuSrc === 'imagens/sonic-logo.jpg') {
		minhaImagem.setAttribute ('src', 'imagens/sonic-logo2.png');
	} else {
		minhaImagem.setAttribute ('src', 'imagens/sonic-logo.jpg');
	}
}

let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');

function defineNomeUsuario() {
	let meuNome = prompt('Por favor, digite seu nome.');
	if (!meuNome || meuNome === null) {
		defineNomeUsuario();
	} else {
		localStorage.setItem('nome', meuNome);
		meuCabecalho.innerHTML = 'Sega é legal, ' + meuNome;
	}


	
	
}

if (!localStorage.getItem('nome')) {
	defineNomeUsuario();
} else {
	let nomeGuardado = localStorage.getItem('nome');
	meuCabecalho.textContent = 'Sega é legal, ' + nomeGuardado;
}
meuBotao.onclick = function() { defineNomeUsuario();

}