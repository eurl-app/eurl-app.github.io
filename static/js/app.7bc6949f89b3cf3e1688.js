webpackJsonp([1,0],[function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var r=a(63),i=n(r),s=a(38),o=n(s),l=a(62),u=n(l),c=a(14),f=n(c);i.default.use(u.default);var d=new u.default({mode:"history",routes:f.default});new i.default({router:d,template:"<App/>",components:{App:o.default}}).$mount("#app")},,,function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(17),i=n(r),s=a(4),o=n(s),l={};l.plafondMax=i.default,l.plafond_securite_sociale=38616;var u=[];u.push(new o.default.Contribution({id:"maladieMaternite",label:"Maladie-maternité",organisme:"RSI",tranches:[new o.default.ContributionBracket({label:"Tranche 1",taux:6.5,plafond:l.plafondMax})]})),u.push(new o.default.Contribution({id:"allocationsFamiliales",label:"Allocations familiales",organisme:"URSSAF",commentaire:"Pour les revenus compris entre 42 478 € et 54 062 €, taux progressif : entre 2,15 % et 5,25 %. Faute de détails, le calculateur passe à 5.25 dès qu'on dépasse 42 478 €",tranches:[new o.default.ContributionBracket({label:"Tranche 1",plafond:42478,commentaire:"Le plafond de cette tranche est égal à 110% du PASS",taux:2.15}),new o.default.ContributionBracket({label:"Tranche 2",commentaire:"Taux progressif de 2.15% à 5.25% entre 110% du PASS et 140% du PASS",taux_reduit:2.15,taux_plein:5.25,plafond:54062}),new o.default.ContributionBracket({label:"Tranche 3",taux:5.25,plafond:l.plafondMax})]})),u.push(new o.default.Contribution({id:"cgsCrds",organisme:"URSSAF",label:"CGS-CRDS",commentaire:"Base de calcul : \tTotalité du revenu de l’activité non salariée + cotisations sociales obligatoires hors CSG-CRDS",tranches:[new o.default.ContributionBracket({label:"Tranche 1",taux:8,plafond:l.plafondMax})]})),u.push(new o.default.Contribution({id:"csgNonDeductible",organisme:"URSSAF",label:"CSG-CRDS Non déductible",commentaire:"Base de calcul : \tTotalité du revenu de l’activité non salariée + cotisations sociales obligatoires hors CSG-CRDS",tranches:[new o.default.ContributionBracket({label:"Tranche 1",taux:8,plafond:l.plafondMax})]})),u.push(new o.default.Contribution({id:"formationProfessionnelle",label:"Formation professionnelle",organisme:"URSSAF",commentaire:"Base de calcul forfaitaire (fixe): plafond de la sécurité sociale",type_tranches:"exclusive",tranches:[new o.default.ContributionBracket({label:"Tranche 1",taux:.25,plafond:l.plafondMax})]})),u.push(new o.default.Contribution({id:"retraiteBase",label:"Retraite de base",organisme:"CIPAV",description:"Retraite de base CNAVPL",commentaire:"En cas de revenus non connus : 3 178 € (maximum de la tranche 1) ; 3 611 € (maximum de la tranche 2)",revenus_non_connus:3611,montant_forfaitaire:{label:"Retraite de base",commentaire:"si les revenus sont inférieurs à 4441€, le montant est forfaitaire",plafond:4441,montant:448},tranches:[new o.default.ContributionBracket({label:"Tranche 1",plafond:l.plafond_securite_sociale,taux:8.23}),new o.default.ContributionBracket({label:"Tranche 2",plafond:193080,taux:1.87})]})),u.push(new o.default.Contribution({id:"impotSocietes",label:"Impot sur les sociétés",organisme:"Impots",tranches:[new o.default.ContributionBracket({label:"tranche 1",plafond:38120,taux:15}),new o.default.ContributionBracket({label:"tranche 2",plafond:l.plafondMax,taux:33})]})),u.push(new o.default.Contribution({id:"retraiteComplementaire",label:"Retraite complémentaire",organisme:"CIPAV",tranches:[new o.default.ContributionBracket({label:"A",plafond:26580,montant_forfaitaire:1214,points_retraite:36}),new o.default.ContributionBracket({label:"B",plafond:49280,montant_forfaitaire:2427,points_retraite:72}),new o.default.ContributionBracket({label:"C",plafond:57850,montant_forfaitaire:3641,points_retraite:108}),new o.default.ContributionBracket({label:"D",plafond:66400,montant_forfaitaire:6068,points_retraite:180}),new o.default.ContributionBracket({label:"E",plafond:83060,montant_forfaitaire:8495,points_retraite:252}),new o.default.ContributionBracket({label:"F",plafond:103180,montant_forfaitaire:13349,points_retraite:396}),new o.default.ContributionBracket({label:"G",plafond:123300,montant_forfaitaire:14563,points_retraite:432}),new o.default.ContributionBracket({label:"H",plafond:l.plafondMax,montant_forfaitaire:15776,points_retraite:468})]})),u.push(new o.default.Contribution({id:"reductionRetraiteComplementaire",organisme:"CIPAV",label:"Réduction assurance vieillesse complémentaire",tranches:[new o.default.ContributionBracket({label:"Tranche 1",plafond:5792,taux:100,points_retraite:0,commentaire:"aucun point retraite"}),new o.default.ContributionBracket({label:"Tranche 2",plafond:11585,taux:75,points_retraite:9,commentaire:"9 points retraite"}),new o.default.ContributionBracket({label:"Tranche 3",plafond:17377,taux:50,commentaire:"18 points retraite",points_retraite:18}),new o.default.ContributionBracket({label:"Tranche 4",plafond:23170,taux:25,points_retraite:27,commentaire:"27 points retraite"})]})),u.push(new o.default.Contribution({id:"prevoyance",organisme:"CIPAV",label:"Invalidité Décès",type_tranches:"exclusive",commentaire:"de 76 à 380 euros selon votre choix de classe A, B ou C",classes:[{classe:"A",label:"Classe A",montant_forfaitaire:76},{classe:"B",label:"Classe B",montant_forfaitaire:228},{classe:"C",label:"Classe C",montant_forfaitaire:380}]})),l.contributions=u,l.getContribution=function(e){var t=null;return l.contributions.forEach(function(a){a.id==e&&(t=a)}),t},t.default=l},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){this.extends=function(e){for(var t in e)e.hasOwnProperty(t)&&(this[t]=e[t]);return this}},n=function(e){return a.call(this,e),this.id="",this.label="",this.plafond="",this.montant=0,this.tranches=[],this.extends(e),this},r=function(e){return a.call(this,e),this.id="",this.label="",this.taux="",this.montant=0,this.plafond=0,this.extends(e),this},i=function(e){return a.call(this,e),this.label="",this.type="result",this.organisme="",this.baseCalcul=0,this.montant=0,this.tranches=[],this.tranchesActives=[],this.commentaire="",this.extends(e),this},s=function(){this.lines=[],this.total=0,this.addLine=function(e){this.lines.push(e),"result"===e.type&&(this.total+=e.montant.toFixedNumber(2))},this.getTotal=function(){return this.total.toFixedNumber(2)},this.sum=function(e){var t=this,a=0;return e.forEach(function(e){var n=t.getLine(e);a+=n.montant}),a.toFixedNumber(2)},this.getLine=function(e){var t=null;return this.lines.forEach(function(a){e==a.id&&(t=a)}),t}};t.default={Results:s,ResultLine:i,Contribution:n,ContributionBracket:r}},,,function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(49),i=n(r),s=a(48),o=n(s),l=a(47),u=n(l);t.default={components:{SiteMenu:i.default,SiteHeader:o.default,SiteFooter:u.default}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"pageAide"}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"pageAide"}},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(44),i=n(r);t.default={name:"pageSimulateur",components:{Simulateur:i.default}}},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(45),i=n(r),s=a(46),o=n(s),l=a(15),u=n(l);t.default={data:function(){return{params:{chiffreAffaireHt:0,chiffreAffaireTtc:0,bindToCaHt:!0,bindToFraisHt:!0,fraisHt:0,fraisTtc:0,cfe:200,remuneration:0,prevoyance:"B"}}},created:function(){},computed:{Results:function(){return(0,u.default)(this.params).getResults()}},methods:{setParams:function(e){for(var t in e)this.params[t]=e[t];this.calculateResults()},calculateResults:function(){this.Results=(0,u.default)(this.params).getResults()}},components:{SimulateurForm:i.default,chargesCalculator:u.default,simulateurResultsTable:o.default}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["formValues"],data:function(){return{form:this.formValues}},methods:{},watch:{form:{deep:!0,handler:function(e,t){this.$emit("onFormValuesUpdated",this.form)}},"form.bindToCaHt":function(e,t){0==t&&(this.form.chiffreAffaireTtc=1.2*this.form.chiffreAffaireHt)},"form.bindToFraisHt":function(e,t){0==t&&(this.form.fraisTtc=1.2*this.form.fraisHt)},"form.chiffreAffaireHt":function(e,t){this.form.bindToCaHt&&(this.form.chiffreAffaireTtc=1.2*this.form.chiffreAffaireHt)},"form.fraisHt":function(e,t){this.form.bindToFraisHt&&(this.form.fraisTtc=1.2*this.form.fraisHt)}}}},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(3),i=n(r);t.default={name:"SimulateurResultsTable",props:["Results"],data:function(){return{showDetails:!1,plafondMax:i.default.plafondMax}},computed:{resultClasses:function(){return{alert:this.Results.getLine("resteEnBanque").montant<0,success:this.Results.getLine("resteEnBanque").montant>0}}}}},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(40),i=n(r),s=a(43),o=n(s),l=a(39),u=n(l),c=a(41),f=n(c),d=a(42),m=n(d);t.default=[{path:"/",component:o.default},{path:"/aide",component:i.default},{path:"/apropos",component:u.default},{path:"/contact",component:f.default},{path:"*",component:m.default}]},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(3),i=n(r),s=a(16),o=n(s),l=a(4),u=n(l),c=function(e){var t={};return t.chiffreAffaireTtc=e.chiffreAffaireTtc,t.chiffreAffaireHt=e.chiffreAffaireHt,t.remuneration=e.remuneration,t.fraisTtc=e.fraisTtc,t.fraisHt=e.fraisHt,t.cfe=e.cfe,t.prevoyance=e.prevoyance,t.getPrevoyance=function(){var e=i.default.getContribution("prevoyance"),a=null;e.classes.forEach(function(e){e.classe==t.prevoyance&&(a=e)});var n={};a?(n.label="Prévoyance classe "+a.classe,n.montant=a.montant_forfaitaire):n.montant=e.classes[0].montant_forfaitaire;var r=new u.default.ResultLine(e);return r.extends(n),r},t.getTvaCollectee=function(){var e=new u.default.ResultLine,a=(t.chiffreAffaireTtc-t.chiffreAffaireHt).toFixedNumber(2);return e.extends({id:"tvaColllectee",label:"TVA collectée",montant:a}),e},t.getTvaDeductible=function(){var e=new u.default.ResultLine;return e.extends({id:"tvaDeductible",montant:t.fraisTtc-t.fraisHt}),e},t.getBaseCalculIs=function(){return t.chiffreAffaireHt-t.remuneration-t.fraisHt-t.getTotalCotisationsSociales().montant-t.getCfe().montant-t.cgsCrds().montant-t.getPrevoyance().montant},t.getTva=function(){return new u.default.ResultLine({id:"tvaDue",label:"TVA à reverser",organisme:"Impots",montant:t.getTvaCollectee().montant-t.getTvaDeductible().montant})},t.getCfe=function(){return new u.default.ResultLine({label:"CFE",id:"cfe",commentaire:"Cotisation foncière des entreprises",montant:t.cfe})},t.getfraisTtc=function(){return(new u.default.ResultLine).extends({label:"fraisTtc",montant:t.fraisTtc})},t.getResteEnBanque=function(){var e=t.chiffreAffaireTtc-t.fraisTtc-t.remuneration-t.totalDettes().montant;return new u.default.ResultLine({id:"resteEnBanque",type:"total",hidden:!0,label:"Reste en Banque",montant:e.toFixedNumber(2)})},t.getCotisationsSocialesArray=function(){return[t.retraiteBase(),t.retraiteComplementaire(),t.maladieMaternite(),t.formationProfessionnelle(),t.allocationsFamiliales()]},t.calculerTotalCotisationsSociales=function(){var e=0;return t.getCotisationsSocialesArray().forEach(function(t){return e+=t.montant}),e},t.totalDettes=function(){var e=t.getCfe().montant+t.getTva().montant+t.getTotalCotisationsSociales().montant+t.cgsCrds().montant+t.getPrevoyance().montant+t.impotSocietes().montant;return new u.default.ResultLine({id:"totalDettes",label:"Total A provisionner",hidden:!0,montant:e})},t.getTotalCotisationsSociales=function(){return new u.default.ResultLine({id:"totalCotisationsSociales",label:"Cotisations sociales",montant:t.calculerTotalCotisationsSociales()})},t.retraiteComplementaire=function(){var e=i.default.getContribution("retraiteComplementaire"),a=new u.default.ResultLine(e);return a.extends(o.default.calculerTrancheExclusive(t.remuneration,e.tranches)),a},t.formationProfessionnelle=function(){var e=i.default.getContribution("formationProfessionnelle"),t=new u.default.ResultLine(e);return t.extends(o.default.calculerTrancheExclusive(i.default.plafond_securite_sociale,e.tranches)),t},t.allocationsFamiliales=function(){var e=t.remuneration,a=i.default.getContribution("allocationsFamiliales"),n=a.tranches[1].taux_reduit,r=a.tranches[1].taux_plein,s=i.default.plafond_securite_sociale,l=(r-n)/(.3*s)*(e-1.1*s)+n;a.tranches[1].taux=l;var c=new u.default.ResultLine(a);return c.extends(o.default.calculerTrancheExclusive(e,a.tranches)),c},t.retraiteBase=function(){var e=t.remuneration,a=i.default.getContribution("retraiteBase"),n=new u.default.ResultLine(a);return e<=a.montant_forfaitaire.plafond?n.extends({montant:a.montant_forfaitaire.montant}):(e<=a.tranches[0].plafond?n.montant=e*(a.tranches[0].taux/100):n.montant=e*(a.tranches[0].taux/100)+e*(a.tranches[1].taux/100),n)},t.maladieMaternite=function(){var e=i.default.getContribution("maladieMaternite"),a=new u.default.ResultLine(e);return a.extends(o.default.calculerTrancheExclusive(t.remuneration,e.tranches)),a},t.impotSocietes=function(){var e=t.getBaseCalculIs(),a=i.default.getContribution("impotSocietes"),n=new u.default.ResultLine(a);return n.extends(o.default.calculerTranchesCumulatives(e,a.tranches)),n},t.cgsCrds=function(){var e=i.default.getContribution("cgsCrds"),a=t.remuneration+t.getTotalCotisationsSociales().montant,n=o.default.calculerTranchesCumulatives(a,e.tranches),r=new u.default.ResultLine(e);return r.extends(n),r},t.getResults=function(){var e=new u.default.Results;return e.addLine(t.retraiteBase()),e.addLine(t.retraiteComplementaire(t.remuneration)),e.addLine(t.getPrevoyance()),e.addLine({id:"totalCIPAV",type:"subtotal",label:"Total CIPAV",montant:e.sum(["retraiteBase","retraiteComplementaire","prevoyance"])}),e.addLine(t.maladieMaternite()),e.addLine({id:"totalRSI",type:"subtotal",label:"Total RSI",montant:e.sum(["maladieMaternite"])}),e.addLine(t.formationProfessionnelle()),e.addLine(t.cgsCrds()),e.addLine({id:"totalURSSAF",type:"subtotal",label:"Total URSSAF",montant:e.sum(["formationProfessionnelle","cgsCrds"])}),e.addLine({type:"subtotal",hidden:!0,id:"totalCotisationSociales",label:"Total cotisations sociales",montant:e.sum(["totalURSSAF","totalRSI","totalCIPAV"])}),e.addLine(t.impotSocietes()),e.addLine(t.getCfe()),e.addLine(t.getTva()),e.addLine({id:"total",type:"total",label:"TOTAL",montant:e.getTotal()}),e.addLine(t.totalDettes()),e.addLine(t.getResteEnBanque()),e},t};t.default=c},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Number.prototype.toFixedNumber=function(e,t){var a=Math.pow(t||10,e);return+(Math.round(this*a)/a)};var a={};a.calculerMontantTranche=function(e,t){var a=0;return e.montant_forfaitaire?a=e.montant_forfaitaire:e.taux&&(a=t*(e.taux/100)),a.toFixedNumber(2)},a.calculerTrancheExclusive=function(e,t){var n={};n.montant=0;var r=null;return t.forEach(function(t){!r&&e<=t.plafond&&(r=t)}),r&&(n.montant=a.calculerMontantTranche(r,e),n.baseCalcul=e,n.tranchesActives=[r]),n},a.calculerTranchesCumulatives=function(e,t){var n={};n.montant=0;var r=[],i=0,s=0;return t.forEach(function(n,o){if("undefined"!=typeof t[o-1]&&(s=t[o-1].plafond),n.intervalle=n.plafond-s,e>=n.plafond)n.baseCalcul=n.intervalle,n.montant=a.calculerMontantTranche(n,n.baseCalcul).toFixedNumber(2),i+=n.montant,r.push(n);else{var l=e-s;l>0&&(n.baseCalcul=l,i+=n.montant=a.calculerMontantTranche(n,n.baseCalcul).toFixedNumber(2),r.push(n))}}),n.montant=i,n.tranchesActives=r,n},t.default=a},,,,,,,,,,,,,,,function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t,a){var n,r;a(32),n=a(7);var i=a(52);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(r=n=n.default),"function"==typeof r&&(r=r.options),r.render=i.render,r.staticRenderFns=i.staticRenderFns,e.exports=n},function(e,t,a){var n,r,i=a(56);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(r=n=n.default),"function"==typeof r&&(r=r.options),r.render=i.render,r.staticRenderFns=i.staticRenderFns,e.exports=n},function(e,t,a){var n,r;n=a(8);var i=a(57);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(r=n=n.default),"function"==typeof r&&(r=r.options),r.render=i.render,r.staticRenderFns=i.staticRenderFns,e.exports=n},function(e,t,a){var n,r,i=a(51);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(r=n=n.default),"function"==typeof r&&(r=r.options),r.render=i.render,r.staticRenderFns=i.staticRenderFns,e.exports=n},function(e,t,a){var n,r;n=a(9);var i=a(61);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(r=n=n.default),"function"==typeof r&&(r=r.options),r.render=i.render,r.staticRenderFns=i.staticRenderFns,e.exports=n},function(e,t,a){var n,r;n=a(10);var i=a(60);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(r=n=n.default),"function"==typeof r&&(r=r.options),r.render=i.render,r.staticRenderFns=i.staticRenderFns,e.exports=n},function(e,t,a){var n,r;a(37),n=a(11);var i=a(59);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(r=n=n.default),"function"==typeof r&&(r=r.options),r.render=i.render,r.staticRenderFns=i.staticRenderFns,e.exports=n},function(e,t,a){var n,r;a(33),n=a(12);var i=a(53);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(r=n=n.default),"function"==typeof r&&(r=r.options),r.render=i.render,r.staticRenderFns=i.staticRenderFns,r._scopeId="data-v-29e78d0b",e.exports=n},function(e,t,a){var n,r;a(31),n=a(13);var i=a(50);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(r=n=n.default),"function"==typeof r&&(r=r.options),r.render=i.render,r.staticRenderFns=i.staticRenderFns,r._scopeId="data-v-15ba00bf",e.exports=n},function(e,t,a){var n,r;a(35);var i=a(55);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(r=n=n.default),"function"==typeof r&&(r=r.options),r.render=i.render,r.staticRenderFns=i.staticRenderFns,r._scopeId="data-v-32a60502",e.exports=n},function(e,t,a){var n,r;a(36);var i=a(58);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(r=n=n.default),"function"==typeof r&&(r=r.options),r.render=i.render,r.staticRenderFns=i.staticRenderFns,r._scopeId="data-v-53d868f4",e.exports=n},function(e,t,a){var n,r;a(34);var i=a(54);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(r=n=n.default),"function"==typeof r&&(r=r.options),r.render=i.render,r.staticRenderFns=i.staticRenderFns,r._scopeId="data-v-309f2a86",e.exports=n},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"results"},[a("div",{staticClass:"row big-picture"},[a("div",{staticClass:"small-12 medium-6 columns"},[e._m(0),e._v(" "),a("p",[a("span",{staticClass:"result"},[e._v(e._s(e.Results.getLine("totalDettes").montant))])])]),e._v(" "),a("div",{staticClass:"small-12 medium-6 columns"},[a("h2",[e._v("Solde prévisionnel")]),e._v(" "),a("p",[a("span",{staticClass:"result",class:e.resultClasses},[e._v(e._s(e.Results.getLine("resteEnBanque").montant))])])])]),e._v(" "),a("table",{staticClass:"table lines-results"},[a("caption",[e._v("\n      DETTES "),a("a",{staticClass:"showDetails",on:{click:function(t){e.showDetails=!e.showDetails}}},[a("br"),e._v(" "+e._s(e.showDetails?"Masquer":"Montrer")+" les détails des calculs")])]),e._v(" "),e._m(1),e._v(" "),e._l(e.Results.lines,function(t,n){return t.hidden?e._e():a("tbody",{staticClass:"lines-results__result",class:t.type},[a("tr",[a("td",[e._v(" "+e._s(t.label)+" ")]),e._v(" "),a("td",{staticClass:"show-for-large",attrs:{colspan:"6"}},[e._v(" "+e._s(t.organisme)+" ")]),e._v(" "),a("td",{staticClass:"montant"},[e._v(" "+e._s(t.montant)+" ")])]),e._v(" "),e._l(t.tranchesActives,function(t,n){return a("tr",{directives:[{name:"show",rawName:"v-show",value:e.showDetails,expression:"showDetails"}],staticClass:"lines-results__result__details show-for-large"},[a("td",{attrs:{colspan:"2"}}),e._v(" "),a("td",[e._v(" "+e._s(n+1)+" ")]),e._v(" "),a("td",[e._v(" "+e._s(t.baseCalcul)+" ")]),e._v(" "),a("td",[e._v(" "+e._s(t.taux)+" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.taux,expression:"tranche.taux"}]},[e._v("%")])]),e._v(" "),a("td",[e._v(" "+e._s(t.montant_forfaitaire))]),e._v(" "),a("td",[e._v(" "+e._s(t.plafond==e.plafondMax?" - ":t.plafond)+" ")]),e._v(" "),a("td",{staticClass:"montant"},[e._v(" "+e._s(t.montant)+" ")])])})],2)})],2)])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h2",[e._v(" Dettes "),a("span",{staticClass:"subheader"},[e._v("hors rémunération ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",[a("tr",[a("th",[e._v(" Nom ")]),e._v(" "),a("th",{staticClass:"show-for-large"},[e._v(" Organisme ")]),e._v(" "),a("th",{staticClass:"show-for-large"},[e._v(" Tranche ")]),e._v(" "),a("th",{staticClass:"show-for-large"},[e._v(" Tranche Base de calcul ")]),e._v(" "),a("th",{staticClass:"show-for-large"},[e._v(" Tranche taux ")]),e._v(" "),a("th",{staticClass:"show-for-large"},[e._v(" Tranche forfait ")]),e._v(" "),a("th",{staticClass:"show-for-large"},[e._v(" tranche plafond ")]),e._v(" "),a("th",{staticClass:"montant"},[e._v(" Montant ")])])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c||t;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"aide"},[a("h1",[e._v("Me contacter")]),e._v(" "),a("p",[e._v("\n    Un bug ? une suggestion ? J'ai besoin de vous pour améliorer ce simulateur qui n'est qu'une première version. N'hésitez pas à me faire part de vos suggestions d'améliorations à l'adresse suivante :\n  ")]),e._v(" "),a("a",{staticClass:"button",attrs:{target:"_blank",href:"https://yineo.fr/contact"}},[e._v("Me contacter")])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"small-12 columns"},[a("site-header")],1)]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"small-12 columns"},[a("site-menu")],1)]),e._v(" "),a("div",{staticClass:"row router-view"},[a("div",{staticClass:"small-12 columns"},[a("router-view")],1)]),e._v(" "),a("div",{staticClass:"row router-view"},[a("div",{staticClass:"small-12 columns"},[a("site-footer")],1)])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form",{staticClass:"simulator-form"},[a("div",{staticClass:"row"},[a("div",{staticClass:"large-3 small-12 columns"},[a("label",{attrs:{for:"chiffre_affaire_ht"}},[e._v("Chiffre d'affaires HT")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.form.chiffreAffaireHt,expression:"form.chiffreAffaireHt",modifiers:{number:!0}}],attrs:{id:"chiffre_affaire_ht",type:"number"},domProps:{value:e._s(e.form.chiffreAffaireHt)},on:{input:function(t){t.target.composing||(e.form.chiffreAffaireHt=e._n(t.target.value))},blur:function(t){e.$forceUpdate()}}}),e._v(" "),a("div",{staticClass:"simulator-form__field__description"},[e._v("\n        Votre chiffre d'affaires sans la TVA de vos ventes. C'est une base de calcul pour certaines des charges.\n      ")])]),e._v(" "),a("div",{staticClass:"large-3 small-12 columns"},[a("label",{attrs:{for:"chiffre_affaire_ttc"}},[e._v("Chiffre d'affaires TTC")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.form.chiffreAffaireTtc,expression:"form.chiffreAffaireTtc",modifiers:{number:!0}}],attrs:{type:"number",id:"chiffre_affaire_ttc",disabled:e.form.bindToCaHt},domProps:{value:e._s(e.form.chiffreAffaireTtc)},on:{input:function(t){t.target.composing||(e.form.chiffreAffaireTtc=e._n(t.target.value))},blur:function(t){e.$forceUpdate()}}}),e._v(" "),a("div",{staticClass:"simulator-form__field__description"},[a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.form.bindToCaHt,expression:"form.bindToCaHt",modifiers:{number:!0}}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.form.bindToCaHt)?e._i(e.form.bindToCaHt,null)>-1:e.form.bindToCaHt},on:{change:function(t){var a=e.form.bindToCaHt,n=t.target,r=!!n.checked;if(Array.isArray(a)){var i=e._n(null),s=e._i(a,i);r?s<0&&(e.form.bindToCaHt=a.concat(i)):s>-1&&(e.form.bindToCaHt=a.slice(0,s).concat(a.slice(s+1)))}else e.form.bindToCaHt=r}}}),e._v(" "),a("em",[e._v("automatiquement à 20% du HT")]),e._v(" "),a("br"),e._v("\n        Le total des ventes de la société en incluant la TVA.\n      ")])]),e._v(" "),a("div",{staticClass:"large-3 small-12 columns"},[a("label",{attrs:{for:"fraisHt"}},[e._v(" Frais HT ")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.fraisHt,expression:"form.fraisHt"}],attrs:{type:"number",id:"fraisHt"},domProps:{value:e._s(e.form.fraisHt)},on:{input:function(t){t.target.composing||(e.form.fraisHt=e._n(t.target.value))},blur:function(t){e.$forceUpdate()}}}),e._v(" "),e._m(0)]),e._v(" "),a("div",{staticClass:"large-3 small-12 columns"},[a("label",{attrs:{for:"fraisTtc"}},[e._v(" Frais TTC ")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.fraisTtc,expression:"form.fraisTtc"}],staticClass:"form-control",attrs:{type:"number",id:"fraisTtc","ng-disabled":"form.bindToFraisHt",disabled:"disabled"},domProps:{value:e._s(e.form.fraisTtc)},on:{input:function(t){t.target.composing||(e.form.fraisTtc=e._n(t.target.value))},blur:function(t){e.$forceUpdate()}}}),e._v(" "),a("div",{staticClass:"simulator-form__field__description"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.bindToFraisHt,expression:"form.bindToFraisHt"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.form.bindToFraisHt)?e._i(e.form.bindToFraisHt,null)>-1:e.form.bindToFraisHt},on:{change:function(t){var a=e.form.bindToFraisHt,n=t.target,r=!!n.checked;if(Array.isArray(a)){var i=null,s=e._i(a,i);r?s<0&&(e.form.bindToFraisHt=a.concat(i)):s>-1&&(e.form.bindToFraisHt=a.slice(0,s).concat(a.slice(s+1)))}else e.form.bindToFraisHt=r}}}),e._v(" "),a("em",[e._v("automatiquement à 20% du HT")]),e._v(" "),a("br"),e._v(" "),a("div",{},[e._v("\n          Vos dépenses de sociétés avec la TVA : expertise comptable, achats, fournisseurs etc ...\n        ")])])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"large-3 small-12 columns"},[a("label",{attrs:{for:"cfe"}},[e._v(" CFE à verser ")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.cfe,expression:"form.cfe"}],staticClass:"form-control ng-pristine ng-untouched ng-valid ng-not-empty",attrs:{type:"number",id:"cfe",placeholder:"CFE"},domProps:{value:e._s(e.form.cfe)},on:{input:function(t){t.target.composing||(e.form.cfe=e._n(t.target.value))},blur:function(t){e.$forceUpdate()}}}),e._v(" "),a("div",{staticClass:"simulator-form__field__description"},[e._v("\n        Vous devez verser une cotisation foncière des entreprises, dont le montant dépend de votre commune.\n      ")])]),e._v(" "),a("div",{staticClass:"large-3 small-12 columns"},[a("label",{attrs:{for:"remuneration"}},[e._v(" Rémunération ")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.remuneration,expression:"form.remuneration"}],staticClass:"form-control ng-pristine ng-untouched ng-valid ng-not-empty",attrs:{id:"remuneration",type:"number",placeholder:"Rémunération"},domProps:{value:e._s(e.form.remuneration)},on:{input:function(t){t.target.composing||(e.form.remuneration=e._n(t.target.value))},blur:function(t){e.$forceUpdate()}}}),e._v(" "),a("div",{staticClass:"simulator-form__field__description"},[e._v("\n        Votre rémunération en tant que gérant. Les cotisations sociales sont calculées sur cette base.\n      ")])]),e._v(" "),a("div",{staticClass:"large-3 small-12 columns end"},[a("label",[e._v(" Prévoyance ")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.form.prevoyance,expression:"form.prevoyance"}],attrs:{type:"number"},on:{change:function(t){e.form.prevoyance=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t})[0]}}},[a("option",{attrs:{value:"A"},domProps:{value:"A"}},[e._v("A")]),e._v(" "),a("option",{attrs:{value:"B"},domProps:{value:"B"}},[e._v("B")]),e._v(" "),a("option",{attrs:{value:"C"},domProps:{value:"C"}},[e._v("C")])]),e._v(" "),a("div",{staticClass:"simulator-form__field__description"},[e._v("\n        Assurance vie.\n      ")])])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"simulator-form__field__description"},[e._v("\n        Vos dépenses de sociétés "),a("strong",[e._v("hors taxe")]),e._v(" : expertise comtpable, achats, fournisseurs etc ...\n      ")])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{staticClass:"main-menu"},[a("div",{staticClass:"menu-centered"},[a("ul",{staticClass:"vertical medium-horizontal menu text-centered"},[a("li",[a("router-link",{attrs:{exact:"",to:"/"}},[e._v("Simulateur")])],1),e._v(" "),a("li",[a("router-link",{attrs:{exact:"",to:"/aide"}},[e._v("Aide")])],1),e._v(" "),a("li",[a("router-link",{attrs:{exact:"",to:"/apropos"}},[e._v("A propos")])],1),e._v(" "),a("li",[a("router-link",{attrs:{exact:"",to:"/contact"}},[e._v("Contact & feedback")])],1)])])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c||t;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",[e._v("\n  Par "),a("a",{attrs:{target:"_blank",href:"http://yineo.fr"}},[e._v("Yineo Incorporation ")])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c||t;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v("A propos")]),e._v(" "),a("p",[e._v("Je suis développeur freelance indépendant depuis 2012. Après avoir passé quelques mois en auto-entrepreneur, un dépassement de plafond me fait automatiquement passer en entrepeneur individuel. Je décide alors de monter une SARL unipersonnelle pour gérer mon activité.")]),e._v(" "),a("p",[e._v(" Hélas, quelques erreurs d'une comptable alliées à ma faible expérience de l'entreprise m'ont amenées à sous-estimer les régularisations de charges à venir, me mettant dans une belle galère.")]),e._v(" "),a("p",[e._v("Constatant qu'il n'y avait aucun simulateur qui convenait à mon besoin de visibilité sur ce point, c'est à dire un simulateur qui essaie de montrer toutes les charges qui peuvent vous tomber sur le coin du nez sans crier gare en EURL, je décide de développer le mien, en espérant éviter aux autres les erreurs que j'ai pu faire.\n\n  ")]),a("p",[e._v("Je suis aujourd'hui l'heureux papa de la société YINEO")])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c||t;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"aide"},[a("h1",[e._v("Aide")]),e._v(" "),a("h2",[e._v("A quoi sert ce simulateur ?")]),e._v(" "),a("p",[e._v("Ce simulateur essaie de vous aider à ne pas couler votre structure en répondant aussi simplement que possible à la question « Combien je dois mettre de côté pour pouvoir faire à face mes charges à venir en toute sécurité ? ».\n  ")]),e._v(" "),a("p",[e._v('Il ne sert donc pas principalement à calculer charges et cotisations mais à vous donner de la visbilité sur la part qui vous revient et la part que vous devrez reverser tôt ou tard aux différents organismes. Il vous indique dans la case "A provisionner" la somme que vous devez mettre de côté afin de faire face aux charges et à leurs régularisations à venir dans les mois et années à venir.')]),e._v(" "),a("h2",[e._v("Comment se servir de ce simulateur ?")]),e._v(" "),a("p",[e._v(" Entrez des chiffres correspondant à une période d’un an pour être au plus près de la réalité : le simulateur vous donnera le montant que vous devrez provisionner au titre de cette année.")])]);
}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c||t;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",[a("div",{attrs:{id:"site-title"}},[e._v(" Simulateur de dettes pour EURL")]),e._v(" "),a("div",{attrs:{id:"site-subtitle"}},[e._v("Professions libérales - Impot sur les sociétés")]),e._v(" "),a("div",{attrs:{id:"version"}},[e._v("version "),a("strong",[e._v("ALPHA")]),e._v(" - v 0.9.4 - 16/01/2017")])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"simulateur"}},[a("simulateur-form",{attrs:{formValues:e.params},on:{onFormValuesUpdated:e.setParams}}),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"small-12 columns"},[a("simulateur-results-table",{attrs:{Results:e.Results}})],1)])],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hello"},[a("simulateur")],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c||t;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"aide"},[a("h1",[e._v("Page non trouvée")]),e._v(" "),a("p",[e._v("La page demandée n'a pas été trouvée ")])])}]}}]);
//# sourceMappingURL=app.7bc6949f89b3cf3e1688.js.map