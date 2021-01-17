import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

import Notify from '../Notifybar';

import dashboardIco from '../../assets/icons/dashboard.svg';
import pointsIco from '../../assets/icons/points.svg';
import rankingIco from '../../assets/icons/ranking.svg';
import awardsIco from '../../assets/icons/awards.svg';
import institutionalIco from '../../assets/icons/institutional.svg';
import configurationsIco from '../../assets/icons/configurations.svg';

import avatarImage from '../../assets/images/avatar.png';
import logoImage from '../../assets/images/logo.png';

import rankingSearchIco from '../../assets/icons/ranking_search.svg';

const Sidebar: React.FC = () => {
  return (
    <Container>
      <div className="sidebar-logo">
        <img src={logoImage} alt="OnJob"/>
      </div>
      <div className="user-avatar">
        <img src={avatarImage} alt="Avatar" />
      </div>
      <p className="user-name">Luiza</p>
      <ul className="navigator-list">
        <li className="list-item">
          <div className="item-image">
            <img src={dashboardIco} alt="Dashboard"/>
          </div>
          <Link to="/">Dashboard</Link>
        </li>
        <li className="list-item">
          <div className="item-image">
            <img src={rankingIco} alt="Ranking"/>
          </div>
          <Link to="/ranking">Ranking</Link>
        </li>
        <li className="list-item">
          <div className="item-image">
            <img src={awardsIco} alt="Premiação"/>
          </div>
          <Link to="/premiacao">Premiação</Link>
        </li>
        <li className="list-item">
          <div className="item-image">
            <img src={institutionalIco} alt="Institucional"/>
          </div>
          <Link to="/institucional">Institucional</Link>
        </li>
        <li className="list-item">
          <div className="item-image">
            <img src={configurationsIco} alt="Configurações"/>
          </div>
          <Link to="/configurations">Configurações</Link>
        </li>
      </ul>
    </Container>
  );
};

export default Sidebar;
