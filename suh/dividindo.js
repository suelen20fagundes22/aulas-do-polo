const nomes = ['leu', 'suelen', 'francisco', 'gabriel', 'gabrieli', 'jean','kauãn moreira', 'kauãn sousa', 'jonhata','leu', 'suelen', 'francisco', 'gabriel', 'gabrieli', 'jean','kauãn moreira','leu', 'suelen', 'francisco', 'gabriel', 'gabrieli', 'jean','kauãn moreira',]

console.log("tamanho da array:", nomes.length)
const sala1 = nomes.slice(0,nomes.length/2)
const sala2 = nomes.slice(nomes.length/2)

console.log(`alunos da sala 1: ${sala1}`)
console.log(`alunos da sala 2: ${sala2}`)