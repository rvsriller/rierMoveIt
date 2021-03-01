import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/CompletedChallenges.module.css';

export function CompleteChallenges() {
    const { challengesCompleted } = useContext(ChallengesContext);
    
    return (
        <div className={styles.completeChallengesContainer}>
            <span>Desafios Concluídos</span>
            <span>{challengesCompleted}</span>
        </div>
    );
}

