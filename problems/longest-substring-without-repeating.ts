function lengthOfLongestSubstring(s: string): number {
    let left = 0;
    let maxLen = 0;
    let set = new Set<string>();

    for(let right = 0; right<s.length;right++){
        while(set.has(s[right]!))
            {
            set.delete(s[left]!)
            left = left+1;
        }
        set.add(s[right]!);

        let currentLen = right - left + 1;

        if (currentLen>maxLen) maxLen = currentLen;
    }

    return maxLen;
};