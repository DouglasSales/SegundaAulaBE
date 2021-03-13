function desenharGraficos (){

    //Gráfico de pizza
    var tabela = new google.visualization.DataTable();
    //Colunas
    tabela.addColumn('string','categorias');
    tabela.addColumn('number','valores');
    //Linhas
    tabela.addRows([
        ['Educação',2000],
        ['Transporte',500],
        ['Lazer',230],
        ['Saúde',50],
        ['Cartão de crédito',900],
        ['Alimentação',260]
    ]);

    //Opcoes que customizam o gráfico
    var opcoes = {
        'title':'Tipos de Gastos',             
        //'height':400,
        //'width':900,
        is3D: true,
        //legend: 'left', legenda a esquerda
        //legend: 'bottom', legenda embaixo e top para exibir em cima
        legend: 'labeled', //Exibe uma linha com nome e percentual
        pieSliceText: 'value', //Exibe o valor no gráfico
        //pieSliceText: 'label' - o texto no gráfico
        /*'pieHole':0.4 pieHole é para colocar um burraco no meio do gráfico de pizza*/
        //colors:['grey','red','yellow', 'blue', 'pink', 'purple'] //Segue a mesma sequência do outro array
        slices:{                    
            1:{color:'grey'},
            2:{color:'#a6a6a6'},
            3:{color:'grey'},
            4:{offset: 0.4}, //Distanciamento. Faz a parte do gráfico descolar do restante  
            5:{color:'grey'}
        }
        
    };

    //desenhando o gráfico
    var grafico = new google.visualization.PieChart(document.getElementById('graficoPizza'));
    grafico.draw(tabela, opcoes);
    //Fim gráfico de pizza




    //Gráfico de linha
    tabela = new google.visualization.DataTable();
    tabela.addColumn('string','mês');
    tabela.addColumn('number','gastos');
    tabela.addRows([
        ['jan',800],
        ['fev',400],
        ['mar',1100],
        ['abr',400],
        ['mai',500],
        ['jun',750],
        ['jul',1500],
        ['ago',650],
        ['set',850],
        ['out',400],
        ['nov',1000],
        ['dez',720]
    ]);

    var opcoes = {
        title: 'Gastos por mês',
        //width: 650,
        //height: 300,
        vAxis: {
            format: 'currency', 
            gridlines: {
                count:5, 
                color:'transparent'}
                },//V de vertical e axis de eixo / Alterações no eixo vertical
        //hAxis: h de horizontal e axis de eixo
        curveType: 'function', //Muda o tipo de curso do gráfico
        legend: 'none'
    }

    var grafico = new google.visualization.LineChart(
        document.getElementById('graficoLinha'));
    grafico.draw(tabela, opcoes);
    //Fim gráfico de linha
    


    //Gráfico de colunas
    /*arrayToDataTable passa o array para a tabela,
      sempre precisar criar as linhas e colunas*/
    var tabela = google.visualization.arrayToDataTable(
        [
            ['Mês','Entrada','Saída'],
            ['jan',2500,1000],
            ['fev',2000,500],
            ['mar',3000,1300],
            ['abr',1500,1700],
            ['mai',5000,2250],
            ['jun',3567,3000],
            ['jul',3452,1468],
            ['ago',1833,5250],
            ['set',3803,5500],
            ['out',1800,1000],
            ['nov',3569,1500],
            ['dez',3000,1740]
        ]);

    var opcoes = {
        title: 'Entradas e saídas da conta',
        //width: 800,
        //height: 400,
        vAxis: {
            gridlines:{color:'transparent'},
            format:'currency',
            title:'Valores'
            },
        hAxis:{
            title:'Mês'
        }
    }

    var grafico = new google.visualization.ColumnChart(
            document.getElementById('graficoColuna'));

    grafico.draw(tabela, opcoes);




    //Gráficos Colunas surpresa
    var tabela = new google.visualization.DataTable();
    tabela.addColumn('string','categorias');
    tabela.addColumn('number','valores');
    tabela.addColumn({type: 'number', role: 'annotation'});
    tabela.addColumn({type: 'string', role: 'style'});
    tabela.addRows([
        ['Educação',2000,2000,'blue'],
        ['Transporte',500,500,'grey'],
        ['Lazer',230,230,'grey'],
        ['Saúde',50,50,'grey'],
        ['Cartão de crédito',900,900,'#8904B1'],
        ['Alimentação',260,260,'grey']
    ]);

    var opcoes = {
        title: 'Tipo de Gastos',
        height: 400,
        width: 800,
        vAxis: {gridlines:{count: 0, color: 'transparent'}},
        legend: 'none'        
    }

    var grafico = new google.visualization.ColumnChart(
        document.getElementById('graficoColunaSurpresa')
    );
    grafico.draw(tabela, opcoes);





//Gráficos Colunas surpresa
    var tabela = new google.visualization.DataTable();
    tabela.addColumn('string','categorias');
    tabela.addColumn('number','valores');
    tabela.addColumn({type: 'number', role: 'annotation'});
    tabela.addColumn({type: 'string', role: 'style'});
    tabela.addRows([
        ['Educação',2000,2000,'blue'],
        ['Transporte',500,500,'grey'],
        ['Lazer',230,230,'grey'],
        ['Saúde',50,50,'grey'],
        ['Cartão de crédito',900,900,'#8904B1'],
        ['Alimentação',260,260,'grey']
    ]);

    var opcoes = {
        title: 'Tipo de Gastos',
        height: 400,
        width: 800,
        vAxis: {gridlines:{count: 0, color: 'transparent'}},
        legend: 'none'        
    }

    var grafico = new google.visualization.ColumnChart(
        document.getElementById('graficoColunaSurpresa')
    );
    grafico.draw(tabela, opcoes);
    



    //Gráficos Barras
    var dadosJson = $.ajax({
        url:'https://gist.githubusercontent.com/DouglasSales/1aa98666f9e39d4a1aa0798395d8507e/raw/d76d2de6302caf1df60388cf153a841a62addb81/dados.json',
        dataType: 'json',
        async: false
    }).responseText

    var tabela = new google.visualization.DataTable(dadosJson);

    /* Troquei para pegar as informações direto de um arquivo json no github
      - novo gist
      - nomedoarquivo.json
      - texto json
      - salvar secreto
      - após esse processo, clicar em raw
      - copiar a url e trazer para o javascript

    var tabela = new google.visualization.DataTable(dadosJson);
    tabela.addColumn('string','categorias');
    tabela.addColumn('number','valores');
    tabela.addColumn({type: 'string', role: 'annotation'});
    tabela.addColumn({type: 'string', role: 'style'});
    tabela.addRows([
        ['Educação',2000,'R$ 2.000,00','blue'],
        ['Transporte',500,'R$ 500,00','grey'],
        ['Lazer',230,'R$ 230,00','grey'],
        ['Saúde',50,'R$ 50,00','grey'],
        ['Cartão de crédito',900,'R$ 900,00','#8904B1'],
        ['Alimentação',260,'R$ 260,00','grey']
    ]); */

    //Ordenar pela coluna do array decrescente
    tabela.sort([{column: 1, desc: true}]); 
    //tabela.sort([{column: 1}]); Padrão de ordenação é crescente

    //Tranforma a tabela para estrutura json e exibe no console do navegador, ferramentas de desenvolvedor
    var conversao = tabela.toJSON();
    console.log(conversao);

    var opcoes = {
        title: 'Tipo de Gastos',
        height: 400,
        width: 800,
        vAxis: {
            gridlines:{count: 0, color: 'transparent'
        }},
        legend: 'none',
        hAxis:{
            gridlines: {color: 'transparent'
            },
                format:'currency',
                textPosition: 'none'
            }, //Sem texto        
                //textPosition: 'in' texto dentro do gráfico
                //textPosition: 'out' texto fora do gráfico
        annotations: {
            alwaysOutside: true
            } //Para colocar o valor fora da barra, na frente
    }

    var grafico = new google.visualization.BarChart(
        document.getElementById('graficoBarrasSurpresa')
    );
    grafico.draw(tabela, opcoes);




    //Gráfico de barras com arquivo json
    var dadosJson = $.ajax({
        //url: 'dados.json',
        url: 'https://gist.githubusercontent.com/DouglasSales/77d4b027536ed07a39235bc293afdc59/raw/30f5e64d3a21435e6cbd51668b98b00dbfbdd228/dados.json',
        mimeType: 'application/json',
        //accepts: {
        //    mycustomtype: 'application/json'
        //},
        dataType: 'json',
        async: false,
    }).responseText;

    var tabela = new google.visualization.DataTable(dadosJson);

    //Ordenar pela coluna do array decrescente
    tabela.sort([{column: 1, desc: true}]); 

    var opcoes = {
        title: 'Usuários e Poupanças',
        height: 400,
        width: 800,
        legend: 'none',
        hAxis: {
            gridlines: {
                color: 'transparent'
            },
            textPosition: 'none'
        },
        annotations: {
            alwaysOutside: true
            } //Para colocar o valor fora da barra, na frente
    }

    var grafico = new google.visualization.BarChart(
        document.getElementById('graficoBarrasJson'));

    grafico.draw(tabela, opcoes);


}