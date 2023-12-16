const botaoabrir = document.getElementById("abrir");
const botaosalvar = document.getElementById("salvar");
const conteudo_ = document.getElementById("conteudo");


let nome_arquivo = '';

function abrirArquivo(e){
		const openFileInput = document.getElementById("openfile");
		openFileInput.click();
		openFileInput.addEventListener('change', function(e){
		console.log(e.target.value);
		const arquivo_ = e.target.files[0];
		console.log("abrindo arquivo" + arquivo_);
		nome_arquivo = arquivo_.name;
		const leitor = new FileReader();
		leitor.addEventListener("load",function(event){
			conteudo_.value = event.target.result
		})
		leitor.readAsText(arquivo_);
		console.log('Arquivo aberto.');
		
	})
}
function salvarArquivo(e){
	const conteudoarquivo = conteudo_.value;
	const blob_ = new Blob([conteudoarquivo], {type:'text/plain'});
	const url_ = URL.createObjectURL(blob_);
	const elemento = document.createElement('a');
	elemento.href = url_;
	elemento.download = nome_arquivo;
	elemento.click();
	console.log('Salvo.');
}


function atalhos(e) {
    if (e.ctrlKey && e.code === 'KeyO') {
        abrirArquivo();
    }
	else if(e.ctrlKey && e.code === 'KeyS'){
		salvarArquivo();
	}
}



botaoabrir.addEventListener('click',abrirArquivo);
botaosalvar.addEventListener('click',salvarArquivo);
document.addEventListener('keyup', atalhos, false);





