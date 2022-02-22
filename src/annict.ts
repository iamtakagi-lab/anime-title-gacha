import got from 'got'
import { ANNICT_TOKEN } from './env';
import { WorkId, Work, WorksGetResponse } from './types';

const findWorkById = async (id: WorkId): Promise<Work | null> => {
  return new Promise(async (resolve) => {
    const target = new URL("https://api.annict.com/v1/works");
    target.searchParams.set("filter_ids", String(id));
    const { works } = await got<WorksGetResponse>(target.href, {
      responseType: "json",
      headers: {
        Authorization: `Bearer ${ANNICT_TOKEN}`,
      },
    }).json<WorksGetResponse>();
    if(!works || !works.length) return resolve(null)
    resolve(works[0])
  });
};

export { findWorkById };
