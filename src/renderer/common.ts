import { Work } from '../types';
import { API_ENDPOINT } from './consts';

const randomPick = <T> (array: Array<T>) => array[Math.floor(Math.random() * array.length)]

const pickRandomWork = async () => { 
    const annictIds = (await fetch(`https://arm.kawaiioverflow.com/api/arm?service=annict`).then((res) => res.json()) as (number | null)[])
    const annictId = randomPick(annictIds.filter(v => v !== null))
    const work = (await fetch(`${API_ENDPOINT}/works/${annictId}`).then(
        (res) => res.json()
      ) as Work);
    return work;
}

export { pickRandomWork }