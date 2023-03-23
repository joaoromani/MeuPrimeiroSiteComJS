///////////////////// VARIAVEL DOS USUARIOS E SENHA /////////////////////////

let usuarios = [
    {
        nome: "João",
        senha: "123456"
    },
    {
        nome: "Pedro",
        senha: "123456"
    },
    {
        nome: "Paulo",
        senha: "123456"
    },
    {
        nome: "Natan",
        senha: "123456"
    },
    {
        nome: "Fred",
        senha: "123456"
    },
    {
        nome: "Kevin",
        senha: "123456"
    },
    {
        nome: "Carlos",
        senha: "123456"
    },
    {
        nome: "Francisco",
        senha: "123456"
    },
    {
        nome: "Gabriel",
        senha: "123456"
    },
    {
        nome: "Matheus",
        senha: "123456"
    },
    {
        nome: "Fernanda",
        senha: "123456"
    },
    {
        nome: "Ana",
        senha: "123456"
    },
    {
        nome: "Luiza",
        senha: "123456"
    },
    {
        nome: "Thiago",
        senha: "123456"
    },
    {
        nome: "Marcos",
        senha: "123456"
    }
]
/////////////////////////////////////////////////////////////////////////////

let res = document.querySelector('div.res')
let nomepage2 = localStorage.getItem("usuarioLogado")

