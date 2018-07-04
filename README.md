# Exemplo de uso do Mingle com Ionic

## O que é Mingle?

O Mingle é o middleware mobile da TOTVS que permite a utilização das APIs dos produtos TOTVS com aplicativos mobile sem a necessidade de exposição do backend dos clientes.

## Como usar?

Verifique a documentação em [mobile-migle](https://www.npmjs.com/package/@totvs/mobile-mingle){target="_blank"}


# Instalando o THF no Ionic

### Passo 1 - Instalando a dependência

Execute o seguinte comando para instalar o pacote do `thf-ui`.

``` shell
npm install @totvs/thf-ui --save
```

Obs.: *Para mais informações sobre o `thf-ui` verifique a documentação em https://thf.totvs.com.br/guides/getting-started*

#### Passo 1.1 - Configurando o módulo principal

No módulo principal da aplicação é preciso fazer a importação do módulo `ThfModule` e incluí-lo nos *imports* do mesmo.
Veja abaixo como fazer:

```
...
import { ThfModule } from '@totvs/thf-ui';

@NgModule({
  ...
  imports: [
    ...
    ThfModule
  ],
  ...
})
...
```

#### Passo 1.1 - Configurando o estilo

Para que os componentes sejam exibidos corretamente, é necessário incluir o arquivo de estilo ao projeto. Para isso, verifique a documentaçao em *https://thf.totvs.com.br/guides/totvs-theme-ionic*, vá para diretamente ao tópico **Como configurar o thf-theme?**.

