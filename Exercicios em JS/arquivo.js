 const list = [
        { name: 'Rodolfo', vip: true },
        { name: 'João', vip: false },
        { name: 'Maria', vip: true },
        { name: 'Joana', vip: false },
        { name: 'Joaquim', vip: true },
        { name: 'Joana', vip: false },
        { name: 'Joaquim', vip: true }
    ]

    const newList = list.map((user) => {
        const newUser = {
            name: user.name,
            braceletColor: user.vip ? 'black' : 'green'
        }
        return newUser
    })
    console.log(newList)

    const students = [
        { name: 'Rodolfo', testGrade: 7 },
        { name: 'João', testGrade: 5 },
        { name: 'Maria', testGrade: 8 },
        { name: 'Joana', testGrade: 9 },
        { name: 'Joaquim', testGrade: 3 },
        { name: 'Joana', testGrade: 2 },
        { name: 'Joaquim', testGrade: 10 }
    ]

    const newStudents = students.map((student) => {
        const newStudent = {
            name: student.name,
            approved: student.testGrade >= 7 ? 'Aprovado' : 'Reprovado'
        }
        return newStudent
    })
    console.log(newStudents)

const companies = [
        { name: 'Microsoft', marketValue: 100, CEO: 'Satya Nadella', foundedOn: 1975 },
        { name: 'Google', marketValue: 200, CEO: 'Sundar Pichai', foundedOn: 1998 },
        { name: 'Amazon', marketValue: 300, CEO: 'Jeff Bezos', foundedOn: 1994 },
        { name: 'Facebook', marketValue: 400, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
        { name: 'Apple', marketValue: 500, CEO: 'Tim Cook', foundedOn: 1976 },
        { name: 'Oracle', marketValue: 600, CEO: 'Larry Ellison', foundedOn: 1978 },
        { name: 'Twitter', marketValue: 700, CEO: 'Jack Dorsey', foundedOn: 2006 }
    ];

    console.log('adicionar 10% de valor ao valor de mercado de cada empresa')
    // adicionar 10% de valor ao valor de mercado de cada empresa
    const newCompanies = companies.map((company) => {
        const newCompany = { // criar um novo objeto
            name: company.name, //  copiar as propriedades
            marketValue: company.marketValue * 1.1, // adicionar 10%
            CEO: company.CEO, // copiar as propriedades
            foundedOn: company.foundedOn // copiar as propriedades
        }
        return newCompany // retornar o novo objeto
    })

    console.log(newCompanies) // imprimir o novo array

    console.log('filtrar somente companhias fundadas abaixo de 1990')
//filtrar somente companhias fundadas abaixo de 1990

const companiesBelow1990 = companies.filter((company) => company.foundedOn < 1990)
console.log(companiesBelow1990)


//subtrair 10% de valor de mercado a todas as companhias
//Filtrar somente as companhias fundadas depois de 1980
// Somar o valor de mercado das restantes

const sub10Percent = (company) => {
    companies.marketValue = companies.marketValue - companies.marketValue * 10   
    return company
}

const filterCompanies = (companies) => companies.foundedOn > 1980

const calculteTotalMarketValue = (acc,companies) => acc + companies.marketValue


const marketValueRestCompanies = companies
    .map(sub10Percent)
    .filter(filterCompanies)
    .reduce(calculteTotalMarketValue, 0)

console.log('subtrair 10% de valor de mercado a todas as companhias')
console.log(marketValueRestCompanies)