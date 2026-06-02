// ==========================================
// 1. CONTROLE DO MENU RESPONSIVO (GLOBAL)
// ==========================================
// Executa em todas as páginas que possuem o botão de menu
let botaoMenu = document.querySelector("#botaomenu");
let menuCaixa = document.querySelector(".menu");

if (botaoMenu && menuCaixa) {
    botaoMenu.addEventListener("click", function() { 
        menuCaixa.classList.toggle("visivel"); 
    });
}

// ==========================================
// 2. FORMULÁRIO DE ASSISTÊNCIA (INDEX.HTML)
// ==========================================
var formAssistencia = document.getElementById("form-assistencia");
if (formAssistencia) {
    formAssistencia.addEventListener("submit", function(event) {
        event.preventDefault();

        var motivo = document.getElementById("tipo-ajuda").value;
        var relato = document.getElementById("relato-usuario").value;

        var textoSuporte = "Olá Suporte NeoCórtex! Gostaria de registrar um(a) [" + motivo + "]. Relato: " + relato;
        var linkSuporteZap = "https://wa.me" + encodeURIComponent(textoSuporte);

        window.open(linkSuporteZap, "_blank");
        document.getElementById("relato-usuario").value = "";
    });
}

// ==========================================
// 3. RESULTADO E COMPARTILHAMENTO (HISTORICO.HTML)
// ==========================================
var urlParams = new URLSearchParams(window.location.search);
var qi = urlParams.get('qi');
var nome = urlParams.get('nome');

if (qi) {
    var msgResultado = document.getElementById("mensagem-resultado");
    if (msgResultado) {
        msgResultado.innerHTML = "<strong>" + (nome ? nome : "Usuário") + "</strong>, seu teste foi registrado com sucesso!";
    }
    
    var textoMensagem = "Olá! Meu resultado no Teste NeoCórtex foi QI " + qi;
    var linkWhats = "https://whatsapp.com" + encodeURIComponent(textoMensagem);

    var btnZap = document.getElementById("botaocompartilhar");
    if (btnZap) {
        btnZap.href = linkWhats;
        btnZap.style.display = "inline-block";
    }
}

// ==========================================
// 4. LOGIN, CADASTRO E FOTO (HOME.HTML)
// ==========================================
var bancoNome = "Visitante";
var bancoEmail = "exemplo@gmail.com";
var bancoSenha = "123";

window.irParaCadastro = function() {
    var telaLogin = document.getElementById("tela-login");
    var telaCadastro = document.getElementById("tela-cadastro");
    if (telaLogin && telaCadastro) {
        telaLogin.style.display = "none";
        telaCadastro.style.display = "block";
    }
};

window.salvarCadastro = function() {
    var nome = document.getElementById("cad-nome").value;
    var email = document.getElementById("cad-email").value;
    var senha = document.getElementById("cad-senha").value;
    var confirma = document.getElementById("cad-confirma").value;

    if (senha !== confirma) {
        alert("As senhas não coincidem! Tente novamente.");
        return false;
    }

    bancoNome = nome;
    bancoEmail = email;
    bancoSenha = senha;

    alert("Cadastro realizado com sucesso! Bem-vindo(a).");

    var perfNome = document.getElementById("perfil-nome");
    var perfEmail = document.getElementById("perfil-email");
    if (perfNome) perfNome.innerHTML = bancoNome;
    if (perfEmail) perfEmail.innerHTML = bancoEmail;

    var telaCadastro = document.getElementById("tela-cadastro");
    var telaPerfil = document.getElementById("tela-perfil");
    if (telaCadastro && telaPerfil) {
        telaCadastro.style.display = "none";
        telaPerfil.style.display = "block";
    }

    return false;
};

window.realizarLogin = function() {
    var emailDigitado = document.getElementById("email-login").value;
    var senhaDigitada = document.getElementById("senha-login").value;

    if (emailDigitado === bancoEmail && senhaDigitada === bancoSenha) {
        var perfNome = document.getElementById("perfil-nome");
        var perfEmail = document.getElementById("perfil-email");
        if (perfNome) perfNome.innerHTML = bancoNome;
        if (perfEmail) perfEmail.innerHTML = bancoEmail;
        
        var telaLogin = document.getElementById("tela-login");
        var telaPerfil = document.getElementById("tela-perfil");
        if (telaLogin && telaPerfil) {
            telaLogin.style.display = "none";
            telaPerfil.style.display = "block";
        }
    } else {
        alert("E-mail ou senha incorretos!");
    }
    return false;
};

