import React from 'react';

import { Container, Content } from './styles';

import Sidebar from '../../components/Sidebar';
import Notify from '../../components/Notifybar';

import dashboardImage from '../../assets/images/dashboard.png';
import avatarImage from '../../assets/images/avatar.png';
import activityPorcentageImage from '../../assets/images/activity-porcentage.png';

import grafic1Image from '../../assets/images/grafic1.png';
import grafic2Image from '../../assets/images/grafic2.png';


import rankingIco from '../../assets/icons/ranking.svg';

const Pontuation: React.FC = () => {
  return (
    <Container>
      <Sidebar />
      <Content>
        <Notify />
        <p className="pontuation-welcome">Minha Pontuação</p>
        <div className="pontuation-stats">
          <div className="stats-XP">1.000 <br/>XP</div>
          <div className="stats-ranking">
            <p>Sua colocação no Ranking:</p>
            <div className="stats-position">
              <img src={rankingIco} alt="Rank Hoje"/>
              <p>2º colocado</p>
              <p>hoje</p>
            </div>
            <div className="stats-position">
              <img src={rankingIco} alt="Rank Mensal"/>
              <p>3º colocado</p>
              <p>mensal</p>
            </div>
            <div className="stats-position">
              <img src={rankingIco} alt="Rank Geral"/>
              <p>34º colocado</p>
              <p>geral</p>
            </div>
          </div>
          <div className="pontuation-points">
            <p className="points-intro">Minha pontuação:</p>
            <span className="points">24</span>
            <p className="legend">pontos</p>
            <button>Resgatar prêmio</button>
          </div>
        </div>

        <div className="statistics-user">

        </div>

        <div className="informations-statistics">
          <div>
            <span className="statistics-title">Estatísticas de acertos</span>
            <div className="statistics-background">

              <div className="statistic-ativity">
                <p className="statistic-name">Marketing</p>
                <img src={activityPorcentageImage} alt="Activity Porcentage"/>
              </div>

              <div className="statistic-ativity">
                <p className="statistic-name">Psicologia</p>
                <img src={activityPorcentageImage} alt="Activity Porcentage"/>
              </div>

              <div className="statistic-ativity">
                <p className="statistic-name">Matemática</p>
                <img src={activityPorcentageImage} alt="Activity Porcentage"/>
              </div>

              <div className="statistic-ativity">
                <p className="statistic-name">Programação</p>
                <img src={activityPorcentageImage} alt="Activity Porcentage"/>
              </div>

              <div className="statistic-ativity">
                <p className="statistic-name">Excel</p>
                <img src={activityPorcentageImage} alt="Activity Porcentage"/>
              </div>

            </div>
          </div>
          

          <div className="statistic-grafic">
            <p className="grafic-title">Desempenho</p>
            <img className="grafic-1" src={grafic2Image} alt="Gráfico 1"/>
            <img className="grafic-2" src={grafic1Image} alt="Gráfico 2"/>
          </div> 
        </div>

      </Content>
    </Container>
  );
};

export default Pontuation;
