//Status do Heroi
let nomeDoHeroi = "Karilisun"
let xpDoHeroi = 0
let nivelDoHeroi = " "


//Sistema de combate p/ ganhar XP
let vidaInimigo = 6

console.log("Um inimigo fraco apareceu!")

for (let i = 1; i <= 6; i++){
  vidaInimigo -= 1
  console.log("Dano no inimigo: " + i)

}

console.log("Vida total do inimigo: " + vidaInimigo)

let xpGanho = 0

if ( vidaInimigo == 0 ){
  xpGanho = 1000
  xpDoHeroi += xpGanho
  console.log("O Heroi " + nomeDoHeroi + " derrotou o inimigo e ganhou " + xpGanho + " de experiência!")
}

console.log("O Heroi " + nomeDoHeroi + " tem " + xpDoHeroi + " de experiência!")


//Sistema de subida de nível
if ( xpDoHeroi <= 1000 ){
  nivelDoHeroi = "Ferro"
  console.log("O Heroi de nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi + "!")
}else if ( xpDoHeroi > 1001 && xpDoHeroi <= 2000 ){
  nivelDoHeroi = "Bronze"
  console.log("O Heroi de nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi + "!")
}else if ( xpDoHeroi > 2001 && xpDoHeroi <= 5000 ){
  nivelDoHeroi = "Prata"
  console.log("O Heroi de nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi + "!")
}else if ( xpDoHeroi > 5001 && xpDoHeroi <= 7000 ){
  nivelDoHeroi = "Ouro"
  console.log("O Heroi de nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi + "!")
}else if ( xpDoHeroi > 7001 && xpDoHeroi <= 8000 ){
  nivelDoHeroi = "Platina"
  console.log("O Heroi de nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi + "!")
}else if ( xpDoHeroi > 8001 && xpDoHeroi <= 9000 ){
  nivelDoHeroi = "Ascendente"
  console.log("O Heroi de nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi + "!")
}else if ( xpDoHeroi > 9001 && xpDoHeroi <= 10000 ){
  nivelDoHeroi = "Imortal"
  console.log("O Heroi de nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi + "!")
}else if ( xpDoHeroi >= 10001 ){
  nivelDoHeroi = "Radiante"
  console.log("O Heroi de nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi + "!")
}


//Sistema de combate p/ ganhar XP
vidaInimigo = 6

console.log("Um inimigo fraco apareceu!")

for (let i = 1; i <= 6; i++){
  vidaInimigo -= 1
  console.log("Dano no inimigo: " + i)

}

console.log("Vida total do inimigo: " + vidaInimigo)

if ( vidaInimigo == 0 ){
  xpGanho = 1000
  xpDoHeroi += xpGanho
  console.log("O Heroi " + nomeDoHeroi + " derrotou o inimigo e ganhou " + xpGanho + " de experiência!")
}

console.log("O Heroi " + nomeDoHeroi + " tem " + xpDoHeroi + " de experiência!")


//Sistema de subida de nível
if ( xpDoHeroi <= 1000 ){
  nivelDoHeroi = "Ferro"
  console.log("O Heroi de nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi + "!")
}else if ( xpDoHeroi > 1001 && xpDoHeroi <= 2000 ){
  nivelDoHeroi = "Bronze"
  console.log("O Heroi de nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi + "!")
}else if ( xpDoHeroi > 2001 && xpDoHeroi <= 5000 ){
  nivelDoHeroi = "Prata"
  console.log("O Heroi de nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi + "!")
}else if ( xpDoHeroi > 5001 && xpDoHeroi <= 7000 ){
  nivelDoHeroi = "Ouro"
  console.log("O Heroi de nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi + "!")
}else if ( xpDoHeroi > 7001 && xpDoHeroi <= 8000 ){
  nivelDoHeroi = "Platina"
  console.log("O Heroi de nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi + "!")
}else if ( xpDoHeroi > 8001 && xpDoHeroi <= 9000 ){
  nivelDoHeroi = "Ascendente"
  console.log("O Heroi de nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi + "!")
}else if ( xpDoHeroi > 9001 && xpDoHeroi <= 10000 ){
  nivelDoHeroi = "Imortal"
  console.log("O Heroi de nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi + "!")
}else if ( xpDoHeroi >= 10001 ){
  nivelDoHeroi = "Radiante"
  console.log("O Heroi de nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi + "!")
}


//Sistema de combate p/ ganhar XP
vidaInimigo = 6

console.log("Um inimigo fraco apareceu!")

for (let i = 1; i <= 6; i++){
  vidaInimigo -= 1
  console.log("Dano no inimigo: " + i)

}

console.log("Vida total do inimigo: " + vidaInimigo)

if ( vidaInimigo == 0 ){
  xpGanho = 1000
  xpDoHeroi += xpGanho
  console.log("O Heroi " + nomeDoHeroi + " derrotou o inimigo e ganhou " + xpGanho + " de experiência!")
}

console.log("O Heroi " + nomeDoHeroi + " tem " + xpDoHeroi + " de experiência!")


//Sistema de subida de nível
if ( xpDoHeroi <= 1000 ){
  nivelDoHeroi = "Ferro"
  console.log("O Heroi de nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi + "!")
}else if ( xpDoHeroi > 1001 && xpDoHeroi <= 2000 ){
  nivelDoHeroi = "Bronze"
  console.log("O Heroi de nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi + "!")
}else if ( xpDoHeroi > 2001 && xpDoHeroi <= 5000 ){
  nivelDoHeroi = "Prata"
  console.log("O Heroi de nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi + "!")
}else if ( xpDoHeroi > 5001 && xpDoHeroi <= 7000 ){
  nivelDoHeroi = "Ouro"
  console.log("O Heroi de nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi + "!")
}else if ( xpDoHeroi > 7001 && xpDoHeroi <= 8000 ){
  nivelDoHeroi = "Platina"
  console.log("O Heroi de nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi + "!")
}else if ( xpDoHeroi > 8001 && xpDoHeroi <= 9000 ){
  nivelDoHeroi = "Ascendente"
  console.log("O Heroi de nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi + "!")
}else if ( xpDoHeroi > 9001 && xpDoHeroi <= 10000 ){
  nivelDoHeroi = "Imortal"
  console.log("O Heroi de nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi + "!")
}else if ( xpDoHeroi >= 10001 ){
  nivelDoHeroi = "Radiante"
  console.log("O Heroi de nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi + "!")
}


//Sistema de combate p/ ganhar XP
vidaInimigo = 16

console.log("Um inimigo muito forte apareceu!")

for (let i = 1; i <= 16; i++){
  vidaInimigo -= 1
  console.log("Dano no inimigo: " + i)

}

console.log("Vida total do inimigo: " + vidaInimigo)

if ( vidaInimigo == 0 ){
  xpGanho = 3000
  xpDoHeroi += xpGanho
  console.log("O Heroi " + nomeDoHeroi + " derrotou o inimigo e ganhou " + xpGanho + " de experiência!")
}

console.log("O Heroi " + nomeDoHeroi + " tem " + xpDoHeroi + " de experiência!")


//Sistema de subida de nível
if ( xpDoHeroi <= 1000 ){
  nivelDoHeroi = "Ferro"
  console.log("O Heroi de nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi + "!")
}else if ( xpDoHeroi > 1001 && xpDoHeroi <= 2000 ){
  nivelDoHeroi = "Bronze"
  console.log("O Heroi de nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi + "!")
}else if ( xpDoHeroi > 2001 && xpDoHeroi <= 5000 ){
  nivelDoHeroi = "Prata"
  console.log("O Heroi de nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi + "!")
}else if ( xpDoHeroi > 5001 && xpDoHeroi <= 7000 ){
  nivelDoHeroi = "Ouro"
  console.log("O Heroi de nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi + "!")
}else if ( xpDoHeroi > 7001 && xpDoHeroi <= 8000 ){
  nivelDoHeroi = "Platina"
  console.log("O Heroi de nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi + "!")
}else if ( xpDoHeroi > 8001 && xpDoHeroi <= 9000 ){
  nivelDoHeroi = "Ascendente"
  console.log("O Heroi de nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi + "!")
}else if ( xpDoHeroi > 9001 && xpDoHeroi <= 10000 ){
  nivelDoHeroi = "Imortal"
  console.log("O Heroi de nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi + "!")
}else if ( xpDoHeroi >= 10001 ){
  nivelDoHeroi = "Radiante"
  console.log("O Heroi de nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi + "!")
}


//Sistema de combate p/ ganhar XP
vidaInimigo = 11

console.log("Um inimigo forte apareceu!")

for (let i = 1; i <= 11; i++){
  vidaInimigo -= 1
  console.log("Dano no inimigo: " + i)

}

console.log("Vida total do inimigo: " + vidaInimigo)

if ( vidaInimigo == 0 ){
  xpGanho = 2000
  xpDoHeroi += xpGanho
  console.log("O Heroi " + nomeDoHeroi + " derrotou o inimigo e ganhou " + xpGanho + " de experiência!")
}

console.log("O Heroi " + nomeDoHeroi + " tem " + xpDoHeroi + " de experiência!")


//Sistema de subida de nível
if ( xpDoHeroi <= 1000 ){
  nivelDoHeroi = "Ferro"
  console.log("O Heroi de nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi + "!")
}else if ( xpDoHeroi > 1001 && xpDoHeroi <= 2000 ){
  nivelDoHeroi = "Bronze"
  console.log("O Heroi de nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi + "!")
}else if ( xpDoHeroi > 2001 && xpDoHeroi <= 5000 ){
  nivelDoHeroi = "Prata"
  console.log("O Heroi de nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi + "!")
}else if ( xpDoHeroi > 5001 && xpDoHeroi <= 7000 ){
  nivelDoHeroi = "Ouro"
  console.log("O Heroi de nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi + "!")
}else if ( xpDoHeroi > 7001 && xpDoHeroi <= 8000 ){
  nivelDoHeroi = "Platina"
  console.log("O Heroi de nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi + "!")
}else if ( xpDoHeroi > 8001 && xpDoHeroi <= 9000 ){
  nivelDoHeroi = "Ascendente"
  console.log("O Heroi de nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi + "!")
}else if ( xpDoHeroi > 9001 && xpDoHeroi <= 10000 ){
  nivelDoHeroi = "Imortal"
  console.log("O Heroi de nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi + "!")
}else if ( xpDoHeroi >= 10001 ){
  nivelDoHeroi = "Radiante"
  console.log("O Heroi de nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi + "!")
}

//Sistema de combate p/ ganhar XP
vidaInimigo = 3

console.log("Um inimigo muito fraco apareceu!")

for (let i = 1; i <= 3; i++){
  vidaInimigo -= 1
  console.log("Dano no inimigo: " + i)

}

console.log("Vida total do inimigo: " + vidaInimigo)

if ( vidaInimigo == 0 ){
  xpGanho = 500
  xpDoHeroi += xpGanho
  console.log("O Heroi " + nomeDoHeroi + " derrotou o inimigo e ganhou " + xpGanho + " de experiência!")
}

console.log("O Heroi " + nomeDoHeroi + " tem " + xpDoHeroi + " de experiência!")


//Sistema de subida de nível
if ( xpDoHeroi <= 1000 ){
  nivelDoHeroi = "Ferro"
  console.log("O Heroi de nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi + "!")
}else if ( xpDoHeroi > 1001 && xpDoHeroi <= 2000 ){
  nivelDoHeroi = "Bronze"
  console.log("O Heroi de nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi + "!")
}else if ( xpDoHeroi > 2001 && xpDoHeroi <= 5000 ){
  nivelDoHeroi = "Prata"
  console.log("O Heroi de nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi + "!")
}else if ( xpDoHeroi > 5001 && xpDoHeroi <= 7000 ){
  nivelDoHeroi = "Ouro"
  console.log("O Heroi de nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi + "!")
}else if ( xpDoHeroi > 7001 && xpDoHeroi <= 8000 ){
  nivelDoHeroi = "Platina"
  console.log("O Heroi de nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi + "!")
}else if ( xpDoHeroi > 8001 && xpDoHeroi <= 9000 ){
  nivelDoHeroi = "Ascendente"
  console.log("O Heroi de nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi + "!")
}else if ( xpDoHeroi > 9001 && xpDoHeroi <= 10000 ){
  nivelDoHeroi = "Imortal"
  console.log("O Heroi de nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi + "!")
}else if ( xpDoHeroi >= 10001 ){
  nivelDoHeroi = "Radiante"
  console.log("O Heroi de nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi + "!")
}


//Sistema de combate p/ ganhar XP
vidaInimigo = 6

console.log("Um inimigo fraco apareceu!")

for (let i = 1; i <= 6; i++){
  vidaInimigo -= 1
  console.log("Dano no inimigo: " + i)

}

console.log("Vida total do inimigo: " + vidaInimigo)

if ( vidaInimigo == 0 ){
  xpGanho = 1000
  xpDoHeroi += xpGanho
  console.log("O Heroi " + nomeDoHeroi + " derrotou o inimigo e ganhou " + xpGanho + " de experiência!")
}

console.log("O Heroi " + nomeDoHeroi + " tem " + xpDoHeroi + " de experiência!")


//Sistema de subida de nível
if ( xpDoHeroi <= 1000 ){
  nivelDoHeroi = "Ferro"
  console.log("O Heroi de nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi + "!")
}else if ( xpDoHeroi > 1001 && xpDoHeroi <= 2000 ){
  nivelDoHeroi = "Bronze"
  console.log("O Heroi de nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi + "!")
}else if ( xpDoHeroi > 2001 && xpDoHeroi <= 5000 ){
  nivelDoHeroi = "Prata"
  console.log("O Heroi de nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi + "!")
}else if ( xpDoHeroi > 5001 && xpDoHeroi <= 7000 ){
  nivelDoHeroi = "Ouro"
  console.log("O Heroi de nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi + "!")
}else if ( xpDoHeroi > 7001 && xpDoHeroi <= 8000 ){
  nivelDoHeroi = "Platina"
  console.log("O Heroi de nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi + "!")
}else if ( xpDoHeroi > 8001 && xpDoHeroi <= 9000 ){
  nivelDoHeroi = "Ascendente"
  console.log("O Heroi de nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi + "!")
}else if ( xpDoHeroi > 9001 && xpDoHeroi <= 10000 ){
  nivelDoHeroi = "Imortal"
  console.log("O Heroi de nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi + "!")
}else if ( xpDoHeroi >= 10001 ){
  nivelDoHeroi = "Radiante"
  console.log("O Heroi de nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi + "!")
}

console.log("Após o Heroi " + nomeDoHeroi + " alcançar o nível " + nivelDoHeroi + ", o chefão apareceu!")



//Sistema de combate p/ ganhar XP
let vidaChefao = 30

for (let i = 1; i <= 30; i++){
  vidaChefao -= 1
  console.log("Dano no inimigo: " + i)

}

console.log("Vida total do Chefão: " + vidaChefao)

if ( vidaChefao == 0 ){
  xpGanho = 9500
  xpDoHeroi += xpGanho
  console.log("O Heroi " + nomeDoHeroi + " derrotou o Chefão e ganhou " + xpGanho + " de experiência!")
}

console.log("O Heroi " + nomeDoHeroi + " tem " + xpDoHeroi + " de experiência!")


//Sistema de subida de nível
if ( xpDoHeroi <= 1000 ){
  nivelDoHeroi = "Ferro"
  console.log("O Heroi de nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi + "!")
}else if ( xpDoHeroi > 1001 && xpDoHeroi <= 2000 ){
  nivelDoHeroi = "Bronze"
  console.log("O Heroi de nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi + "!")
}else if ( xpDoHeroi > 2001 && xpDoHeroi <= 5000 ){
  nivelDoHeroi = "Prata"
  console.log("O Heroi de nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi + "!")
}else if ( xpDoHeroi > 5001 && xpDoHeroi <= 7000 ){
  nivelDoHeroi = "Ouro"
  console.log("O Heroi de nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi + "!")
}else if ( xpDoHeroi > 7001 && xpDoHeroi <= 8000 ){
  nivelDoHeroi = "Platina"
  console.log("O Heroi de nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi + "!")
}else if ( xpDoHeroi > 8001 && xpDoHeroi <= 9000 ){
  nivelDoHeroi = "Ascendente"
  console.log("O Heroi de nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi + "!")
}else if ( xpDoHeroi > 9001 && xpDoHeroi <= 10000 ){
  nivelDoHeroi = "Imortal"
  console.log("O Heroi de nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi + "!")
}else if ( xpDoHeroi >= 10001 ){
  nivelDoHeroi = "Radiante"
  console.log("O Heroi de nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi + "!")
}

console.log("O Chefão foi derrotado pelo Heroi " + nomeDoHeroi + "!" + " Agora a paz reina sobre o mundo!")