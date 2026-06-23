function isAnagram(s:string,t:string):boolean{

    if (s.length !== t.length) return false;

    let count = new Map<string,number>();

    for(const char of s){
        count.set(char,(count.get(char)??0)+1)
    }

    for(const char of t){
        if(!count.has(char)) return false;

        const remaining = count.get(char)!-1;

        if(remaining === 0) count.delete(char);
        else count.set(char,remaining);

    }

    return count.size===0;

}