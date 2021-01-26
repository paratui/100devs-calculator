let buff = ''
let flag = ''
document.querySelectorAll(".num").forEach((x, i) => {
  x.addEventListener('click', function(){shownum(x.innerHTML)})
})

function shownum(h){
  if (h==='+'){
    flag = '+'
  } else if (h==='-'){
    flag = '-'
  } else if (h==='x'){
    flag = 'x'
  } else if (h==='/'){
    flag = '/'
  }
  if (h==='='){
    const ops = document.querySelector("#res").innerText.split(flag)
    if (flag==='+'){
      document.querySelector("#res").innerText = Number(ops[0])+Number(ops[1])
    } else if(flag==='-'){
      document.querySelector("#res").innerText = Number(ops[0])-Number(ops[1])
    } else if(flag==='x'){
      document.querySelector("#res").innerText = Number(ops[0])*Number(ops[1])
    } else if(flag==='/'){
      document.querySelector("#res").innerText = Number(ops[0])/Number(ops[1])
    }
    buff=''
  } else{
    buff+=h
    document.querySelector("#res").innerText = buff
  }
}
