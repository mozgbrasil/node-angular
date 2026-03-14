import{o as q,e as U,at as $,r as R,D as G,au as I,O as V,av as p,aw as w,$ as f,a0 as C,ap as A,ax as a,ay as E,az as S,a2 as i,aA as c,a6 as y,a5 as b,ah as F,aq as B,u as D,a7 as o,aB as N,aa as _,ad as P,a9 as s,ac as v,as as K,ag as h,al as W,a1 as l,a3 as g,af as z,n as Y,a8 as H,ai as L,aj as j}from"./index-Bk4bXxn6.js";function ct(e,r){return r===void 0&&(r=$),e=e??J,q(function(t,n){var d,u=!0;t.subscribe(U(n,function(x){var T=r(x);(u||!e(d,T))&&(u=!1,d=T,n.next(x))}))})}function J(e,r){return e===r}function it(e){e||(e=R(G));const r=new V(t=>{if(e.destroyed){t.next();return}return e.onDestroy(t.next.bind(t))});return t=>t.pipe(I(r))}function Q(e,r){if(e&1&&(a(0,"div",4),i(1),c()),e&2){const t=h();o(),s(t.product().badge)}}function X(e,r){e&1&&(a(0,"span"),i(1,"Featured"),c())}function Z(e,r){if(e&1&&(a(0,"span"),i(1),c()),e&2){const t=r.$implicit;o(),s(t)}}function tt(e,r){if(e&1&&(a(0,"span"),i(1),c()),e&2){const t=r.$implicit;o(),s(t)}}class m{product=p.required();productClick=w();inventoryLabel(){switch(this.product().inventory.status){case"low-stock":return"Low stock";case"out-of-stock":return"Out of stock";default:return"Ready to ship"}}selectProduct(r){r?.preventDefault(),this.productClick.emit(this.product())}static ɵfac=function(t){return new(t||m)};static ɵcmp=f({type:m,selectors:[["shop-product-card"]],inputs:{product:[1,"product"]},outputs:{productClick:"productClick"},decls:33,vars:16,consts:[["tabindex","0","role","button",1,"product-card",3,"click","keyup.enter","keyup.space"],[1,"product-card__image"],[3,"src","alt"],[1,"product-card__status"],[1,"product-card__badge"],[1,"product-card__body"],[1,"product-card__eyebrow"],[1,"product-card__title"],[1,"product-card__description"],[1,"product-card__highlights"],[1,"product-card__footer"],[1,"product-card__price"],[1,"product-card__shipping"],[1,"product-card__rating"],[1,"product-card__tags"]],template:function(t,n){t&1&&(a(0,"article",0),E("click",function(){return n.selectProduct()})("keyup.enter",function(){return n.selectProduct()})("keyup.space",function(u){return n.selectProduct(u)}),a(1,"div",1),S(2,"img",2),a(3,"div",3),i(4),c(),y(5,Q,2,1,"div",4),c(),a(6,"div",5)(7,"div",6)(8,"span"),i(9),c(),y(10,X,2,0,"span"),c(),a(11,"h3",7),i(12),c(),a(13,"p",8),i(14),c(),a(15,"div",9),b(16,Z,2,1,"span",null,F),c(),a(18,"div",10)(19,"div")(20,"div",11),i(21),B(22,"currency"),c(),a(23,"div",12),i(24),c()(),a(25,"div",13)(26,"strong"),i(27),c(),a(28,"span"),i(29),c()()(),a(30,"div",14),b(31,tt,2,1,"span",null,F),c()()()),t&2&&(D("aria-label","View details for "+n.product().name),o(2),N("src",n.product().imageUrl,W)("alt",n.product().name),o(),D("data-status",n.product().inventory.status),o(),_(" ",n.inventoryLabel()," "),o(),P(n.product().badge?5:-1),o(4),s(n.product().category),o(),P(n.product().featured?10:-1),o(2),s(n.product().name),o(2),s(n.product().description),o(2),v(n.product().highlights.slice(0,2)),o(5),_(" ",K(22,14,n.product().price)," "),o(3),_(" ",n.product().shipping.freeShipping?"Free shipping":n.product().shipping.leadTimeDays+" day dispatch"," "),o(3),s(n.product().rating),o(2),_("",n.product().reviewCount," reviews"),o(2),v(n.product().tags.slice(0,3)))},dependencies:[C,A],styles:[`.product-card[_ngcontent-%COMP%] {
        display: grid;
        gap: 1rem;
        border: 1px solid rgba(15, 23, 42, 0.08);
        border-radius: 1.5rem;
        background: rgba(255, 255, 255, 0.92);
        overflow: hidden;
        cursor: pointer;
        min-height: 100%;
        box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
        transition:
          transform 180ms ease,
          box-shadow 180ms ease,
          border-color 180ms ease;
      }

      .product-card[_ngcontent-%COMP%]:hover, 
   .product-card[_ngcontent-%COMP%]:focus-visible {
        transform: translateY(-4px);
        box-shadow: 0 24px 52px rgba(15, 23, 42, 0.12);
        border-color: rgba(15, 23, 42, 0.2);
        outline: none;
      }

      .product-card__image[_ngcontent-%COMP%] {
        position: relative;
        aspect-ratio: 1 / 1;
        background:
          radial-gradient(
            circle at top,
            rgba(255, 255, 255, 0.86),
            transparent 55%
          ),
          linear-gradient(
            135deg,
            rgba(14, 116, 144, 0.12),
            rgba(217, 119, 6, 0.12)
          );
      }

      .product-card__image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .product-card__status[_ngcontent-%COMP%], 
   .product-card__badge[_ngcontent-%COMP%] {
        position: absolute;
        left: 1rem;
        padding: 0.45rem 0.7rem;
        border-radius: 999px;
        font-size: 0.78rem;
        font-weight: 700;
        letter-spacing: 0.02em;
        backdrop-filter: blur(12px);
      }

      .product-card__status[_ngcontent-%COMP%] {
        top: 1rem;
        background: rgba(255, 255, 255, 0.88);
        color: #0f172a;
      }

      .product-card__status[data-status='out-of-stock'][_ngcontent-%COMP%] {
        background: rgba(127, 29, 29, 0.9);
        color: #fff7ed;
      }

      .product-card__status[data-status='low-stock'][_ngcontent-%COMP%] {
        background: rgba(180, 83, 9, 0.88);
        color: #fff7ed;
      }

      .product-card__badge[_ngcontent-%COMP%] {
        bottom: 1rem;
        background: rgba(15, 23, 42, 0.88);
        color: #f8fafc;
      }

      .product-card__body[_ngcontent-%COMP%] {
        display: grid;
        gap: 0.85rem;
        padding: 0 1.25rem 1.25rem;
      }

      .product-card__eyebrow[_ngcontent-%COMP%], 
   .product-card__highlights[_ngcontent-%COMP%], 
   .product-card__tags[_ngcontent-%COMP%] {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
      }

      .product-card__eyebrow[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], 
   .product-card__highlights[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], 
   .product-card__tags[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
        padding: 0.2rem 0.55rem;
        border-radius: 999px;
        background: rgba(14, 116, 144, 0.08);
        color: #155e75;
        font-size: 0.76rem;
      }

      .product-card__title[_ngcontent-%COMP%] {
        margin: 0;
        font:
          700 1.1rem/1.2 'Avenir Next',
          'Segoe UI',
          sans-serif;
        color: #0f172a;
      }

      .product-card__description[_ngcontent-%COMP%] {
        margin: 0;
        color: #475569;
        font-size: 0.94rem;
        line-height: 1.55;
      }

      .product-card__footer[_ngcontent-%COMP%] {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        align-items: flex-end;
      }

      .product-card__price[_ngcontent-%COMP%] {
        color: #0f172a;
        font-size: 1.2rem;
        font-weight: 800;
      }

      .product-card__shipping[_ngcontent-%COMP%], 
   .product-card__rating[_ngcontent-%COMP%] {
        color: #64748b;
        font-size: 0.82rem;
      }

      .product-card__rating[_ngcontent-%COMP%] {
        display: grid;
        justify-items: end;
      }

      .product-card__rating[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {
        color: #0f172a;
        font-size: 1rem;
      }`],changeDetection:0})}const nt=(e,r)=>r.id;function et(e,r){if(e&1){const t=z();l(0,"shop-product-card",3),Y("productClick",function(d){L(t);const u=h();return j(u.productSelect.emit(d))}),g()}if(e&2){const t=r.$implicit;H("product",t)}}function rt(e,r){if(e&1&&(l(0,"div",2)(1,"h3"),i(2),g(),l(3,"p"),i(4),g()()),e&2){const t=h();o(2),s(t.emptyTitle()),o(2),s(t.emptyMessage())}}class M{products=p.required();emptyTitle=p("No products matched these filters");emptyMessage=p("Adjust the search, price range or stock toggles to surface more options.");productSelect=w();static ɵfac=function(t){return new(t||M)};static ɵcmp=f({type:M,selectors:[["shop-product-grid"]],inputs:{products:[1,"products"],emptyTitle:[1,"emptyTitle"],emptyMessage:[1,"emptyMessage"]},outputs:{productSelect:"productSelect"},decls:4,vars:1,consts:[[1,"product-grid"],[3,"product"],[1,"empty-surface"],[3,"productClick","product"]],template:function(t,n){t&1&&(l(0,"div",0),b(1,et,1,1,"shop-product-card",1,nt,!1,rt,5,2,"div",2),g()),t&2&&(o(),v(n.products()))},dependencies:[C,m],styles:[`.product-grid[_ngcontent-%COMP%] {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 24px;
      }

      .empty-surface[_ngcontent-%COMP%] {
        grid-column: 1 / -1;
        text-align: center;
        padding: 3rem;
        border: 1px dashed rgba(15, 23, 42, 0.14);
        border-radius: 1.5rem;
        background: rgba(255, 255, 255, 0.7);
        color: #475569;
      }

      @media (max-width: 768px) {
        .product-grid[_ngcontent-%COMP%] {
          grid-template-columns: 1fr;
          gap: 16px;
        }
      }`],changeDetection:0})}class O{static ɵfac=function(t){return new(t||O)};static ɵcmp=f({type:O,selectors:[["shop-loading-spinner"]],decls:4,vars:0,consts:[["aria-live","polite",1,"state-panel"],["aria-hidden","true",1,"state-panel__spinner"],[1,"state-panel__text"]],template:function(t,n){t&1&&(a(0,"div",0),S(1,"div",1),a(2,"p",2),i(3,"Loading catalog data..."),c()())},dependencies:[C],encapsulation:2,changeDetection:0})}function ot(e,r){if(e&1){const t=z();a(0,"button",5),E("click",function(){L(t);const d=h();return j(d.retry.emit())}),i(1," Retry request "),c()}}class k{title=p();message=p();showRetry=p(!0);retry=w();static ɵfac=function(t){return new(t||k)};static ɵcmp=f({type:k,selectors:[["shop-error-message"]],inputs:{title:[1,"title"],message:[1,"message"],showRetry:[1,"showRetry"]},outputs:{retry:"retry"},decls:8,vars:3,consts:[["role","alert",1,"state-panel","state-panel--error"],[1,"state-panel__eyebrow"],[1,"state-panel__title"],[1,"state-panel__text"],["type","button",1,"btn","btn-primary"],["type","button",1,"btn","btn-primary",3,"click"]],template:function(t,n){t&1&&(a(0,"div",0)(1,"div",1),i(2,"Service Notice"),c(),a(3,"h3",2),i(4),c(),a(5,"p",3),i(6),c(),y(7,ot,2,0,"button",4),c()),t&2&&(o(4),_(" ",n.title()||"We could not load the catalog right now."," "),o(2),_(" ",n.message()||"The request failed. Review the filters or retry the request in a moment."," "),o(),P(n.showRetry()?7:-1))},dependencies:[C],encapsulation:2,changeDetection:0})}export{k as E,O as L,M as P,ct as d,it as t};
