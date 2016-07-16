define(["OTMap/Utils/DrawUtil"],function(t){function r(){this.config=o(i),this.shareProp=a,this._legendInfo=[]}function o(t){var r={};if(e(t))r=t.slice(0);else for(var i in t)"map"!==i?r[i]="object"==typeof t[i]?o(t[i]):t[i]:r[i]=t[i];return r}function e(t){return"[object Array]"===Object.prototype.toString.call(t)}var i={map:null,layer:{simple:!0,id:"statUnits",fieldName:"STAT_VALUE",url:"",statData:[],baseTag:"",statTag:[],corString:[]},popup:{show:!1,title:"值为",content:"${}"},style:{baseColor:"#27ae60",statColor:"#c0392b",classicMethod:"quantile",colorStops:[{ratio:0,color:"rgba(39, 174, 96, 0)"},{ratio:.2,color:"#27AE60"},{ratio:.3,color:"#f39c12"},{ratio:.85,color:"#d35400"},{ratio:.95,color:"#c0392b"}],heatPower:15},label:{show:!1,field:"NAME",color:"#000",size:9,family:"Microsoft Yahei",bold:!1,xoffset:0,yoffset:0},legend:{show:!1,id:"legendDiv",itemTitle:[],title:"图例名称"}},a={map:null,legend:null,drawLayer:null,_binded:null};return r.prototype.setConfig=function(t){var r=this;for(var o in t)if("map"==o)r.config.map=t.map;else if(t.hasOwnProperty(o))for(var e in t[o])t[o].hasOwnProperty(e)&&(r.config[o][e]=t[o][e]);return r.map=r.shareProp.map=r.config.map,r},r.prototype.setLayer=function(t){var r=this;for(var o in t)t.hasOwnProperty(o)&&(r.config.layer[o]=t.item);return r},r.prototype.setStatData=function(t){var r=this;return r.config.layer.statData=t,r},r.prototype.setStyle=function(t){var r=this;for(var o in t)t.hasOwnProperty(o)&&(r.config.style[o]=t.item);return r},r.prototype.backupConfig=function(t){this._oconfig=o(this.config)},r.prototype.restoreConfig=function(t){this.oconfig=o(this._oconfig)},r.prototype.draw=function(t){},r.prototype.fresh=function(t){},r.prototype.clear=function(){return this.shareProp.drawLayer&&this.shareProp.map.removeLayer(this.shareProp.drawLayer),this.shareProp.drawLayer=null,this.shareProp.legend&&this.shareProp.legend.destroy(),this.shareProp.lenged=null,this._legendInfo=[],this.shareProp._binded&&this.shareProp._binded.remove(),this.shareProp._binded=null,this},r});