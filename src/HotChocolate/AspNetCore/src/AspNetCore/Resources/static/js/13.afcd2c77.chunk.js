(this["webpackJsonp@banana-cake-pop/main"]=this["webpackJsonp@banana-cake-pop/main"]||[]).push([[13],{1063:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t(381),a=Object(r.a)((function(e){return function(){e(this),this.name="EmptyError",this.message="no elements in sequence"}}));function c(e,n){var t="object"===typeof n;return new Promise((function(r,c){var o,i=!1;e.subscribe({next:function(e){o=e,i=!0},error:c,complete:function(){i?r(o):t?r(n.defaultValue):c(new a)}})}))}},1201:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return Q}));var r=t(77),a=t(79),c=t.n(a),o=t(91),i=t(102),d=t(367),s=t(0),u=t(106);function l(e,n){var t;return e?n?n.expandable?n:null!==(t=n.parent)&&void 0!==t?t:e:e:void 0}function f(e){var n=Object(u.b)();return e.triggerCreate({name:"",expandable:!1,metadata:{id:n,kind:"document"}})}function b(e){var n=Object(u.c)();return e.triggerCreate({name:"",expandable:!0,metadata:{id:n,kind:"folder"}})}var m=t(2),p="root-menu",j=function(){var e=Object(i.f)(p),n=Object(s.useCallback)(Object(o.a)(c.a.mark((function n(){var t;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e){n.next=5;break}return t=e.item.treeModel,n.next=4,b(t);case 4:e.hide();case 5:case"end":return n.stop()}}),n)}))),[e]),t=Object(s.useCallback)(Object(o.a)(c.a.mark((function n(){var t;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e){n.next=5;break}return t=e.item.treeModel,n.next=4,f(t);case 4:e.hide();case 5:case"end":return n.stop()}}),n)}))),[e]);return Object(m.jsxs)(d.b,{id:p,children:[Object(m.jsx)(d.a,{onClick:t,children:"New Document"}),Object(m.jsx)(d.a,{onClick:n,children:"New Folder"})]})};var O=t(437),x=t(111),v=t(128),h=t(374),k=t(284),C=t(285),w=t(126),g=t(137),E=t(179),y=t(150),T=t(195),H=t(151),S=t(121),I=t(140),R=t(98),M=t(1116),L=t(114),N=t(202),F=t(154),_=t(180),D=t(11),P=t(1063),A=t(774);var z=t(192);function B(e){var n=Object(i.f)(e);return Object(s.useCallback)(Object(o.a)(c.a.mark((function e(){var t,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=7;break}if(t=n.item.node,!(r=l(t.model,t))){e.next=6;break}return e.next=6,b(r);case 6:n.hide();case 7:case"end":return e.stop()}}),e)}))),[n])}function q(e){var n=Object(i.f)(e);return Object(s.useCallback)(Object(o.a)(c.a.mark((function e(){var t,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=7;break}if(t=n.item.node,!(r=l(t.model,t))){e.next=6;break}return e.next=6,f(r);case 6:n.hide();case 7:case"end":return e.stop()}}),e)}))),[n])}function J(e){var n=Object(i.f)(e);return Object(s.useCallback)(Object(o.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n&&(n.item.node.triggerRename(),n.hide());case 1:case"end":return e.stop()}}),e)}))),[n])}var U="document-menu",V=function(){var e=Object(R.b)(),n=Object(z.a)(U),t=q(U),r=B(U),a=J(U),c=Object(s.useCallback)((function(){if(n){var t,r=n.item.node;(null!==(t=r.parent)&&void 0!==t?t:r.model).remove(r),e(x.a.deleteDocument({documentId:r.metadata.id})),n.hide()}}),[n,e]);return Object(m.jsxs)(d.b,{id:U,children:[Object(m.jsx)(d.a,{onClick:a,children:"Rename"}),Object(m.jsx)(d.a,{onClick:t,children:"New Document"}),Object(m.jsx)(d.a,{onClick:r,children:"New Folder"}),Object(m.jsx)(d.a,{onClick:c,children:"Delete"})]})};var G="folder-menu",K=function(){var e=Object(R.b)(),n=Object(z.a)(G),t=q(G),r=B(G),a=J(G),c=Object(s.useCallback)((function(){if(n){var t,r=n.item.node;(null!==(t=r.parent)&&void 0!==t?t:r.model).remove(r),e(x.a.deleteFolder({folderId:r.metadata.id})),n.hide()}}),[n,e]);return Object(m.jsxs)(d.b,{id:G,children:[Object(m.jsx)(d.a,{onClick:a,children:"Rename"}),Object(m.jsx)(d.a,{onClick:t,children:"New Document"}),Object(m.jsx)(d.a,{onClick:r,children:"New Folder"}),Object(m.jsx)(d.a,{onClick:c,children:"Delete"})]})};var Q=function(){var e=Object(R.b)(),n=Object(R.c)(S.c.selectIsUserSignedIn),t=Object(R.c)(S.c.selectIsFetchingUser),a=Object(R.c)(I.c.selectActiveId),i=Object(H.b)(T.b.selectActiveNodeId),u=Object(H.c)(O.b.selectSearchTerm),z=Object(s.useRef)([]),B=Object(s.useRef)(),q=Object(d.c)(U),J=Object(d.c)(G),Q=Object(d.c)(p),X=function(e,n){return{getNodes:function(t,r,a){return e?Object(P.a)(n.pipe(Object(M.a)(1),Object(A.a)((function(n){return Object(L.getChildrenByFilter)(e,null===r||void 0===r?void 0:r.metadata.id,a?function(e){return a({name:e})}:void 0).then((function(e){return function(e,n,t){return e.map((function(e){var r=e.id,a=e.name,c=e.kind;return{name:a,expanded:n.includes(r)||t,expandable:"folder"===c,metadata:{id:r,kind:"folder"===c?"folder":"document"}}}))}(e,n,!!a)}))})))):Promise.resolve([])},comparer:function(e,n){return"folder"===e.metadata.kind&&"folder"===n.metadata.kind||"document"===e.metadata.kind&&"document"===n.metadata.kind?e.name.localeCompare(n.name,"en",{sensitivity:"base"}):"folder"===e.metadata.kind&&"document"===n.metadata.kind?-1:1},validate:function(n,t){return Object(o.a)(c.a.mark((function r(){var a,o,i;return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(0!==(a=F.a.getSegments(n)).length){r.next=3;break}return r.abrupt("return",Promise.resolve(N.a.fail("An empty path is invalid.")));case 3:if(o=t?t.metadata.id:null!==e&&void 0!==e?e:"",i=a[a.length-1],D.h.test(i)){r.next=8;break}return Object(_.e)(i),r.abrupt("return",Promise.resolve(N.a.fail("Invalid name.")));case 8:return r.next=10,Object(L.isNameTaken)(o,i);case 10:if(!r.sent){r.next=13;break}return Object(_.d)(i),r.abrupt("return",Promise.resolve(N.a.fail('A document with name "'.concat(a[1],'" already exists.'))));case 13:return r.abrupt("return",Promise.resolve(N.a.success()));case 14:case"end":return r.stop()}}),r)})))()}}}(a,Object(H.b)(O.b.selectExpandedFolders)),Y=Object(s.useCallback)((function(e,n){if(!n.metadata)throw new Error("Metadata should be there.");switch(n.metadata.kind){case"folder":J(e,{node:n});break;case"document":q(e,{node:n})}}),[q,J]),Z=Object(s.useCallback)((function(e){Q(e,{treeModel:B.current})}),[Q]),$=Object(y.a)((function(n,t,r){switch(n.preventDefault(),n.stopPropagation(),t.selected||(Object(E.f)(t.model),t.selected=!0),t.metadata.kind){case"document":e(x.a.activateOrOpenDocument({documentId:t.metadata.id,isHistory:!1,isPreview:r}));break;case"folder":t.toggleExpanded(),e(T.a.activateNode({id:t.metadata.id}))}}),25,[e]),ee=function(e,n){return $(e,n,!0)},ne=function(e,n){return $(e,n,!1)},te=function(e){var n=i.subscribe(function(){var n=Object(o.a)(c.a.mark((function n(t){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,me(e,t);case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()),t=e.subscribeFor(function(){var n=Object(o.a)(c.a.mark((function n(t){var a,o,i;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:a=Object(r.a)(t),n.prev=1,a.s();case 3:if((o=a.n()).done){n.next=23;break}i=o.value,n.t0=i.kind,n.next="collapsed"===n.t0?8:"created"===n.t0?10:"expanded"===n.t0?13:"renamed"===n.t0?15:"reset-filter"===n.t0?17:"set-filter"===n.t0?19:21;break;case 8:return re(i.node),n.abrupt("break",21);case 10:return n.next=12,ae(i.node);case 12:return n.abrupt("break",21);case 13:return ce(i.node),n.abrupt("break",21);case 15:return oe(i.node),n.abrupt("break",21);case 17:case 19:return ie(e),n.abrupt("break",21);case 21:n.next=3;break;case 23:n.next=28;break;case 25:n.prev=25,n.t1=n.catch(1),a.e(n.t1);case 28:return n.prev=28,a.f(),n.finish(28);case 31:case"end":return n.stop()}}),n,null,[[1,25,28,31]])})));return function(e){return n.apply(this,arguments)}}(),"collapsed","created","expanded","renamed","reset-filter","set-filter");u&&u.length>0&&e.setFilter((function(e){return-1!==e.name.toLowerCase().indexOf(u.toLowerCase())})),z.current.push((function(){return n.unsubscribe()})),z.current.push((function(){return t()})),B.current=e},re=function(n){e(O.a.collapseFolder({folderId:n.metadata.id}))},ae=function(){var n=Object(o.a)(c.a.mark((function n(t){var r,a,o,i;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:"document"===t.metadata.kind?t.metadata.exists?(t.metadata.closeTabAfterCreation?e(x.a.saveAndCloseNewDocument({documentId:t.metadata.id,documentName:t.name,folderId:null===(r=t.parent)||void 0===r?void 0:r.metadata.id,isHistory:!1})):e(x.a.saveNewDocument({documentId:t.metadata.id,documentName:t.name,folderId:null===(a=t.parent)||void 0===a?void 0:a.metadata.id,isHistory:!1})),delete t.metadata.exists,delete t.metadata.closeTabAfterCreation):e(x.a.createAndSaveDocument({documentId:t.metadata.id,documentName:t.name,folderId:null===(o=t.parent)||void 0===o?void 0:o.metadata.id})):e(x.a.createFolder({folderId:t.metadata.id,folderName:t.name,parentFolderId:null===(i=t.parent)||void 0===i?void 0:i.metadata.id}));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),ce=function(n){e(O.a.expandFolder({folderId:n.metadata.id}))},oe=function(n){"document"===n.metadata.kind?e(x.a.renameDocument({documentId:n.metadata.id,name:n.name})):e(x.a.renameFolder({folderId:n.metadata.id,newFolderName:n.name}))},ie=function(e){i.pipe(Object(M.a)(1)).subscribe(function(){var n=Object(o.a)(c.a.mark((function n(t){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,me(e,t);case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())},de=function(){var e=Object(o.a)(c.a.mark((function e(){var n,t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=l(B.current,null===(n=B.current)||void 0===n?void 0:n.selectedNodes[0]))){e.next=4;break}return e.next=4,f(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),se=function(){var e=Object(o.a)(c.a.mark((function e(){var n,t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=l(B.current,null===(n=B.current)||void 0===n?void 0:n.selectedNodes[0]))){e.next=4;break}return e.next=4,b(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ue=function(){var n=Object(o.a)(c.a.mark((function n(t){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e(O.a.changeDocumentSearchTerm({searchTerm:t})),!B.current){n.next=9;break}if(!(t.length>0)){n.next=7;break}return n.next=5,B.current.setFilter((function(e){return-1!==e.name.toLowerCase().indexOf(t.toLowerCase())}));case 5:n.next=9;break;case 7:return n.next=9,B.current.resetFilter();case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),le=function(){e(S.a.signIn())};function fe(e){return be.apply(this,arguments)}function be(){return(be=Object(o.a)(c.a.mark((function e(n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.selected||(Object(E.f)(n.model),n.selected=!0),e.next=3,n.ensureVisible();case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function me(e,n){return pe.apply(this,arguments)}function pe(){return(pe=Object(o.a)(c.a.mark((function e(n,t){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=10;break}if(!(r=n.find((function(e){return e.metadata&&e.metadata.id&&e.metadata.id===t})))){e.next=7;break}return e.next=5,fe(r);case 5:e.next=8;break;case 7:Object(E.f)(n);case 8:e.next=11;break;case 10:Object(E.f)(n);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(s.useEffect)((function(){var e=z.current;return function(){for(var n;n=e.pop();)n();B.current=void 0}}),[]),Object(m.jsxs)(g.a,{children:[Object(m.jsxs)(g.e,{children:[Object(m.jsx)(g.m,{children:"Documents"}),Object(m.jsx)(g.l,{}),Object(m.jsx)(v.c,{disabled:!n,tooltip:"New document",onClick:de,children:Object(m.jsx)(w.y,{})}),Object(m.jsx)(v.c,{disabled:!n,tooltip:"New folder",onClick:se,children:Object(m.jsx)(w.z,{})})]}),Object(m.jsx)(g.d,{children:Object(m.jsx)(h.a,{searchTerm:u,onSearchTermChange:ue})}),t?Object(m.jsx)(k.a,{}):n?Object(m.jsxs)(g.b,{children:[Object(m.jsx)(E.c,{id:"documents",itemHeight:E.b,provider:X,onContextMenu:Z,onInitialized:te,children:function(e){return Object(m.jsx)(E.d,{id:e.id,depth:e.depth,name:e.name,path:e.path,expanded:e.expanded,expandable:e.expandable,node:e,onClick:ee,onDoubleClick:ne,onContextMenu:Y,renderIcon:W})}}),Object(m.jsx)(K,{}),Object(m.jsx)(V,{}),Object(m.jsx)(j,{})]}):Object(m.jsx)(C.a,{title:"Sign in to save documents",icon:Object(m.jsx)(w.b,{}),children:Object(m.jsx)(v.a,{primary:!0,onClick:le,children:"Sign in"})})]})};function W(e){return"folder"===e.metadata.kind?Object(m.jsx)(E.e,{colorSelector:function(e){return e.folderIcon},children:e.expanded?Object(m.jsx)(w.r,{}):"creation"===e.editMode?Object(m.jsx)(w.z,{}):Object(m.jsx)(w.q,{})}):Object(m.jsx)(E.e,{colorSelector:function(e){return e.documentIcon},children:"creation"===e.editMode?Object(m.jsx)(w.y,{}):Object(m.jsx)(w.m,{})})}},374:function(e,n,t){"use strict";t.d(n,"a",(function(){return p}));var r,a,c,o,i=t(4),d=t(150),s=t(0),u=t(3),l=t(6),f=t(128),b=t(126),m=t(2),p=Object(s.memo)(Object(s.forwardRef)((function(e,n){var t=e.searchTerm,r=e.onSearchTermChange,a=Object(s.useRef)(null),c=Object(s.useRef)(null),o=Object(d.a)((function(e){r(e.target.value.trim())}),250,[r]),i=Object(s.useCallback)((function(e){o(e),c.current.style.display=e.currentTarget.value.length>0?"flex":"none"}),[o]),u=Object(s.useCallback)((function(){var e;null===(e=a.current)||void 0===e||e.focus()}),[]);return Object(s.useEffect)((function(){var e=a.current,n=c.current;t&&t.length>0?(e.value=t,n.style.display="flex"):n.style.display="none"}),[t]),Object(m.jsx)(j,{ref:n,onClick:u,children:Object(m.jsxs)(v,{children:[Object(m.jsx)(O,{children:Object(m.jsx)(b.E,{})}),Object(m.jsx)(x,{ref:a,placeholder:"Find...",onChange:i}),Object(m.jsx)(f.c,{innerRef:c,onClick:function(){r(""),a.current.value="",c.current.style.display="none"},children:Object(m.jsx)(b.j,{})})]})})}))),j=u.d.div(r||(r=Object(i.a)(["\n  z-index: 1;\n  display: flex;\n  flex: 1 1 auto;\n  flex-direction: row;\n  align-items: center;\n"]))),O=u.d.div(a||(a=Object(i.a)(["\n  display: flex;\n  flex: 0 0 24px;\n  align-items: center;\n  justify-content: center;\n  transition: fill 0.2s ease;\n\n  & > svg {\n    fill: "," !important;\n  }\n"])),l.THEME_COLORS.components.fieldText),x=u.d.input(c||(c=Object(i.a)(["\n  flex: 1 1 auto;\n  border: 0 none;\n  padding: 0 9px;\n  color: ",";\n  background-color: ",";\n  transition: background-color 0.2s ease, color 0.2s ease;\n  user-select: initial;\n\n  ::placeholder {\n    color: ",";\n    transition: color 0.2s ease;\n  }\n"])),l.THEME_COLORS.components.fieldText,l.THEME_COLORS.components.field,l.THEME_COLORS.components.fieldPlaceholder),v=u.d.div(o||(o=Object(i.a)(["\n  display: flex;\n  flex: 1 1 auto;\n  align-items: center;\n  border-radius: 8px;\n  border: 1px solid ",";\n  padding-left: 5px;\n  height: 28px;\n  background-color: ",";\n  transition: background-color 0.2s ease, border-color 0.2s ease;\n  cursor: text;\n\n  &:focus-within,\n  &:hover {\n    border-color: ",";\n    background-color: ",";\n\n    & > "," > svg {\n      fill: ",";\n    }\n\n    & > "," {\n      background-color: ",";\n      color: ",";\n\n      ::placeholder {\n        color: ",";\n      }\n    }\n  }\n\n  &:hover {\n    border-color: ",";\n    background-color: ",";\n\n    & > "," > svg {\n      fill: ",";\n    }\n\n    & > "," {\n      color: ",";\n      background-color: ",";\n    }\n  }\n"])),l.THEME_COLORS.components.fieldBorder,l.THEME_COLORS.components.field,l.THEME_COLORS.components.fieldHoverBorder,l.THEME_COLORS.components.fieldHover,O,l.THEME_COLORS.components.fieldHoverText,x,l.THEME_COLORS.components.fieldHover,l.THEME_COLORS.components.fieldHoverText,l.THEME_COLORS.components.fieldHoverPlaceholder,l.THEME_COLORS.components.fieldHoverBorder,l.THEME_COLORS.components.fieldHover,O,l.THEME_COLORS.components.fieldHoverText,x,l.THEME_COLORS.components.fieldHoverText,l.THEME_COLORS.components.fieldHover)}}]);