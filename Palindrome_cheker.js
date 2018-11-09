function isPalindrome(str){
    let sript=  String(str).replace("/\W/g","");
    let toLow = sript.toLowerCase()
    let Blank = ""
    for (let i = toLow.length -1; i >=0; i--){
        Blank += toLow[i];
    }
    return Blank == toLow
}

console.log(isPainldrome("Dion"))
