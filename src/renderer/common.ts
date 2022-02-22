import { arm } from '@kawaiioverflow/arm'
import { Work } from '../types';

const randomPick = <T> (array: Array<T>) => array[Math.floor(Math.random() * array.length)]

const pickRandomWork = async () => { 
    const { annict_id } = randomPick(arm.filter(v => v.annict_id))
    const work = (await fetch(`https://anime-title-gacha.iamtakagi.net/api/works/${annict_id}`).then(
        (res) => res.json()
      ) as Work);
    return work;
}

export { pickRandomWork }