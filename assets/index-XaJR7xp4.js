import{d as q,t as w,P as T,L as R,E}from"./error-message.component-BoRFbUey.js";import{r as g,T as I,U as L,Q as V,an as A,F as f,B as u,N as F,$ as U,a0 as W,ao as z,ap as B,a6 as x,ad as O,af as k,a1 as t,n as m,a3 as n,ag as p,a8 as _,a2 as o,am as S,a5 as v,ah as b,aq as $,a7 as a,ar as j,u as G,aa as c,a9 as d,ac as M,as as N,ae as y,ai as h,aj as C,ak as K}from"./index-DtQEznvh.js";const Q=()=>["/products"];function H(s,e){s&1&&S(0,"shop-loading-spinner")}function J(s,e){if(s&1){const r=k();t(0,"shop-error-message",2),m("retry",function(){h(r);const l=p();return C(l.reloadProduct())}),n()}if(s&2){const r=p();_("title","Detalhe indisponível no momento")("message",r.error()||void 0)}}function X(s,e){if(s&1&&(t(0,"div",8),o(1),n()),s&2){const r=p(2);a(),d(r.product().badge)}}function Y(s,e){if(s&1&&(t(0,"span",13),o(1),n()),s&2){const r=e.$implicit;a(),d(r)}}function Z(s,e){if(s&1&&(t(0,"span",13),o(1),n()),s&2){const r=e.$implicit;a(),d(r)}}function tt(s,e){if(s&1){const r=k();t(0,"section",1)(1,"a",3),o(2," Voltar ao catálogo "),n(),t(3,"article",4)(4,"div",5),S(5,"img",6),t(6,"div",7),o(7),n(),x(8,X,2,1,"div",8),n(),t(9,"div",9)(10,"div",10),o(11),n(),t(12,"h1"),o(13),n(),t(14,"p",11),o(15),n(),t(16,"div",12),v(17,Y,2,1,"span",13,b),n(),t(19,"div",14)(20,"strong"),o(21),$(22,"currency"),n(),t(23,"span"),o(24),n()(),t(25,"div",15)(26,"button",16),m("click",function(){h(r);const l=p();return C(l.addToCart())}),o(27),n(),t(28,"button",17),m("click",function(){h(r);const l=p();return C(l.toggleWishlist())}),o(29),n()(),t(30,"dl",18)(31,"div")(32,"dt"),o(33,"SKU"),n(),t(34,"dd"),o(35),n()(),t(36,"div")(37,"dt"),o(38,"Consulta"),n(),t(39,"dd"),o(40),n()(),t(41,"div")(42,"dt"),o(43,"Status"),n(),t(44,"dd"),o(45),n()(),t(46,"div")(47,"dt"),o(48,"Prazo"),n(),t(49,"dd"),o(50),n()(),t(51,"div")(52,"dt"),o(53,"Estoque"),n(),t(54,"dd"),o(55),n()(),t(56,"div")(57,"dt"),o(58,"Tempo"),n(),t(59,"dd"),o(60),n()(),t(61,"div")(62,"dt"),o(63,"Versão"),n(),t(64,"dd"),o(65),n()()()()(),t(66,"section",19)(67,"article",20)(68,"div",21)(69,"div")(70,"div",10),o(71,"Entrega"),n(),t(72,"h2"),o(73,"Envio e disponibilidade"),n()()(),t(74,"ul",22)(75,"li")(76,"strong"),o(77,"Origem"),n(),t(78,"span"),o(79),n()(),t(80,"li")(81,"strong"),o(82,"Despacho"),n(),t(83,"span"),o(84),n()(),t(85,"li")(86,"strong"),o(87,"Rota"),n(),t(88,"span"),o(89),n()(),t(90,"li")(91,"strong"),o(92,"Reposição"),n(),t(93,"span"),o(94),n()()()(),t(95,"article",20)(96,"div",21)(97,"div")(98,"div",10),o(99,"Contexto"),n(),t(100,"h2"),o(101,"Tags do produto"),n()()(),t(102,"div",12),v(103,Z,2,1,"span",13,b),n(),t(105,"p",23),o(106," Esta página mantém o contexto da navegação para facilitar o retorno ao catálogo e preservar os filtros ativos. "),n(),t(107,"p",23),o(108),n()()(),t(109,"section",20)(110,"div",21)(111,"div")(112,"div",10),o(113,"Sugestões"),n(),t(114,"h2"),o(115,"Produtos relacionados"),n()()(),t(116,"shop-product-grid",24),m("productSelect",function(l){h(r);const D=p();return C(D.openRelatedProduct(l))}),n()()()}if(s&2){let r;const i=p();a(),_("queryParams",i.route.snapshot.queryParams)("routerLink",j(34,Q)),a(4),_("src",i.product().imageUrl,K)("alt",i.product().name),a(),G("data-status",i.product().inventory.status),a(),c(" ",i.inventoryLabel()," "),a(),O(i.product().badge?8:-1),a(3),c(" ",i.product().category," "),a(2),d(i.product().name),a(2),d(i.product().description),a(2),M(i.product().highlights),a(4),d(N(22,32,i.product().price)),a(3),y(" ",i.product().rating," de avaliação com ",i.product().reviewCount," opiniões "),a(2),_("disabled",!i.product().inStock),a(),c(" ",i.product().inStock?"Adicionar ao carrinho":"Indisponível no momento"," "),a(2),c(" ",i.isWishlisted()?"Remover dos favoritos":"Salvar nos favoritos"," "),a(6),d(i.product().sku),a(5),d(i.requestId()||"aguardando"),a(5),d(i.requestStatus()??"aguardando"),a(5),c("",i.product().shipping.leadTimeDays," dias"),a(5),c("",i.product().inventory.quantity," unidades"),a(5),c("",i.requestDuration()??0," ms"),a(5),d(i.requestApiVersion()),a(14),d(i.product().shipping.origin),a(5),d(i.shippingLabel()),a(5),c(" ",i.product().shipping.carbonNeutral?"Rota com compensação de carbono":"Rota padrão"," "),a(5),d(i.restockLabel()),a(9),M(i.product().tags),a(5),y(" Última rota consultada: ",((r=i.requestMeta())==null?null:r.method)||"GET"," ",((r=i.requestMeta())==null?null:r.path)||"/api/products/:id"," "),a(8),_("products",i.relatedProducts())("emptyTitle","Nenhum produto relacionado por enquanto")("emptyMessage","Esta categoria ainda destaca um item principal.")}}class P{route=g(I);router=g(L);productsService=g(V);shopExperience=g(A);product=f(null);relatedProducts=f([]);loading=this.productsService.loading;error=this.productsService.error;requestMeta=this.productsService.responseMeta;requestId=u(()=>this.requestMeta()?.requestId??null);requestStatus=u(()=>this.requestMeta()?.statusCode??null);requestDuration=u(()=>this.requestMeta()?.durationMs??null);requestApiVersion=u(()=>this.requestMeta()?.apiVersion??"2026.03");isWishlisted=u(()=>{const e=this.product();return e?this.shopExperience.isWishlisted(e.id):!1});constructor(){this.route.paramMap.pipe(F(e=>e.get("id")),q(),w()).subscribe(e=>{if(!e){this.product.set(null);return}this.loadProduct(e)})}reloadProduct(){const e=this.route.snapshot.paramMap.get("id");e&&this.loadProduct(e)}addToCart(){const e=this.product();e?.inStock&&this.shopExperience.addToCart(e)}toggleWishlist(){const e=this.product();e&&this.shopExperience.toggleWishlist(e)}openRelatedProduct(e){this.router.navigate(["/products",e.id],{queryParams:this.route.snapshot.queryParams})}inventoryLabel(){const e=this.product();if(!e)return"Indisponível";switch(e.inventory.status){case"low-stock":return"Últimas unidades";case"out-of-stock":return"Indisponível";default:return"Pronto para envio"}}shippingLabel(){const e=this.product();return e?e.shipping.freeShipping?`Frete grátis em ${e.shipping.leadTimeDays} dias`:`${e.shipping.leadTimeDays} dias para despacho`:"A confirmar"}restockLabel(){const e=this.product();return e?.inventory.restockDate?new Date(e.inventory.restockDate).toLocaleDateString("pt-BR"):e?.inStock?"Disponível agora":"Aguardando previsão"}loadProduct(e){this.productsService.getProductById(e).subscribe({next:r=>{this.product.set(r),this.loadRelatedProducts(r.id)},error:()=>{this.product.set(null),this.relatedProducts.set([])}})}loadRelatedProducts(e){this.productsService.getRelatedProducts(e,4).subscribe({next:r=>{this.relatedProducts.set(r)},error:()=>{this.relatedProducts.set([])}})}static ɵfac=function(r){return new(r||P)};static ɵcmp=U({type:P,selectors:[["shop-product-detail"]],decls:3,vars:1,consts:[[3,"title","message"],[1,"detail-shell"],[3,"retry","title","message"],[1,"back-link",3,"queryParams","routerLink"],[1,"detail-hero"],[1,"detail-hero__media"],[3,"src","alt"],[1,"detail-hero__status"],[1,"detail-hero__badge"],[1,"detail-hero__content"],[1,"section-heading__eyebrow"],[1,"detail-lead"],[1,"chip-row"],[1,"chip","chip--static"],[1,"detail-pricing"],[1,"detail-actions"],["type","button",1,"btn","btn-primary",3,"click","disabled"],["type","button",1,"btn","btn-secondary",3,"click"],[1,"audit-list","detail-audit"],[1,"detail-grid"],[1,"panel"],[1,"section-heading"],[1,"detail-list"],[1,"detail-note"],[3,"productSelect","products","emptyTitle","emptyMessage"]],template:function(r,i){r&1&&x(0,H,1,0,"shop-loading-spinner")(1,J,1,2,"shop-error-message",0)(2,tt,117,35,"section",1),r&2&&O(i.loading()?0:i.error()?1:i.product()?2:-1)},dependencies:[W,z,T,R,E,B],styles:[`.detail-shell[_ngcontent-%COMP%] {
        display: grid;
        gap: 1.5rem;
      }

      .back-link[_ngcontent-%COMP%] {
        color: #155e75;
        font-weight: 700;
        text-decoration: none;
      }

      .detail-hero[_ngcontent-%COMP%] {
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(0, 1.15fr);
        gap: 1.5rem;
        align-items: stretch;
      }

      .detail-hero__media[_ngcontent-%COMP%], 
   .detail-hero__content[_ngcontent-%COMP%], 
   .detail-grid[_ngcontent-%COMP%] {
        min-width: 0;
      }

      .detail-hero__media[_ngcontent-%COMP%] {
        position: relative;
        border-radius: 1.75rem;
        overflow: hidden;
        background:
          radial-gradient(
            circle at top,
            rgba(255, 255, 255, 0.86),
            transparent 50%
          ),
          linear-gradient(
            135deg,
            rgba(14, 116, 144, 0.12),
            rgba(217, 119, 6, 0.12)
          );
        min-height: 420px;
        box-shadow: 0 24px 54px rgba(15, 23, 42, 0.1);
      }

      .detail-hero__media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .detail-hero__status[_ngcontent-%COMP%], 
   .detail-hero__badge[_ngcontent-%COMP%] {
        position: absolute;
        left: 1rem;
        padding: 0.55rem 0.8rem;
        border-radius: 999px;
        font-size: 0.82rem;
        font-weight: 700;
        backdrop-filter: blur(12px);
      }

      .detail-hero__status[_ngcontent-%COMP%] {
        top: 1rem;
        background: rgba(255, 255, 255, 0.9);
        color: #0f172a;
      }

      .detail-hero__status[data-status='out-of-stock'][_ngcontent-%COMP%] {
        background: rgba(127, 29, 29, 0.92);
        color: #fff7ed;
      }

      .detail-hero__status[data-status='low-stock'][_ngcontent-%COMP%] {
        background: rgba(180, 83, 9, 0.92);
        color: #fff7ed;
      }

      .detail-hero__badge[_ngcontent-%COMP%] {
        bottom: 1rem;
        background: rgba(15, 23, 42, 0.9);
        color: #f8fafc;
      }

      .detail-hero__content[_ngcontent-%COMP%] {
        display: grid;
        gap: 1rem;
      }

      .detail-hero__content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
        margin: 0;
        font:
          800 clamp(2rem, 3vw, 3rem) / 1 'Iowan Old Style',
          'Georgia',
          serif;
        color: #0f172a;
      }

      .detail-lead[_ngcontent-%COMP%] {
        margin: 0;
        color: #475569;
        font-size: 1.05rem;
        line-height: 1.7;
      }

      .detail-pricing[_ngcontent-%COMP%] {
        display: flex;
        align-items: baseline;
        gap: 1rem;
        flex-wrap: wrap;
      }

      .detail-pricing[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {
        color: #0f172a;
        font-size: 2rem;
      }

      .detail-pricing[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], 
   .detail-note[_ngcontent-%COMP%] {
        color: #64748b;
        line-height: 1.6;
      }

      .detail-actions[_ngcontent-%COMP%] {
        display: flex;
        gap: 0.75rem;
        flex-wrap: wrap;
      }

      .detail-audit[_ngcontent-%COMP%] {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .detail-grid[_ngcontent-%COMP%] {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 1.5rem;
      }

      .detail-list[_ngcontent-%COMP%] {
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        gap: 1rem;
      }

      .detail-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        padding-bottom: 0.8rem;
        border-bottom: 1px solid rgba(148, 163, 184, 0.2);
      }

      .detail-list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {
        color: #0f172a;
      }

      .detail-list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
        color: #475569;
        text-align: right;
      }

      @media (max-width: 960px) {
        .detail-hero[_ngcontent-%COMP%], 
   .detail-grid[_ngcontent-%COMP%] {
          grid-template-columns: 1fr;
        }

        .detail-hero__media[_ngcontent-%COMP%] {
          min-height: 320px;
        }

        .detail-audit[_ngcontent-%COMP%] {
          grid-template-columns: 1fr;
        }
      }`],changeDetection:0})}const ot=[{path:"",component:P}];export{P as ProductDetailComponent,ot as featureProductDetailRoutes};
