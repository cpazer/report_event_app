sap.ui.define(["sap/m/MessageBox"],function(e){"use strict";return{removeAttachment:function(e){var t=e.getParameters("item");t.item.getBindingContext().delete()},uploadAttachment:function(e){var t=e.getParameters("item").item;var r=e.getSource();var a=t+
.getBindingContext();var n={Filename:t.getProperty("fileName"),mimetype:t.getProperty("mediaType")};var i="com.sap.gateway.srvd.zkscctransorder.v0001.";var o=sap.ui.getCore().byId("onpremreportevent::TransOrderExecObjectPage");var c=new FileReader;c.onlo+
ad=function(e){var t=e.currentTarget.result;var c=o.getModel().bindContext(i+"createAttachment(...)",a);c=c.setParameter("title",n.Filename);c=c.setParameter("value",t);c=c.setParameter("mimetype",n.mimetype);c.execute("confirm",false).then(function(e){a+
.refresh();r.removeAllIncompleteItems()}.bind(this),function(e){});o.getModel().submitBatch("confirm")};c.readAsDataURL(t.getFileObject())},onOpenPressed:function(e){e.preventDefault();var t=e.getSource();var r=t.getBindingContext();var a=r.getProperty("+
Filename");var n=r.requestProperty("Value");function i(e){async function t(e,t){let r=await fetch(e);let a=await r.blob();let n={type:"application/octet-stream"};let i=new File([a],t,n);const o=document.createElement("a");o.download=t;o.href=URL.createOb+
jectURL(i);o.click()}t(e,a)}n.then(i)}}});                                                                                                                                                                                                                     