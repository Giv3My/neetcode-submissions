class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums: number[]): boolean {
    const cache = {};

    for (const num of nums) {
      const exists = cache[num];

      if (exists) {
        return true;
      }

      cache[num] = true;
    }

    return false;
  }
}
