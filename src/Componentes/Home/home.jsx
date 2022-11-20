import React from 'react';

import { Link } from 'react-router-dom';

import Iinstagram from "../Icons/instagram.svg";
import Ifacebook from "../Icons/facebook.svg";
import Ipinterest from "../Icons/pinterest.svg";
import Iyoutube from "../Icons/youtube.svg";
import imail from "../Icons/cemail.svg";
import iface from "../Icons/cface.svg";
import iinsta from "../Icons/cinsta.svg";
import itel from "../Icons/ctel.svg";
import iwhats from "../Icons/cwhats.svg";
import itwiter from "../Icons/twiter.svg";
import Carol from "../Icons/carol.png";
import Martelo from "../Icons/martelo.jpg";
import Balanca from "../Icons/balanca-dourada.png";

import '../Home/home.css';

function Quemsomos() {
  return (
    <>
      <div className="dad_quemsomos">
        <div className="header_quemsomos">
          <img className="balanca-dourada" src={Balanca} alt="" />
          <h1 className="nome-formulario">Dra. Carolina Zanuto</h1>
          <h2 className="cel">Cel.: (11) 96975-0309</h2>

          <div className="menu_qs">
            <ul className="qs">
              <li className="qs">Home</li>
              
            </ul>
            <ul className="qs">
              <li className="qs">Quem Somos</li>
            </ul>
            <ul className="qs">
              <li className="qs">Advocacia</li>
            </ul>
            <ul className="qs">
              <li className="qs">Juridico</li>
            </ul>
            <ul className="qs">
              <Link to="contato">
               <li className="qs">Contato</li>
              </Link>
            </ul>
          </div>
        </div>

        <div className="daughter">
          <div className="lado_esquerdo">
            <img className="carol" src={Martelo} alt="" />
          </div>
          <div className="lado_centro">
            <h1 className="causas">Causas</h1>
            <h2 className="descricao_qs">
              • Proteção animal <br></br> • Crianças<br></br> • Direitos civis e
              ações sociais
              <br></br> • Educação <br></br> • Meio ambiente<br></br> • Saúde
              <br></br> • Direitos humanos <br></br> • Resposta a desastres e
              assistência humanitária
            </h2>
          </div>
          <div className="lado_direito">
            <h1 className="direito">Direito</h1>
            <h2 className="descricao_direito">
              • Atuação nos processos de Goiás do cliente Magazine Luiza;{" "}
              <br></br>• Confecção de peças processuais como contestação,
              embargos de declaração, manifestações, contrarrazões, recursos,
              entre outros;
              <br></br>• Análises de processos;
              <br></br>• Participação como preposta em audiências na Vara Cível
              e no Juizado Especial Cível;
              <br></br>• Controle diário da pauta de audiências e realização da
              divisão para o time interno;
              <br></br>• Tratamento de atas de audiência;
              <br></br>• Tratamento de intimações;
              <br></br>• Realização de protocolos nos sistemas Projudi, E-saj,
              Pje, entre outros;
              <br></br>• Solicitação de subsídios para o cliente;
              <br></br>• Controle de processos novos.
            </h2>
          </div>
        </div>
      </div>
      <div className="main_form">
        <div className="b">
          <h1 className="sobre" > <h2 className="sobre-1" >Sobre</h2></h1>
          <h2 className="titulo" >
            Bacharel em Direito. Experiência com contratos voltados para área de
            tecnologia e meios de pagamento, direito do consumidor e contencioso
            cível em massa.
          </h2>
        </div>
        <div className="a">
          <img className="carolina" src={Carol} alt="" />
        </div>
      </div>


      <div className="footer">
        <div className="nossoendereco">
          Nosso Endereço
          <div className="rodape">
            Praça Gen. Gentil Falcão 49
            <div className="rodape">
              Cidade Monções
              <div className="rodape">Brooklin</div>
            </div>
          </div>
        </div>

        <div className="contato">
          Contato
          <div className="rodape">
            {" "}
            <img className="ico" src={imail} alt="" />{" "}
            contato@carolinazanuto.com.br
            <div className="rodape">
              <img className="ico" src={itel} alt="" /> (11) 5506-8369
              <div className="rodape">
                {" "}
                <img className="ico" src={iwhats} alt="" /> (11) 96975-0309
              </div>
            </div>
          </div>
        </div>

        <div className="rede_cad">
          Rede Sociais
          <div className="rodape">
            {" "}
            <img className="ico" src={iinsta} alt="" /> Carol Zanuto
            <div className="rodape">
              {" "}
              <img className="ico" src={iface} alt="" /> Carolina Zanuto
              <div className="rodape">
                <img className="ico" src={itwiter} alt="" /> Dra. Carolina Zanuto
              </div>
            </div>
          </div>
        </div>

        <div className="redesociais">
          <img className="instagram" src={Iinstagram} alt="" />
          <img className="facebook" src={Ifacebook} alt="" />
          <img className="pinterest" src={Ipinterest} alt="" />
          <img className="youtube" src={Iyoutube} alt="" />
        </div>
        <div className="fim"></div>
      </div>
    </>
  );
}
export default Quemsomos;
