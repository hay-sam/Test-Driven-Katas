const wrap = (line, maxLen) => {

  let currentIdx = 0;
  let result =""
  if(line === "") return line
  while(line.length >0){
    if(line.length <= maxLen){
      result += line;
      line = ""
    }
    else if(line.lastIndexOf(" ",maxLen)=== -1){
      let spaceIdx = line.indexOf(" ")
      if(spaceIdx === -1){
        result += line;
        line = ""
        console.log("i found no spaces at all")
      }else{
        console.log("i found the next space")
        result += line.substring(0,spaceIdx) +"\n";
        line = line.slice(spaceIdx + 1)
      }
    }else{
      let spaceIdx = line.lastIndexOf(" ",maxLen)
      result += line.substring(0,spaceIdx) +"\n";
      line = line.slice(spaceIdx + 1)
    }


};
return result
}
module.exports = wrap



