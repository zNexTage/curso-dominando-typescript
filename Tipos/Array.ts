const filmesCategorias: string[] = ['Comédia', 'Drama', 'Aventura', 'Romance'];
// const filmesCategorias: string[] | number[] = ['Comédia', 'Drama', 'Aventura', 'Romance']; 
// const filmesCategorias: (string | number)[] = ['Comédia', 'Drama', 'Aventura', 'Romance']; 

filmesCategorias.push('Terror');

const filmesAnos: Array<number | string> = [];
// const filmesAnos: Array<number | string> = [];

for (let ano = 2000; ano <= new Date().getFullYear(); ano++) {
    filmesAnos.push(ano);
    filmesAnos.push(ano.toString());
}

console.log(filmesAnos);