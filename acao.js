const campos = [
    'Nome',
    'Rua',
    'Número',
    'CEP',
    'DataNascimento',
    'Nacionalidade',
  ];
  const selecionaveis = ['Região', 'Estado', 'Municipio'];
  const nacionalidades = ['Brasileiro', 'Estrangeiro'];
  const regiao = [
    { id: 1, nome: 'sul' },
    { id: 2, nome: 'sudeste' },
    { id: 2, nome: 'norte' },
    { id: 3, nome: 'nordeste' },
    { id: 4, nome: 'centro-oeste' },
  ];
  const estados = [
    { id: 1, regiao: 1, nome: 'SC' },
    { id: 2, regiao: 1, nome: 'PR' },
    { id: 3, regiao: 2, nome: 'SP' },
    { id: 4, regiao: 2, nome: 'RJ' },
    { id: 5, regiao: 3, nome: 'RN' },
    { id: 6, regiao: 3, nome: 'CE' },
    { id: 7, regiao: 4, nome: 'DF' },
    { id: 8, regiao: 4, nome: 'MS' },
  ];
  const cidades = [
    { id: 1, estado: 1, nome: 'rio do sul' },
    { id: 2, estado: 1, nome: 'rio do oeste' },
    { id: 3, estado: 2, nome: 'curitiba' },
    { id: 4, estado: 3, nome: 'sao paulo' },
    { id: 5, estado: 4, nome: 'rio de janeiro' },
    { id: 6, estado: 5, nome: 'Natal' },
    { id: 7, estado: 6, nome: 'ceara' },
    { id: 8, estado: 7, nome: 'brasilia' },
    { id: 9, estado: 8, nome: 'campo grande' },
  ];
  campos.forEach(campo => {
    let label = document.createElement('label');
    let input = document.createElement('input');
    let nl = document.createElement('br');
  
    container.appendChild(nl);
    if (campo === 'Nacionalidade') {
      RadioNacionalidades(campo);
    } else {
      label.setAttribute('id', `${campo}`);
      label.innerHTML = `${campo}`;
      input.setAttribute('id', `${campo}`);
  
      if (campo === 'DataNascimento') {
        input.setAttribute('type', 'date');
      } else {
        input.setAttribute('type', 'text');
        input.setAttribute('name', `${campo}`);
        input.setAttribute('value', '');
      }
  
      container.appendChild(label);
      container.appendChild(input);
    }
  });
  
  function RadioNacionalidades(campo) {
    let nl = document.createElement('br');
    let labelCampo = document.createElement('label');
    labelCampo.setAttribute('id', `${campo}`);
    labelCampo.innerHTML = `${campo}`;
    container.appendChild(labelCampo);
  
    container.appendChild(nl);
    nacionalidades.forEach(nacionalidade => {
      let label = document.createElement('label');
      let input = document.createElement('input');
  
      label.setAttribute('id', `${nacionalidade}`);
      label.innerHTML = `${nacionalidade}`;
      input.setAttribute('id', `${nacionalidade}`);
  
      input.setAttribute('type', 'radio');
      input.setAttribute('id', `${nacionalidade}`);
      input.setAttribute('name', 'nacionalidade');
  
      container.appendChild(label);
      container.appendChild(input);
    });
  }
  
  //option regiao
  function OptionRegiao(select) {
    regiao.forEach(reg => {
      let option = document.createElement('option');
      option.setAttribute('value', `${reg.id}`);
      option.innerHTML = `${reg.nome}`;
      select.appendChild(option);
    });
  }
  //option UF
  function OptionUF(select) {
    estados.forEach(est => {
      let option = document.createElement('option');
      option.setAttribute('value', `${est.id}`);
      option.innerHTML = `${est.nome}`;
      select.appendChild(option);
    });
  }
  
  //option UF
  function OptionCidade(select) {
    cidades.forEach(cid => {
      let option = document.createElement('option');
      option.setAttribute('value', `${cid.id}`);
      option.innerHTML = `${cid.nome}`;
      select.appendChild(option);
    });
  }
  
  //gera campo selecionavel
  selecionaveis.forEach(selecionavel => {
    let select = document.createElement('select');
    let label = document.createElement('label');
    let nl = document.createElement('br');
  
    label.setAttribute('id', `${selecionavel}`);
    label.innerHTML = `${selecionavel}`;
    select.setAttribute('id', `${selecionavel}`);
    select.setAttribute('name', 'select');
    if (selecionavel === 'Região') {
      OptionRegiao(select);
    }
    if (selecionavel === 'Estado') {
      OptionUF(select);
    }
    if (selecionavel === 'Municipio') {
      OptionCidade(select);
    }
    console.log(select);
  
    container.appendChild(nl);
    container.appendChild(label);
    container.appendChild(select);
  });
