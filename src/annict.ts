import request from 'request';
import { ANNICT_TOKEN } from './env';
import { WorkId, Work, WorksGetResponse } from './types';

const findWorkById = async (id: WorkId): Promise<Work | null> => {
  return new Promise(async (resolve) => {
    const target = new URL("https://api.annict.com/v1/works");
    target.searchParams.set("filter_ids", String(id));
    request(target.href, {
      headers: {
        Authorization: `Bearer ${ANNICT_TOKEN}`,
      }
    },(err, callback, body) => {
      if(err) return resolve(null)
      try {
        const { works } = JSON.parse(body) as WorksGetResponse
        if(!works || !works.length) return resolve(null)
        resolve(works[0]) 
      } catch (error) {
        resolve(null)
      }
    })
  });
};

export { findWorkById };