window.mudarFoto = function() {
    var seletor = document.getElementById("seletor-foto");
    var fotoExibida = document.getElementById("foto-exibida");
    if (seletor && fotoExibida) {
        fotoExibida.src = seletor.value;
    }
};

// ==========================================
// 5. SISTEMA DO TESTE DE QI (TESTE.HTML)
// ==========================================
var questaoAtual = 1;
var nomeUsuario = "";

window.iniciarTeste = function() {
    var campoNome = document.getElementById("nome");
    if (campoNome) nomeUsuario = campoNome.value; 
    
    var telaInicial = document.getElementById("tela-inicial");
    var telaPerguntas = document.getElementById("tela-perguntas");
    var boasVindas = document.getElementById("boas-vindas-usuario");

    if (telaInicial && telaPerguntas) {
        telaInicial.style.display = "none";
        telaPerguntas.style.display = "block";
    }
    if (boasVindas) {
        boasVindas.innerHTML = "Boa sorte, " + (nomeUsuario ? nomeUsuario : "Visitante") + "!";
    }
    return false; 
};

window.avancarQuestao = function() {
    var q1 = document.getElementById("q1");
    var q2 = document.getElementById("q2");
    var q3 = document.getElementById("q3");

    if (questaoAtual === 1 && q1 && q2) {
        q1.style.display = "none";
        q2.style.display = "block";
        questaoAtual = 2;
    } else if (questaoAtual === 2 && q2 && q3) {
        q2.style.display = "none";
        q3.style.display = "block";
        questaoAtual = 3;
    }
};

window.voltarQuestao = function() {
    var q1 = document.getElementById("q1");
    var q2 = document.getElementById("q2");
    var q3 = document.getElementById("q3");

    if (questaoAtual === 2 && q1 && q2) {
        q2.style.display = "none";
        q1.style.display = "block";
        questaoAtual = 1;
    } else if (questaoAtual === 3 && q2 && q3) {
        q3.style.display = "none";
        q2.style.display = "block";
        questaoAtual = 2;
    }
};

window.finalizarTeste = function() {
    var acertos = 0;
    var r1 = document.querySelector('input[name="p1"]:checked');
    var r2 = document.querySelector('input[name="p2"]:checked');
    var r3 = document.querySelector('input[name="p3"]:checked');

    if (!r1 || !r2 || !r3) {
        alert("Por favor, responda todas as questões!");
        return;
    }

    if (r1.value === "correto") { acertos++; }
    if (r2.value === "correto") { acertos++; }
    if (r3.value === "correto") { acertos++; }

    var qiFinal = 70 + (acertos * 20); 

    alert("Parabéns, " + (nomeUsuario ? nomeUsuario : "Visitante") + "! Seu QI estimado é de: " + qiFinal);
    window.location.href = "historico.html?nome=" + encodeURIComponent(nomeUsuario) + "&qi=" + qiFinal;
};

// ==========================================
// 6. EXIBIÇÃO DE PERFIL EXTERNO (PERFIL.HTML)
// ==========================================
var nomeParam = urlParams.get('nome');
var emailParam = urlParams.get('email');

var perfNomeTela = document.getElementById("perfil-nome");
var perfEmailTela = document.getElementById("perfil-email");

if (perfNomeTela && perfEmailTela) {
    if (nomeParam && emailParam) {
        perfNomeTela.innerHTML = nomeParam;
        perfEmailTela.innerHTML = emailParam;
    } else {
        perfNomeTela.innerHTML = "Visitante";
        perfEmailTela.innerHTML = "não logado";
    }
}
    if (emailDigitado === bancoEmail && senhaDigitada === bancoSenha) {
        var perfNome = document.getElementById("perfil-nome");
        var perfEmail = document.getElementById("perfil-email");
        if (perfNome) perfNome.innerHTML = bancoNome;
        if (perfEmail) perfEmail.innerHTML = bancoEmail;
        
        var telaLogin = document.getElementById("tela-login");
        var telaPerfil = document.getElementById("tela-perfil");
        if (telaLogin && telaPerfil) {
            telaLogin.style.display = "none";
            telaPerfil.style.display = "block";
        }
    } else {
        alert("E-mail ou senha incorretos!");
    }
    return false;
};

window.mudarFoto = function() {
    var seletor = document.getElementById("seletor-foto");
    var fotoExibida = document.getElementById("foto-exibida");
    if (seletor && fotoExibida) {
        fotoExibida.src = seletor.value;
    }
};
