import React from "react";

import "../Contato/contato.css";

const Contato = () => {
  const enviar = () => {
    var nome = window.document.querySelector(".nome-contato")
    var email = window.document.querySelector(".email-contato")
    var data = window.document.querySelector(".data-contato");
    var celular = window.document.querySelector(".celular-contato")
    var rg = window.document.querySelector(".rg-contato")
    var cic = window.document.querySelector(".certificado")
    var resul = window.document.querySelector(".res")
    var info = window.document.querySelector(".info")

    if (nome.value === "") {
      resul.innerHTML = "Favor preenche todos os campos vazios!"
      window.document.querySelector(".nome-contato").focus()

    } else if (nome.value === "" || nome.value.length <= 2) {
      resul.innerHTML = "O campo nome precisa ter no minimo 3 caractere"
      window.document.querySelector(".nome-contato").focus()
    }
    // limpar a mensagem quando atender a solicitação
    else if (email.value === "" || email.value.length <= 6) {
        resul.innerHTML = ' [ Erro ] e-mail inválido'
        window.document.querySelector('.email-contato').focus()
    }
    else if (data.value === "")  {
        resul.innerHTML = 'Informe a data de aniversário!'
        window.document.querySelector('.data-contato').focus()
    }
    else if (celular.value === "" || celular.value.length <= 10) {
        resul.innerHTML = 'Informe um numero de celular válido! com DDD'
        window.document.querySelector('.celular-contato').focus()
    }
    else if (rg.value === "" || rg.value.length <= 8) {
        resul.innerHTML = 'Rg inválido'
        window.document.querySelector('.rg-contato').focus()
     }

     else if (cic.value ==="" || cic.value.length <= 10)  {
      resul.innerHTML = "Cpf inválido"
     window.document.querySelector('.certificado').focus()

    }
    else{
      info.innerHTML = `Olá <font color="blue"> ${nome.value} </font> , seu e-mail é, <font color="blue"> ${email.value} 
      </font>, e seu aniversário é <font color="blue">${data.value}</font>. Confirme seus dados e comtinue: 
      CPF <font color="blue">${cic.value}</font>, RG <font color="blue">
       ${rg.value} </font>, <font color="blue"> ${celular.value}</font> . Agradecemos 
      por sua participação, em breve entraremos em contato.`
    }

    const [apagar, setApagar] = useState({
      
      name: '',
      email: '',
      aniv: '',
      cel: '',
      rg: '',
      cpf: '', 

     });
  }
    
      
  return (
    <>
      <div className="container">
        <div className="dad">
          <div className="header">
            <div className="dad-nome">
              <label htmlFor="l_nome-contato">Nome:</label>
              <input type="text" className="nome-contato" value={apagar.name} onChange={(e) => {(
                setApagar({
                  ...apagar, name: e.target.value
                })
              )}} />

            </div>

            <div className="dad-email">
              <label htmlFor="l_email-contato">E-mail</label>
              <input type="text" className="email-contato" />
            </div>

            <div className="dad_data">
              <label htmlFor="l_data-contato">Aniversario</label>
              <input type="date" className="data-contato" />
            </div>

            <div className="dad-cel">
              <label htmlFor="l_cel-contato">Celular</label>
              <input type="text" className="celular-contato" />
            </div>

            <div className="dad-rg">
              <label htmlFor="l_rg">Registro Geral</label>
              <input type="text" className="rg-contato" />
            </div>

            <div className="dad-cpf">
              <label htmlFor="l_cpf">CPF</label>
              <input type="text" className="certificado" />
            </div>
          </div>

          <section className="section-area">
            <fieldset className="area">
              <legend>Deixe sua mensagem</legend>
              <div className="res"></div>
              <div className="info"></div>
            </fieldset>

            <button onClick={enviar}>Enviar</button>
          </section>
        </div>
      </div>
    </>
  );
}
export default Contato
