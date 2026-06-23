## Two Sum
- Pattern : Hash mapping (Single passing using complement check)
- Brute force: O(n²) nested loop
- Optimised : O(n) time, O(n) space using Map — check seen.has(complement) BEFORE seen.set()

## Contains Duplicate
- Pattern: hashing (Set membership check)
- O(n) time, O(n) space — Set.has() before Set.add(), return early instead of else
- Optimized: new Set(nums).size !== nums.length

## Best Time to Buy and Sell Stock
- Pattern: greedy / running minimum (loosely "two pointers, same direction" in some sources)

## Best Time to Buy and Sell Stock
- Pattern: greedy (running minimum) — also viewable as trivial 1D DP
- O(n) time, O(1) space — track minPrice and maxProfit in a single pass, no backtracking needed

## Valid Anagram
- Pattern: hashing (frequency count map, build-then-cancel)
- O(n) time, O(k) space (k = distinct chars)
- Key trick: increment counts from s, decrement while scanning t, delete keys at 0 — check map.size===0 at the end to confirm full cancellation