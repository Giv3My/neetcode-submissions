class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const result = {};

        for (const str of strs) {
            const count = Array(26).fill(0);

            for (const char of str) {
                const idx = char.charCodeAt(0) - 'a'.charCodeAt(0);
                count[idx] += 1;
            }

            const key = count.join(',');

            if (!result[key]) {
                result[key] = [str];
                continue;
            }

            result[key].push(str);
        }

        return Object.values(result);
    }
}