if (nomepage2 != undefined) {

    let contjs = localStorage.getItem("contjs")

    if (contjs == 1) {
        localStorage.setItem("contjs", 2)
    }
    else {
        localStorage.removeItem("usuarioLogado")
        window.location.href = "index.html"
    }


    let h1nome = document.querySelector("h1#bv")
    h1nome.innerHTML += ` ${nomepage2}!`

    const sair = document.querySelector("#sair")
    sair.addEventListener("click", function () {
        localStorage.removeItem("usuarioLogado")
        window.location.href = "./index.html"
    })

    // window.addEventListener("beforeunload", function () {
    //     localStorage.removeItem("usuarioLogado");
    // })


    ////////////////////////////// Mostrar nomes na tela ////////////////////////////////
    ///////////////////////// Lista de usuarios logados ///////////////////////////
    let limpar = document.querySelector("button.limpanome")
    let names = document.querySelector("div.names")
    
    let mostar = document.querySelector("button.mostranome")
    mostar.addEventListener("click", mostrarusuarios)

    function mostrarusuarios() {

        names.innerHTML = ""
        for (let i = 0; i < usuarios.length; i++) {
            names.innerHTML += `Usuário: ${usuarios[i].nome}&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;Senha: ${usuarios[i].senha}<br>`
        }
    }

    limpar.addEventListener("click", function () {
        names.innerHTML = ""
    })

    // let mostar2 = document.querySelector("button.mostranome")
    // mostar2.addEventListener("click", mostrarusuarios2)

    // function mostrarusuarios2() {

    //     names.innerHTML = `Lista atualizada:<br><br>`
    //     for (let i = 0; i < usuarios.length; i++) {
    //         names.innerHTML += ` ${usuarios[i].nome}<br>`
    //     }
    // }


    //////////////////////// Função a deletar algum usuario da lista ////////////////////////

    let deletar = document.querySelector(".deletanome")
    deletar.addEventListener("click", listarusuarios)

    function listarusuarios() {

        names.innerHTML = ""

        for (let index = 0; index < usuarios.length; index++) {
            names.innerHTML += `<div><input type="checkbox" id="${index}"><label>  -  ${usuarios[index].nome}<br></label></input></div>`
        }

        names.innerHTML += `<br><br> <button id="apagarusuario"> Deletar usuario </button>`

        let deletarusuario = document.querySelector("#apagarusuario")
        deletarusuario.addEventListener("click", deletarusuario2)

        function deletarusuario2() {

            let userdeletado = [""]
            for (let index = 0; index < usuarios.length; index++) {
                let checkbox = document.getElementById(`${index}`);
                if (checkbox.checked == true) {
                    userdeletado[index] = 1
                }
                else {
                    userdeletado[index] = 0
                }
            }
            for (let index = userdeletado.length - 1; index >= 0; index--) {
                if (userdeletado[index] == 1) {
                    usuarios.splice(index, 1);
                }
            }
            listarusuarios()
        }

    }

    /////////////////////////// ADICIONAR UM NOVO USUARIO //////////////////////////////////

    let adicionarnome = document.querySelector(".adicionanome")
    adicionarnome.addEventListener("click", adicionarnome1)


    function adicionarnome1() {

        names.innerHTML = ""
        names.innerHTML += `<form>
                        <label for="inputuseradd">Novo usuário:</label><br>
                        <input type="text" id="useradd"><br>
                        <label for="inputsenhadd">Senha novo usuário:</label><br>
                        <input type = "password" id="senhadd"><br>
                        <label for="inputconfirmadd">Confirmação:</label><br>
                        <input type = "password" id="confirmadd"><br></br>
                        <input type = "button" id="botaoadd" value="Adicionar Usuário">
                        </form>`

        const botaoadicionar = document.querySelector("input#botaoadd")
        botaoadicionar.addEventListener("click", adicionarnome2)
    }

    function adicionarnome2() {

        let novosusuarios = {
            nome: document.querySelector("#useradd").value
            ,
            senha: document.querySelector("#senhadd").value
        }

        let confirmasenha = document.querySelector("#confirmadd").value

        let controle = 1

        if ((novosusuarios.nome == "") || (novosusuarios.senha == "") || (confirmasenha == "")) {
            alert("Algo está faltando. Complete os espaços em branco!")
        }
        else {
            if (confirmasenha == novosusuarios.senha) {

                for (let i = 0; i < usuarios.length; i++) {
                    if (usuarios[i].nome == novosusuarios.nome) {
                        controle = 0
                    }
                }

                if (controle == 1) {
                    usuarios.push(novosusuarios)
                    alert("Usuário adicionado com sucesso!")
                    mostrarusuarios()
                }

                else {
                    alert("Usuário já cadastrado no banco de dados! Tente novamente.")
                    adicionarnome1()
                }
            }

            else {
                alert("Usuário já cadastrado no banco de dados ou senha incorreta!")
                adicionarnome1()
            }

        }
    }

    /////////////////////////// ATUALIZAR UM USUARIO //////////////////////////////////

    const botaoatualizardados = document.querySelector(".atualizardados")
    botaoatualizardados.addEventListener("click", funcaoatualizardados)

    function funcaoatualizardados() {
        let names = document.querySelector("div.names")
        names.innerHTML = ""
        names.innerHTML += `Atualizar um usuário<br><br>`
        names.innerHTML += `<form>
                            <label>Usuario atual:</label>
                            <input type"text" id="inputuser"><br>
                            <label>Senha atual:</label>
                            <input type="text" id="inputsenha"> <br>
                            <label>Novo usuario:</label>
                            <input type"text" id="inputusernovo"> <br>
                            <label>Nova senha:</label>
                            <input type="password" id="inputsenhanova"> <br>
                            <label>Confirmar senha:</label>
                            <input type="password" id="inputsenhanova2"> <br>
                            <input type="button" value="atualizar" id="trocarsenha">
                            </form>`

        let botaotrocar = document.querySelector("input#trocarsenha")
        botaotrocar.addEventListener("click", atualizardados1)

    }

    function atualizardados1() {
        let nome = document.querySelector("#inputuser").value // usuario ATUAL
        let nome1 = document.querySelector("#inputusernovo").value // novo usuario
        let senha = document.querySelector("#inputsenha").value // senha ATUAL
        let senha1 = document.querySelector("#inputsenhanova").value // nova senha
        let senha2 = document.querySelector("#inputsenhanova2").value  // confirmação da senha

        let errosenha = 1  // erro de senha inicia com 1 e coloca 0 se estiver tudo certo
        let repetida = 0  // erro de ususario
        let indice = 0   // usado para pegar a posição do vetor para salvar nome e senha

        for (let index = 0; index < usuarios.length; index++) {
            if (usuarios[index].nome == nome1) {
                if (usuarios[index].nome != nome) {
                    repetida = 1
                }
            }
        }
        if (repetida == 0) {
            for (let index = 0; index < usuarios.length; index++) {
                if (usuarios[index].nome == nome) {
                    repetida = 0
                    if ((usuarios[index].senha == senha) && (senha1 == senha2)) {
                        errosenha = 0
                        indice = index
                        index = usuarios.length
                    }
                }
            }

        }
        if (repetida == 0) {
            if (errosenha == 0) {
                let names = document.querySelector(".names")

                names.innerHTML = ""
                usuarios[indice].nome = nome1
                usuarios[indice].senha = senha1

                alert("Usuario e senha alterados com sucesso!")
                mostrarusuarios()
                localStorage.setItem("usuarioLogado", nome1)

                let h1nome = document.querySelector("h1#bv")



                h1nome.innerHTML = `Seja bem-vindo, ${nome1}`

            }
            else {
                alert("Login incorreto, favor verificar os dados, senha incorreta!")
                funcaoatualizardados()

            }
        }
        else {
            alert("Login incorreto, favor verificar os dados, senha incorreta!")
            funcaoatualizardados()
        }

        // if (nome1 != undefined) {

        //     let h1nome = document.querySelector("#bv")
        //     h1nome.innerHTML = `Seja bem-vindo, ${nome1}!`

        //     localStorage.setItem("usuarioLogado", nome1)
        // }

    }

    ////////////////////// TESTAR O USUARIO E A SENHA, SE ESTA CADASTRADO /////////////////////////////////

    let teste = document.querySelector('.testarusuario')
    teste.addEventListener("click", testar)

    function testar() {
        let names = document.querySelector("div.names")

        names.innerHTML = ``    

        names.innerHTML = `Teste um usuário abaixo:`
        names.innerHTML += `<br><br><form>
                        <label>Usuário:</label><br>
                        <input type = "text" id="usertestar"><br>

                        <label>Senha do usuário:</label><br>
                        <input type = "password" id="senhatestar"><br>

                        <input type = "button" id="testar3" value="Testar Usuário e Senha">


                        </form>`
        const testar2 = document.querySelector("input#testar3")
        testar2.addEventListener("click", testar3)
    }


////////////////////////// FUNÇÃO TESTAR USUÁRIOS! //////////////////////////////

    function testar3() {

        let usuariotestnm = document.querySelector('input#usertestar').value
        let senhatestui = document.querySelector('input#senhatestar').value
        let erro = 1

        for (let i = 0; i < usuarios.length; i++) {
            if (usuariotestnm == usuarios[i].nome && senhatestui == usuarios[i].senha) {
                erro = 0
                i = usuarios.length
            }
        }

        if (erro == 0) {
           alert("Usuário e senha verificados com sucesso! Estão no banco de dados!")
//             names.innerHTML += `<br>Usuário e senha verificados com sucesso! Estão no banco de dados!`
//             const delay = setInterval(testar3, 8)
//             clearInterval(delay)
            testar()
            
        }
        else{
            alert("Usuário ou senha não constam no banco de dados! Tente novamente!")
//             names.innerHTML += `<br>Usuário ou senha não constam no banco de dados! Tente novamente!`
//             const delay2 = setInterval(testar3, 8)
//             clearInterval(delay2)
            testar()
        }
    }

}

/////////////////////////// HTML DE ATUALIZAR USUARIO ///////////////////////////////////



////////////////////SE O USUARIO NAO POSSUIR UM USUARIO E SENHA VALIDOS/////////////////////////////
else {
    localStorage.setItem("contjs", 1)

    const botao = document.querySelector("input.botaoe")
    botao.addEventListener("click", login)


    function login() {

        let nome = document.querySelector("input#usu").value
        let senha = document.querySelector("input#passw").value

        let controle = 0

        for (let i = 0; i < usuarios.length; i++) {

            if ((nome == usuarios[i].nome) && (senha == usuarios[i].senha)) {
                alert("Acesso liberado")
                localStorage.setItem("usuarioLogado", usuarios[i].nome)
                controle = 1
                window.location.href = "page2.html"
                i = usuarios.length
            }

        }
        if (controle == 0) {
            res.innerHTML = (`<p> O acesso foi negado!</p><p>Algo está faltando... </p>`)
        }
    }
}




