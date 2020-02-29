function calculator(a,b,sign){

    if (sign === "+"&& Number.isInteger(b)&& Number.isInteger(a)){
      return a + b
      }
    else if (sign === "-"&& Number.isInteger(b)&& Number.isInteger(a)){
      return a - b
      }
    else if (sign === "*"&& Number.isInteger(b)&& Number.isInteger(a)){
      return a * b
      }
    else if (sign === "/"&& Number.isInteger(b)&& Number.isInteger(a)){
      return a / b
     }
     else{
     return "unknown value"
     }
    }