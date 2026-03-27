import{d as q,t as D,P as T,L,E as R}from"./error-message.component-_1BDfk6x.js";import{r as g,T as I,U,Q as E,an as A,F as f,B as u,N as F,$ as V,a0 as W,ao as B,ap as $,a6 as x,ad as O,af as k,a1 as t,n as h,a3 as e,ag as p,a8 as _,a2 as i,am as w,a5 as b,ah as v,aq as j,a7 as a,ar as z,u as G,aa as c,a9 as d,ac as y,as as N,ae as M,ai as m,aj as C,ak as K}from"./index-BrfERDcO.js";const Q=()=>["/products"];function H(s,n){s&1&&w(0,"shop-loading-spinner")}function J(s,n){if(s&1){const r=k();t(0,"shop-error-message",2),h("retry",function(){m(r);const l=p();return C(l.reloadProduct())}),e()}if(s&2){const r=p();_("title","Product detail unavailable")("message",r.error()||void 0)}}function X(s,n){if(s&1&&(t(0,"div",8),i(1),e()),s&2){const r=p(2);a(),d(r.product().badge)}}function Y(s,n){if(s&1&&(t(0,"span",13),i(1),e()),s&2){const r=n.$implicit;a(),d(r)}}function Z(s,n){if(s&1&&(t(0,"span",13),i(1),e()),s&2){const r=n.$implicit;a(),d(r)}}function tt(s,n){if(s&1){const r=k();t(0,"section",1)(1,"a",3),i(2," Back to catalog "),e(),t(3,"article",4)(4,"div",5),w(5,"img",6),t(6,"div",7),i(7),e(),x(8,X,2,1,"div",8),e(),t(9,"div",9)(10,"div",10),i(11),e(),t(12,"h1"),i(13),e(),t(14,"p",11),i(15),e(),t(16,"div",12),b(17,Y,2,1,"span",13,v),e(),t(19,"div",14)(20,"strong"),i(21),j(22,"currency"),e(),t(23,"span"),i(24),e()(),t(25,"div",15)(26,"button",16),h("click",function(){m(r);const l=p();return C(l.addToCart())}),i(27),e(),t(28,"button",17),h("click",function(){m(r);const l=p();return C(l.toggleWishlist())}),i(29),e()(),t(30,"dl",18)(31,"div")(32,"dt"),i(33,"SKU"),e(),t(34,"dd"),i(35),e()(),t(36,"div")(37,"dt"),i(38,"Request"),e(),t(39,"dd"),i(40),e()(),t(41,"div")(42,"dt"),i(43,"Status"),e(),t(44,"dd"),i(45),e()(),t(46,"div")(47,"dt"),i(48,"Lead time"),e(),t(49,"dd"),i(50),e()(),t(51,"div")(52,"dt"),i(53,"Inventory"),e(),t(54,"dd"),i(55),e()(),t(56,"div")(57,"dt"),i(58,"Duration"),e(),t(59,"dd"),i(60),e()(),t(61,"div")(62,"dt"),i(63,"API version"),e(),t(64,"dd"),i(65),e()()()()(),t(66,"section",19)(67,"article",20)(68,"div",21)(69,"div")(70,"div",10),i(71,"Operational metadata"),e(),t(72,"h2"),i(73,"Shipping and availability"),e()()(),t(74,"ul",22)(75,"li")(76,"strong"),i(77,"Origin"),e(),t(78,"span"),i(79),e()(),t(80,"li")(81,"strong"),i(82,"Dispatch"),e(),t(83,"span"),i(84),e()(),t(85,"li")(86,"strong"),i(87,"Footprint"),e(),t(88,"span"),i(89),e()(),t(90,"li")(91,"strong"),i(92,"Restock"),e(),t(93,"span"),i(94),e()()()(),t(95,"article",20)(96,"div",21)(97,"div")(98,"div",10),i(99,"Catalog context"),e(),t(100,"h2"),i(101,"Product tags"),e()()(),t(102,"div",12),b(103,Z,2,1,"span",13,v),e(),t(105,"p",23),i(106," This detail page keeps the list query in the URL, so navigation, support debugging and exports stay reproducible. "),e(),t(107,"p",23),i(108),e()()(),t(109,"section",20)(110,"div",21)(111,"div")(112,"div",10),i(113,"Cross-sell slice"),e(),t(114,"h2"),i(115,"Related products"),e()()(),t(116,"shop-product-grid",24),h("productSelect",function(l){m(r);const S=p();return C(S.openRelatedProduct(l))}),e()()()}if(s&2){let r;const o=p();a(),_("queryParams",o.route.snapshot.queryParams)("routerLink",z(34,Q)),a(4),_("src",o.product().imageUrl,K)("alt",o.product().name),a(),G("data-status",o.product().inventory.status),a(),c(" ",o.inventoryLabel()," "),a(),O(o.product().badge?8:-1),a(3),c(" ",o.product().category," "),a(2),d(o.product().name),a(2),d(o.product().description),a(2),y(o.product().highlights),a(4),d(N(22,32,o.product().price)),a(3),M(" ",o.product().rating," rating from ",o.product().reviewCount," reviews "),a(2),_("disabled",!o.product().inStock),a(),c(" ",o.product().inStock?"Add to cart":"Currently unavailable"," "),a(2),c(" ",o.isWishlisted()?"Remove from wishlist":"Save to wishlist"," "),a(6),d(o.product().sku),a(5),d(o.requestId()||"pending"),a(5),d(o.requestStatus()??"pending"),a(5),c("",o.product().shipping.leadTimeDays," days"),a(5),c("",o.product().inventory.quantity," units"),a(5),c("",o.requestDuration()??0," ms"),a(5),d(o.requestApiVersion()),a(14),d(o.product().shipping.origin),a(5),d(o.shippingLabel()),a(5),c(" ",o.product().shipping.carbonNeutral?"Carbon neutral route":"Standard route"," "),a(5),d(o.restockLabel()),a(9),y(o.product().tags),a(5),M(" Latest trace: ",((r=o.requestMeta())==null?null:r.method)||"GET"," ",((r=o.requestMeta())==null?null:r.path)||"/api/products/:id"," "),a(8),_("products",o.relatedProducts())("emptyTitle","No related products yet")("emptyMessage","This category currently has a single standout item.")}}class P{route=g(I);router=g(U);productsService=g(E);shopExperience=g(A);product=f(null);relatedProducts=f([]);loading=this.productsService.loading;error=this.productsService.error;requestMeta=this.productsService.responseMeta;requestId=u(()=>this.requestMeta()?.requestId??null);requestStatus=u(()=>this.requestMeta()?.statusCode??null);requestDuration=u(()=>this.requestMeta()?.durationMs??null);requestApiVersion=u(()=>this.requestMeta()?.apiVersion??"2026.03");isWishlisted=u(()=>{const n=this.product();return n?this.shopExperience.isWishlisted(n.id):!1});constructor(){this.route.paramMap.pipe(F(n=>n.get("id")),q(),D()).subscribe(n=>{if(!n){this.product.set(null);return}this.loadProduct(n)})}reloadProduct(){const n=this.route.snapshot.paramMap.get("id");n&&this.loadProduct(n)}addToCart(){const n=this.product();n?.inStock&&this.shopExperience.addToCart(n)}toggleWishlist(){const n=this.product();n&&this.shopExperience.toggleWishlist(n)}openRelatedProduct(n){this.router.navigate(["/products",n.id],{queryParams:this.route.snapshot.queryParams})}inventoryLabel(){const n=this.product();if(!n)return"Unavailable";switch(n.inventory.status){case"low-stock":return"Low stock";case"out-of-stock":return"Out of stock";default:return"Ready to ship"}}shippingLabel(){const n=this.product();return n?n.shipping.freeShipping?`Free shipping in ${n.shipping.leadTimeDays} days`:`${n.shipping.leadTimeDays} day dispatch`:"Unknown"}restockLabel(){const n=this.product();return n?.inventory.restockDate?new Date(n.inventory.restockDate).toLocaleDateString("en-US"):n?.inStock?"Available now":"Awaiting schedule"}loadProduct(n){this.productsService.getProductById(n).subscribe({next:r=>{this.product.set(r),this.loadRelatedProducts(r.id)},error:()=>{this.product.set(null),this.relatedProducts.set([])}})}loadRelatedProducts(n){this.productsService.getRelatedProducts(n,4).subscribe({next:r=>{this.relatedProducts.set(r)},error:()=>{this.relatedProducts.set([])}})}static ɵfac=function(r){return new(r||P)};static ɵcmp=V({type:P,selectors:[["shop-product-detail"]],decls:3,vars:1,consts:[[3,"title","message"],[1,"detail-shell"],[3,"retry","title","message"],[1,"back-link",3,"queryParams","routerLink"],[1,"detail-hero"],[1,"detail-hero__media"],[3,"src","alt"],[1,"detail-hero__status"],[1,"detail-hero__badge"],[1,"detail-hero__content"],[1,"section-heading__eyebrow"],[1,"detail-lead"],[1,"chip-row"],[1,"chip","chip--static"],[1,"detail-pricing"],[1,"detail-actions"],["type","button",1,"btn","btn-primary",3,"click","disabled"],["type","button",1,"btn","btn-secondary",3,"click"],[1,"audit-list","detail-audit"],[1,"detail-grid"],[1,"panel"],[1,"section-heading"],[1,"detail-list"],[1,"detail-note"],[3,"productSelect","products","emptyTitle","emptyMessage"]],template:function(r,o){r&1&&x(0,H,1,0,"shop-loading-spinner")(1,J,1,2,"shop-error-message",0)(2,tt,117,35,"section",1),r&2&&O(o.loading()?0:o.error()?1:o.product()?2:-1)},dependencies:[W,B,T,L,R,$],styles:[`.detail-shell[_ngcontent-%COMP%] {
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
      }`],changeDetection:0})}const it=[{path:"",component:P}];export{P as ProductDetailComponent,it as featureProductDetailRoutes};
