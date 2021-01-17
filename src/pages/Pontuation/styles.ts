import styled from 'styled-components';

export const Container = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;

  .pontuation-welcome {
    width: 100%;
    max-width: 940px;
    margin-bottom: 1rem;

    color: var(--color-text-dark);
    font-size: 3.6rem;
    font-weight: 700;
  }

  .pontuation-stats {
    height: 320px;
    width: 100%;
    max-width: 940px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 5rem;

    background: var(--color-secondary);
    border-radius: 2rem;
  }

  .stats-XP {
    height: 214px;
    width: 214px;
    display: flex;
    justify-content: center;
    align-items: center;

    background: var(--color-secondary-light);
    color: var(--color-text-light);
    border-radius: 50%;
    font-size: 4rem;
    text-align: center;
  }

  .stats-ranking {
    color: var(--color-text-light);
    font-size: 1.6rem;
  }

  .stats-position {
    display: flex;
    justify-content: space-between;
    margin: 1rem 0;
  }

  .pontuation-points {
    width: 265px;
    height: 214px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: var(--color-secondary-light);
    color: var(--color-text-light);
    border-radius: 2rem;
  }

  .points-intro {
    margin-bottom: 1.5rem;

    font-size: 1.8rem;
  }

  .points {
    font-size: 6rem;
  }

  .pontuation-points button {
    margin-top: 1rem;
    padding: .5rem 1rem;

    background: #6E3DC8;
    color: var(--color-text-light);
    border: none;
    border-radius: 20px;
  }

  .informations-statistics {
    width: 100%;
    max-width: 940px;
    display: flex;
    justify-content: space-between;
  }

  .statistics-title {
    color: var(--color-text-darker);
    font-size: 2rem;
  }

  .statistics-background {
    width: 345px;
    height: 355px;
    padding: 1.5rem;
    margin-top: 1.5rem;

    background: var(--color-background-informations);
    border-radius: 2rem;
  }

  .statistic-ativity {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .statistic-ativity + .statistic-ativity {
    margin-top: 2rem;
  }

  .statistic-name {
    color: var(--color-text-darker);
    font-size: 2.4rem;
  }

  .statistic-grafic {
    display: flex;
    flex-direction: column;
  }

  .grafic-title {
    margin-bottom: 2rem;

    color: var(--color-text-darker);
    font-size: 2rem;
  }

  .grafic-1 {
    margin-bottom: 5rem;
  }
`;
