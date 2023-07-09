const cursos = [
    {curso: 'Programação em C#', duracao: 62, unidade: 'Largo Treze'  },
    {curso: 'ReactJS', duracao: 42, unidade: 'Largo Treze'}, 
    {curso: 'UI/UX design interfaces', duracao: 100, unidade: 'Lapa Tito' },
    {curso: 'Full-Stack Developer', duracao: 386, unidade: 'Penha'},
    {curso: 'Programação', duracao: 286, unidade: 'Largo Treze'}
]

const largoTrezecursos = cursos.filter(curso => curso.unidade === 'Largo Treze')
console.log(largoTrezecursos)

const partirDe100h = cursos.filter(curso => curso.duracao  >= 100)
console.log(partirDe100h)

const nomesunidade = cursos.map(curso => 'nome:' + curso.curso + ' unidade:' + curso.unidade)
console.log(nomesunidade)