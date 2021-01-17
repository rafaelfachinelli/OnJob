import React from 'react';

import { Container, Content } from './styles';

import Sidebar from '../../components/Sidebar';
import Notify from '../../components/Notifybar';

import awardsImage from '../../assets/images/awards.png';
import awardOneImage from '../../assets/images/award_one.png';
import awardTwoImage from '../../assets/images/award_two.png';
import awardThreeImage from '../../assets/images/award_three.png';

const Awards: React.FC = () => {
  return (
    <Container>
      <Sidebar />
      <Content>
        <Notify />
        <p className="awards-welcome">Premiação</p>
        <div className="awards-header">
          <div className="awards-congrats">
            <p className="congrats">PARABÉNS</p>
            <p className="congrats-legend">VOCÊ FICOU EM 3º LUGAR NO RANKING MENSAL.</p>
            <p className="congrats-legend">
              Continue se esforçando para aumentar suas chances!
              Você está no caminho certo.
            </p>
            <img src={awardsImage} alt="Parabéns"/>
          </div>
          <div className="award-one">
            <img src={awardOneImage} alt="Premição 1"/>
            <p className="one-price">R$500,00</p>
            <button className="award-button">Trocar</button>
          </div>
          <div className="award-two">
            <img src={awardTwoImage} alt="Premição 2"/>
            <p className="one-price">R$100,00</p>
            <button className="award-button">Trocar</button>
          </div>
          <div className="award-three">
            <img src={awardThreeImage} alt="Premição 3"/>
            <p className="one-price">Mentoria</p>
            <button className="award-button">Trocar</button>
          </div>
        </div>

        <p className="trade-title">Histórico de Trocas</p>
        <div className="trade-history">

        </div>
      </Content>
    </Container>
  );
};

export default Awards;
