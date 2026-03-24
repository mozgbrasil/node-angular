import{d as S,t as T,P as D,L,E as R}from"./error-message.component-Dps8lGYT.js";import{r as _,T as q,U as I,Q as U,an as E,F as P,B as f,N as F,$ as W,a0 as B,ao as $,ap as j,a6 as x,ad as M,af as O,a1 as e,n as g,a3 as i,ag as p,a8 as u,a2 as o,am as k,a5 as b,ah as y,aq as z,a7 as a,ar as A,u as N,aa as l,a9 as s,ac as v,as as V,ae as G,ai as h,aj as m,al as K}from"./index-BiqcPepS.js";const Q=()=>["/products"];function H(r,n){r&1&&k(0,"shop-loading-spinner")}function J(r,n){if(r&1){const t=O();e(0,"shop-error-message",2),g("retry",function(){h(t);const c=p();return m(c.reloadProduct())}),i()}if(r&2){const t=p();u("title","Product detail unavailable")("message",t.error()||void 0)}}function X(r,n){if(r&1&&(e(0,"div",8),o(1),i()),r&2){const t=p(2);a(),s(t.product().badge)}}function Y(r,n){if(r&1&&(e(0,"span",13),o(1),i()),r&2){const t=n.$implicit;a(),s(t)}}function Z(r,n){if(r&1&&(e(0,"span",13),o(1),i()),r&2){const t=n.$implicit;a(),s(t)}}function tt(r,n){if(r&1){const t=O();e(0,"section",1)(1,"a",3),o(2," Back to catalog "),i(),e(3,"article",4)(4,"div",5),k(5,"img",6),e(6,"div",7),o(7),i(),x(8,X,2,1,"div",8),i(),e(9,"div",9)(10,"div",10),o(11),i(),e(12,"h1"),o(13),i(),e(14,"p",11),o(15),i(),e(16,"div",12),b(17,Y,2,1,"span",13,y),i(),e(19,"div",14)(20,"strong"),o(21),z(22,"currency"),i(),e(23,"span"),o(24),i()(),e(25,"div",15)(26,"button",16),g("click",function(){h(t);const c=p();return m(c.addToCart())}),o(27),i(),e(28,"button",17),g("click",function(){h(t);const c=p();return m(c.toggleWishlist())}),o(29),i()(),e(30,"dl",18)(31,"div")(32,"dt"),o(33,"SKU"),i(),e(34,"dd"),o(35),i()(),e(36,"div")(37,"dt"),o(38,"Request"),i(),e(39,"dd"),o(40),i()(),e(41,"div")(42,"dt"),o(43,"Lead time"),i(),e(44,"dd"),o(45),i()(),e(46,"div")(47,"dt"),o(48,"Inventory"),i(),e(49,"dd"),o(50),i()()()()(),e(51,"section",19)(52,"article",20)(53,"div",21)(54,"div")(55,"div",10),o(56,"Operational metadata"),i(),e(57,"h2"),o(58,"Shipping and availability"),i()()(),e(59,"ul",22)(60,"li")(61,"strong"),o(62,"Origin"),i(),e(63,"span"),o(64),i()(),e(65,"li")(66,"strong"),o(67,"Dispatch"),i(),e(68,"span"),o(69),i()(),e(70,"li")(71,"strong"),o(72,"Footprint"),i(),e(73,"span"),o(74),i()(),e(75,"li")(76,"strong"),o(77,"Restock"),i(),e(78,"span"),o(79),i()()()(),e(80,"article",20)(81,"div",21)(82,"div")(83,"div",10),o(84,"Catalog context"),i(),e(85,"h2"),o(86,"Product tags"),i()()(),e(87,"div",12),b(88,Z,2,1,"span",13,y),i(),e(90,"p",23),o(91," This detail page keeps the list query in the URL, so navigation, support debugging and exports stay reproducible. "),i()()(),e(92,"section",20)(93,"div",21)(94,"div")(95,"div",10),o(96,"Cross-sell slice"),i(),e(97,"h2"),o(98,"Related products"),i()()(),e(99,"shop-product-grid",24),g("productSelect",function(c){h(t);const w=p();return m(w.openRelatedProduct(c))}),i()()()}if(r&2){const t=p();a(),u("queryParams",t.route.snapshot.queryParams)("routerLink",A(29,Q)),a(4),u("src",t.product().imageUrl,K)("alt",t.product().name),a(),N("data-status",t.product().inventory.status),a(),l(" ",t.inventoryLabel()," "),a(),M(t.product().badge?8:-1),a(3),l(" ",t.product().category," "),a(2),s(t.product().name),a(2),s(t.product().description),a(2),v(t.product().highlights),a(4),s(V(22,27,t.product().price)),a(3),G(" ",t.product().rating," rating from ",t.product().reviewCount," reviews "),a(2),u("disabled",!t.product().inStock),a(),l(" ",t.product().inStock?"Add to cart":"Currently unavailable"," "),a(2),l(" ",t.isWishlisted()?"Remove from wishlist":"Save to wishlist"," "),a(6),s(t.product().sku),a(5),s(t.requestId()||"pending"),a(5),l("",t.product().shipping.leadTimeDays," days"),a(5),l("",t.product().inventory.quantity," units"),a(14),s(t.product().shipping.origin),a(5),s(t.shippingLabel()),a(5),l(" ",t.product().shipping.carbonNeutral?"Carbon neutral route":"Standard route"," "),a(5),s(t.restockLabel()),a(9),v(t.product().tags),a(11),u("products",t.relatedProducts())("emptyTitle","No related products yet")("emptyMessage","This category currently has a single standout item.")}}class C{route=_(q);router=_(I);productsService=_(U);shopExperience=_(E);product=P(null);relatedProducts=P([]);loading=this.productsService.loading;error=this.productsService.error;requestId=f(()=>this.productsService.responseMeta()?.requestId??null);isWishlisted=f(()=>{const n=this.product();return n?this.shopExperience.isWishlisted(n.id):!1});constructor(){this.route.paramMap.pipe(F(n=>n.get("id")),S(),T()).subscribe(n=>{if(!n){this.product.set(null);return}this.loadProduct(n)})}reloadProduct(){const n=this.route.snapshot.paramMap.get("id");n&&this.loadProduct(n)}addToCart(){const n=this.product();n?.inStock&&this.shopExperience.addToCart(n)}toggleWishlist(){const n=this.product();n&&this.shopExperience.toggleWishlist(n)}openRelatedProduct(n){this.router.navigate(["/products",n.id],{queryParams:this.route.snapshot.queryParams})}inventoryLabel(){const n=this.product();if(!n)return"Unavailable";switch(n.inventory.status){case"low-stock":return"Low stock";case"out-of-stock":return"Out of stock";default:return"Ready to ship"}}shippingLabel(){const n=this.product();return n?n.shipping.freeShipping?`Free shipping in ${n.shipping.leadTimeDays} days`:`${n.shipping.leadTimeDays} day dispatch`:"Unknown"}restockLabel(){const n=this.product();return n?.inventory.restockDate?new Date(n.inventory.restockDate).toLocaleDateString("en-US"):n?.inStock?"Available now":"Awaiting schedule"}loadProduct(n){this.productsService.getProductById(n).subscribe({next:t=>{this.product.set(t),this.loadRelatedProducts(t.id)},error:()=>{this.product.set(null),this.relatedProducts.set([])}})}loadRelatedProducts(n){this.productsService.getRelatedProducts(n,4).subscribe({next:t=>{this.relatedProducts.set(t)},error:()=>{this.relatedProducts.set([])}})}static ɵfac=function(t){return new(t||C)};static ɵcmp=W({type:C,selectors:[["shop-product-detail"]],decls:3,vars:1,consts:[[3,"title","message"],[1,"detail-shell"],[3,"retry","title","message"],[1,"back-link",3,"queryParams","routerLink"],[1,"detail-hero"],[1,"detail-hero__media"],[3,"src","alt"],[1,"detail-hero__status"],[1,"detail-hero__badge"],[1,"detail-hero__content"],[1,"section-heading__eyebrow"],[1,"detail-lead"],[1,"chip-row"],[1,"chip","chip--static"],[1,"detail-pricing"],[1,"detail-actions"],["type","button",1,"btn","btn-primary",3,"click","disabled"],["type","button",1,"btn","btn-secondary",3,"click"],[1,"audit-list","detail-audit"],[1,"detail-grid"],[1,"panel"],[1,"section-heading"],[1,"detail-list"],[1,"detail-note"],[3,"productSelect","products","emptyTitle","emptyMessage"]],template:function(t,d){t&1&&x(0,H,1,0,"shop-loading-spinner")(1,J,1,2,"shop-error-message",0)(2,tt,100,30,"section",1),t&2&&M(d.loading()?0:d.error()?1:d.product()?2:-1)},dependencies:[B,$,D,L,R,j],styles:[`.detail-shell[_ngcontent-%COMP%] {
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
      }`],changeDetection:0})}const it=[{path:"",component:C}];export{C as ProductDetailComponent,it as featureProductDetailRoutes};
