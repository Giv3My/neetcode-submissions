class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }

    const countS = {};
    const countT = {};

    for (const idx in [...s]) {
      countS[s[idx]] = (countS[s[idx]] || 0) + 1;
      countT[t[idx]] = (countT[t[idx]] || 0) + 1;
    }

    for (const key in countS) {
      if (!countT[key] || countS[key] !== countT[key]) {
        return false
      }
    }

    return true;
  }
}
