class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums: number[], target: number): number[] {
    const diffMap = {};

    for (const idx in nums) {
      const key = target - nums[idx];
      const existsIdx = diffMap[key];

      if (existsIdx !== undefined) {
        return [Number(existsIdx), Number(idx)];
      }

      diffMap[nums[idx]] = idx;
    }

    return [];
  }
}
