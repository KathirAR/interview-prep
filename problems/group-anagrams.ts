function groupAnagrams(strs:string[])
{
    let map = new Map<string,string[]>();

    for(let str of strs){
        let signature = str.split('').sort().join();
        if(map.has(signature)){
            const group = map.get(signature)!;
            group.push(str);
        }
        else map.set(signature,[str]);
    }

return Array.from(map.values());
}