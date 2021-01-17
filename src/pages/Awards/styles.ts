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

  .awards-welcome {
    width: 100%;
    max-width: 940px;
    margin-bottom: 2rem;

    color: var(--color-text-dark);
    font-size: 3.6rem;
  }

  .awards-header {
    height: 320px;
    width: 100%;
    max-width: 940px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    background: var(--color-secondary);
    border-radius: 2rem;
  }

  .awards-congrats {
    width: 100%;
    max-width: 260px;
    height: 100%;
    max-height: 320px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 10rem;
    padding: 1rem;

    background: var(--color-secondary-light);
    color: var(--color-text-light);
    border-radius: 2rem;
  }

  .awards-congrats p {
    margin: 1rem 0;
    text-align: center;
  }

  .awards-congrats img {
    width: 120px;
    height: 120px;
  }

  .congrats {
    font-size: 2.5rem;
  }

  .congrats-legend {
    font-size: 1.6rem;
  }

  .award-one,
  .award-two,
  .award-three {
    width: 145px;
    height: 180px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    background: var(--color-secondary-light);
    border-radius: 2rem;
  }

  .one-price {
    font-size: 1.6rem;
    color: #FBC531;
  }

  .award-button {
    width: 94px;
    padding: .5rem 1rem;
    transition: .2s;

    color: var(--color-text-light);
    background: #6E3DC8;
    border-radius: 20px;
    border: none;
    outline: none;
    cursor: pointer;
  }

  .award-button:hover {
    color: black;
    background: #8e44ad;
  }

  .trade-title {
    width: 100%;
    max-width: 940px;
    color: var(--color-text-darker);
    font-size: 2rem;
    margin-top: 10rem;
  }

  .trade-history {
    height: 300px;
    width: 100%;
    max-width: 940px;
    margin-top: 1.5rem;

    background: var(--color-background-informations);
    border-radius: 2rem;
  }
`;
