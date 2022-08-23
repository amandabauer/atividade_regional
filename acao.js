const campos = ["Nome", "Rua", "Número", "CEP","DataNascimento"]
const regiao = [{id: 1, nome: 'sul'}, {id: 2, nome: 'sudeste'}, {id: 2, nome: 'norte'}, {id: 3, nome: 'nordeste'}, {id: 4, nome: 'centro-oeste'}]
const estados = [{id:1, regiao: 1, nome: 'SC'}, {id:2, regiao: 1, nome: 'PR'},{id:3, regiao: 2, nome: 'SP'},  {id:4, regiao: 2, nome: 'RJ'},  {id:5, regiao: 3, nome: 'RN'},  {id:6, regiao: 3, nome: 'CE'},  {id:7, regiao: 4, nome: 'DF'},  {id:8, regiao: 4, nome: 'MS'} ]
const cidades = [{id:1, estado:1, nome: 'rio do sul'}, {id:2, estado:1, nome: 'rio do oeste'}, {id:3, estado:2, nome: 'curitiba'}, {id:4, estado:3, nome: 'sao paulo'}, {id:5, estado:4, nome: 'rio de janeiro'}, {id:6, estado:5, nome: 'Natal'}, {id:7, estado:6, nome: 'ceara'}, {id:8, estado:7, nome: 'brasilia'}, {id:9, estado:8, nome: 'campo grande'}]
//const nacionalidade = [{id:1, nome: 'brasileiro'}, {id:2, nome: 'estrangeiro'}];


const selectEstados = estados.filter((estado) => estado.regiao === 1)
const selectCidades = cidades.filter((cidade) => cidade.estado === 1)

regiao.forEach((reg) => { let option = document.createElement("option")
option.setAttribute("value",`${uniqueRegiao[j]}`)
option.innerHTML=`${uniqueRegiao[j]}`
select.appendChild(option)})

estados.forEach((reg) => { let option = document.createElement("option")
    option.setAttribute("value",`${uniqueUF[j]}`)
    option.innerHTML=`${uniqueUF[j]}`
    select.appendChild(option)
})

cidades.forEach((reg) => { let option = document.createElement("option")
    option.setAttribute("value",`${uniqueCidade[j]}`)
    option.innerHTML=`${uniqueCidade[j]}`
    select.appendChild(option)
})

console.log(selectEstados)
selectEstados.forEach((selEst) => console.log(selEst.nome))


console.log(selectCidades)
selectCidades.forEach((selCid) => console.log(selCid.nome))


/*const arrayRegiao = locais.map((object)=>object.regiao)
const uniqueRegiao = [...new Set(arrayRegiao)]

const arrayUF = locais.map((object)=>object.UF)
const uniqueUF = [...new Set(arrayUF)]

const arrayCidade = locais.map((object)=>object.cidade)
const uniqueCidade = [...new Set(arrayCidade)]*/

for (let i = 0; i < campos.length; i++){
    let label = document.createElement("label")
    let input = document.createElement("input")
    label.setAttribute("id",`${campos[i]}`)
    label.innerHTML=`${campos[i]}`
    input.setAttribute("id",`${campos[i]}`)
    if(campos[i]=="Nacionalidade"){
        input.setAttribute("type","radio")
    }else if(campos[i]=="DataNascimento"){
        input.setAttribute("type","date")
    }else{
        input.setAttribute("type","text")
        input.setAttribute("name",`${campos[i]}`)
        input.setAttribute("value","")
    }
    container.appendChild(label)
    container.appendChild(input)

}


//option regiao
function OptionRegiao(select){
    for(let j=0;j<uniqueRegiao.length;j++){
        let option = document.createElement("option")
        option.setAttribute("value",`${uniqueRegiao[j]}`)
        option.innerHTML=`${uniqueRegiao[j]}`
        select.appendChild(option)
    }
}
//option UF
function OptionUF(select){
    for(let j=0;j<uniqueUF.length;j++){
        let option = document.createElement("option")
        option.setAttribute("value",`${uniqueUF[j]}`)
        option.innerHTML=`${uniqueUF[j]}`
        select.appendChild(option)
    }
}
//option UF
function OptionCidade(select){
    for(let j=0;j<uniqueCidade.length;j++){
        let option = document.createElement("option")
        option.setAttribute("value",`${uniqueCidade[j]}`)
        option.innerHTML=`${uniqueCidade[j]}`
        select.appendChild(option)
    }
}

//gera campo selecionavel
for (let i = 0; i < selecionavel.length; i++){
    let select = document.createElement("select")
    let label = document.createElement("label")
    label.setAttribute("id",`${selecionavel[i]}`)
    label.innerHTML=`${selecionavel[i]}`
    select.setAttribute("id",`${selecionavel[i]}`)
    select.setAttribute("name","select")
    if(selecionavel[i]=="Regiao"){
        OptionRegiao(select);
    }
    if(selecionavel[i]=="UF"){
        OptionUF(select);
    }
    if(selecionavel[i]=="Municipio"){
        OptionCidade(select);
    }
   
    container.appendChild(label)
    container.appendChild(select)
}

