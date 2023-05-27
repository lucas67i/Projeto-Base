// Produto
class Produto {
    constructor(Nome, Lancamento, Descricao, Preco) {
        this.Nome = Nome
        this.Lancamento = Lancamento
        this.Descricao = Descricao
        this.Preco = Preco
    }

    mostrarProdutos() {
        return this.Nome + this.Lancamento + this.Descricao + this.Preco
    }

}

const produto = new Produto("GeForce RTX 4090 Suprim Liquid X MSI ", "12-10-2022 ", "MUITO MAIS QUE RÁPIDA ", "US$ 1.599", "https://images.kabum.com.br/produtos/fotos/388005/placa-de-video-rtx-4090-suprim-liquid-x-msi-nvidia-geforce-24-gb-gddr6x-dlss-ray-tracing-geforce-rtx-4090-suprim-liquid-x-24g_1672931440_gg.jpg")
console.log(produto.mostrarProdutos())

// Destaque
class ProdutosDestaque extends Produto {
    constructor(Nome, Lancamento, Descricao, Preco, imagemDestaque) {
        super(Nome, Lancamento, Descricao, Preco, imagemDestaque)
        this.imagemDestaque = imagemDestaque
    }

    mostrarProdutoDestaque() {
        return `
        <div class="container">
            <h2>${this.Nome}</h2>
            <h3>${this.Lancamento}</h3>
            <p>${this.Descricao}</p>
            <p><strong>${this.Preco}</strong></p>
            <img src="${this.imagemDestaque}"<img>
        </div>
        `
    }
}

const produtosDestaque = new ProdutosDestaque("GeForce RTX 4090 Suprim Liquid X MSI ", "12-10-2022 ", "MUITO MAIS QUE RÁPIDA ", "US$ 1.599", "https://images.kabum.com.br/produtos/fotos/388005/placa-de-video-rtx-4090-suprim-liquid-x-msi-nvidia-geforce-24-gb-gddr6x-dlss-ray-tracing-geforce-rtx-4090-suprim-liquid-x-24g_1672931440_gg.jpg")
const produtos = document.getElementById("produto-destaque")
produtos.insertAdjacentHTML('afterbegin', produtosDestaque.mostrarProdutoDestaque());

// Lista de Produtos
class ListaDeProdutos extends Produto {
    constructor(NomeUm, LancamentoUm, DescricaoUm, PrecoUm, imagemDestaqueUm, NomeDois, LancamentoDois, DescricaoDois, PrecoDois, imagemDestaqueDois, NomeTres, LancamentoTres, DescricaoTres, PrecoTres, imagemDestaqueTres) {
        super(NomeUm, LancamentoUm, DescricaoUm, PrecoUm, imagemDestaqueUm, NomeDois, LancamentoDois, DescricaoDois, PrecoDois, imagemDestaqueDois, NomeTres, LancamentoTres, DescricaoTres, PrecoTres, imagemDestaqueTres)
        this.NomeUm = NomeUm
        this.LancamentoUm = LancamentoUm
        this.DescricaoUm = DescricaoUm
        this.PrecoUm = PrecoUm
        this.imagemDestaqueUm = imagemDestaqueUm
        this.NomeDois = NomeDois
        this.LancamentoDois = LancamentoDois
        this.DescricaoDois = DescricaoDois
        this.PrecoDois = PrecoDois
        this.imagemDestaqueDois = imagemDestaqueDois
        this.NomeTres = NomeTres
        this.LancamentoTres = LancamentoTres
        this.DescricaoTres = DescricaoTres
        this.PrecoTres = PrecoTres
        this.imagemDestaqueTres = imagemDestaqueTres
    }

    mostrarListaDeProdutos() {
        return `
        <div class="lista">
        <div class="containerUm">
            <h2>${this.NomeUm}</h2>
            <h3>${this.LancamentoUm}</h3>
            <p>${this.DescricaoUm}</p>
            <p><strong>${this.PrecoUm}</strong></p>
            <div class="imagemContainer"><img src="${this.imagemDestaqueUm}"<img></div>
        </div>
        <div class="containerDois">
            <h2>${this.NomeDois}</h2>
            <h3>${this.LancamentoDois}</h3>
            <p>${this.DescricaoDois}</p>
            <p><strong>${this.PrecoDois}</strong></p>
            <div class="imagemContainer"><img src="${this.imagemDestaqueDois}"<img></div>
        </div>
        <div class="containerTres">
            <h2>${this.NomeTres}</h2>
            <h3>${this.LancamentoTres}</h3>
            <p>${this.DescricaoTres}</p>
            <p><strong>${this.PrecoTres}</strong></p>
            <div class="imagemContainer"><img src="${this.imagemDestaqueTres}"<img></div>
        </div>
        </div>
        `
    }
}

const listaDeProdutos = new ListaDeProdutos("GeForce RTX 4080 ROG Strix Edition ", "12-05-2022 ", "MUITO MAIS QUE RÁPIDA ", "US$ 1.499 ", "https://images.kabum.com.br/produtos/fotos/419112/placa-de-video-rtx-4080-rog-strix-edition-asus-nvidia-geforce-16-gb-gddr6x-argb-dlss-ray-tracing-branco-rog-strix-rtx4080-o16g-white_1677522363_gg.jpg", "GeForce RTX 4070 Ti Gaming Gigabyte ", "12-01-2022 ", "MUITO MAIS QUE RÁPIDA ", "US$ 1.399 ", "https://images.kabum.com.br/produtos/fotos/402563/placa-de-video-rtx-4070-ti-gaming-gigabyte-nvidia-geforce-12-gb-gddr6x-dlss-3-ray-tracing-gv-n407tgaming-oc-12gd_1672920537_gg.jpg", "GeForce RTX 4060 Ti Eagle Gigabyte ", "12-08-2021 ", "MUITO MAIS QUE RÁPIDA ", "US$ 1.300 ", "https://images.kabum.com.br/produtos/fotos/462167/placa-de-video-rtx-4060-ti-gigabyte-gv-n406teagle-8gd-g10_1684841706_gg.jpg")
const produtosLista = document.getElementById("lista-produtos")
produtosLista.insertAdjacentHTML('afterbegin', listaDeProdutos.mostrarListaDeProdutos());