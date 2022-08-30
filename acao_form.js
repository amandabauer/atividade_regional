const campos = [
    'Nome',
    'Rua',
    'Numero',
    'CEP',
    'DataNascimento',
    'Nacionalidade',
  ];
  const selecionaveis = ['Regiao', 'Estado', 'Municipio'];
  const nacionalidades = ['Brasileiro', 'Estrangeiro'];
  const regiao = [
    { id: 1, nome: 'sul' },
    { id: 2, nome: 'sudeste' },
    { id: 3, nome: 'nordeste' },
    { id: 4, nome: 'centro-oeste' },
    { id: 5, nome: 'norte' },
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
    { id: 9, regiao: 5, nome: 'PA' },
    { id: 10, regiao: 5, nome: 'AC' },
  ];
  const municipios = [
    { id: 1, estado: 1, nome: 'rio do sul' },
    { id: 2, estado: 1, nome: 'rio do oeste' },
    { id: 3, estado: 2, nome: 'curitiba' },
    { id: 4, estado: 3, nome: 'sao paulo' },
    { id: 5, estado: 4, nome: 'rio de janeiro' },
    { id: 6, estado: 5, nome: 'Natal' },
    { id: 7, estado: 6, nome: 'ceara' },
    { id: 8, estado: 7, nome: 'brasilia' },
    { id: 9, estado: 8, nome: 'campo grande' },
    { id: 10, estado: 9, nome: 'belem' },
    { id: 11, estado: 10, nome: 'rio branco' },
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
      input.setAttribute('id', `input${campo}`);
      input.setAttribute('onChange', `onChange${campo}()`);
  
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
  
  function criarOptionVazio(select) {
    let option = document.createElement('option');
    option.setAttribute('disabled', '');
    option.setAttribute('selected', '');
    option.setAttribute('value', '');
    option.innerHTML = 'Selecione';
    select.appendChild(option);
  }

  function removeAll(select) {
      while (select?.options.length > 0) {
          select.remove(0);
      }
  }

  //option regiao
  function OptionRegiao(select) {
    criarOptionVazio(select);
    regiao.forEach(reg => {
      let option = document.createElement('option');
      option.setAttribute('value', `${reg.id}`);
      option.innerHTML = `${reg.nome}`;
      select.appendChild(option);
    });
  }

  // //option UF
  // function OptionUF(select) {
  //   estados.forEach(est => {
  //     let option = document.createElement('option');
  //     option.setAttribute('value', `${est.id}`);
  //     option.innerHTML = `${est.nome}`;
  //     select.appendChild(option);
  //   });
  // }
  
  // //option UF
  // function OptionCidade(select) {
  //   cidades.forEach(cid => {
  //     let option = document.createElement('option');
  //     option.setAttribute('value', `${cid.id}`);
  //     option.innerHTML = `${cid.nome}`;
  //     select.appendChild(option);
  //   });
  // }
  
  function onChangeNome(){
    const input = document.getElementById("inputNome");
    const value = input.value;  
    
    localStorage.setItem('nome', value);
  }

  function onChangeRua(){
    const input = document.getElementById("inputRua");
    const value = input.value;  
    
    localStorage.setItem('rua', value);
  }

  function onChangeNumero(){
    const input = document.getElementById("inputNumero");
    const value = input.value;  
    
    localStorage.setItem('numero', value);
  }

  function onChangeCEP(){
    const input = document.getElementById("inputCEP");
    const value = input.value;  
    
    localStorage.setItem('CEP', value);
  }


  
  function onChangeRegiao() {
    const select = document.getElementById("selectRegiao");
    const value = select.value;  
    
    localStorage.setItem('regiao', value);

    const selectEstado = document.getElementById("selectEstado");
    removeAll(selectEstado);
    const estadosRegiao = estados.filter(estado => estado.regiao == value);    

    criarOptionVazio(selectEstado);
    estadosRegiao.forEach(est => {
      let option = document.createElement('option');
      option.setAttribute('value', `${est.id}`);
      option.innerHTML = `${est.nome}`;
      selectEstado.appendChild(option);
    });

  }

  function onChangeEstado() {
    const select = document.getElementById("selectEstado");
    const value = select.value;  
    
    localStorage.setItem('estado', value);    

    const selectMunicipio = document.getElementById("selectMunicipio");
    removeAll(selectMunicipio);
    const municipiosEstado = municipios.filter(municipio => municipio.estado == value);

    criarOptionVazio(selectMunicipio);
    municipiosEstado.forEach(mun => {
      let option = document.createElement('option');
      option.setAttribute('value', `${mun.id}`);
      option.innerHTML = `${mun.nome}`;
      selectMunicipio.appendChild(option);
    });

  }

  function onChangeMunicipio() {
    const select = document.getElementById("selectMunicipio");
    const value = select.value;  
    
    localStorage.setItem('municipio', value);    
  }

  //gera campo selecionavel
  selecionaveis.forEach(selecionavel => {
    let select = document.createElement('select');
    let label = document.createElement('label');
    let nl = document.createElement('br');
  
    label.setAttribute('id', `${selecionavel}`);
    label.innerHTML = `${selecionavel}`;
    select.setAttribute('id', `select${selecionavel}`);
    select.setAttribute('name', 'select');
    select.setAttribute('onChange', `onChange${selecionavel}()`);
    
    if (selecionavel === 'Regiao') {
      OptionRegiao(select);
    }

    // if (selecionavel === 'Estado') {
    //   OptionUF(select);
    // }
    // if (selecionavel === 'Municipio') {
    //   OptionCidade(select);
    // }
    
    container.appendChild(nl);
    container.appendChild(label);
    container.appendChild(select);
  });
