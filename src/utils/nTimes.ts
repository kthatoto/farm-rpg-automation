export const nTimes = async (callable: () => Promise<void>, n: number) => {
  for (const _ of new Array(n).fill(undefined)) {
    await callable();
  }
};
