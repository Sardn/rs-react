import React from 'react';
import { Character } from '../types/api';
import styles from './Card.module.css';

type CharacterListProps = {
  character: Character;
};

export default class CharacterCard extends React.Component<CharacterListProps> {
  render() {
    return (
      <div className={styles.card}>
        <h3>{this.props.character.name}</h3>
        <img src={this.props.character.image} />
        <p>species: {this.props.character.species}</p>
        <p>gender: {this.props.character.gender}</p>
      </div>
    );
  }
}
