(this.webpackJsonpspeechstate=this.webpackJsonpspeechstate||[]).push([[0],{105:function(t,e,n){},154:function(t,e){},270:function(t,e){},291:function(t,e){},294:function(t,e){},302:function(t,e){},303:function(t,e){},304:function(t,e){},305:function(t,e){},306:function(t,e){},310:function(t,e){},337:function(t,e,n){"use strict";n.r(e);var s=n(101),o=n(21),i=n(27),a=n.n(i),r=n(61),c=(n(105),n(12)),u=n(98),p=n(59),l=n(3),d=n(14),f=n(340),g=n(341),b=n(38),h=n.n(b),m=n(60),y=n.n(m),S=n(99),O=n.n(S),v={version:"3.3",session:{session:{my_frontend:{user_id:"speechstate",position:{latitude:"57.699188",longitude:"11.948313"}}}},request:{start_session:{}}},j=function(t){return fetch(new Request("https://cors-anywhere.herokuapp.com/https://sourdough-for-dummies-orchestration-pipeline.eu2.ddd.tala.cloud/interact",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)})).then((function(t){return t.json()}))},E={initial:"init",states:{init:{on:{CLICK:"tdm"}},tdm:{initial:"start",states:{start:{invoke:{id:"startSession",src:function(t,e){return j(v)},onDone:[{target:"utter",actions:Object(l.b)({sessionId:function(t,e){return e.data.session.session_id},tdmUtterance:function(t,e){return e.data.output.utterance},tdmPassivity:function(t,e){return e.data.output.expected_passivity},tdmActions:function(t,e){return e.data.output.actions}}),cond:function(t,e){return e.data.output}},{target:"fail"}],onError:{target:"fail"}}},utter:{initial:"prompt",on:{RECOGNISED:"next",TIMEOUT:"passivity"},states:{prompt:{entry:Object(l.q)((function(t){return{type:"SPEAK",value:t.tdmUtterance}})),on:{ENDSPEECH:[{target:"#root.dm.init",cond:function(t,e){return t.tdmActions.some((function(t){return"EndSession"===t.name}))}},{target:"ask"}]}},ask:{entry:[Object(l.q)("LISTEN")]}}},next:{invoke:{id:"nlInput",src:function(t,e){return j((n=t.sessionId,s=t.recResult,{version:"3.3",session:{session_id:n},request:{natural_language_input:{modality:"speech",hypotheses:s}}}));var n,s},onDone:[{target:"utter",actions:Object(l.b)({tdmUtterance:function(t,e){return e.data.output.utterance},tdmPassivity:function(t,e){return e.data.output.expected_passivity},tdmActions:function(t,e){return e.data.output.actions}}),cond:function(t,e){return e.data.output}},{target:"fail"}],onError:{target:"fail"}}},passivity:{invoke:{id:"passivity",src:function(t,e){return j({version:"3.3",session:{session_id:t.sessionId},request:{passivity:{}}})},onDone:[{target:"utter",actions:Object(l.b)({tdmUtterance:function(t,e){return e.data.output.utterance},tdmPassivity:function(t,e){return e.data.output.expected_passivity},tdmActions:function(t,e){return e.data.output.actions}}),cond:function(t,e){return e.data.output}},{target:"fail"}],onError:{target:"fail"}}},fail:{}}}}},x=n(24),T=speechSynthesis,k=SpeechSynthesisUtterance,R="https://northeurope.api.cognitive.microsoft.com/sts/v1.0/issuetoken",A="northeurope";Object(r.a)(a.a.mark((function t(){var e,n,s,o,i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(R,{method:"POST",headers:{"Ocp-Apim-Subscription-Key":"2e15e033f605414bbbfe26cb631ab755"}});case 3:return e=t.sent,t.next=6,e.text();case 6:return n=t.sent,t.next=9,O()({credentials:{region:A,authorizationToken:n}});case 9:s=t.sent,o=s.speechSynthesis,i=s.SpeechSynthesisUtterance,T=o,k=i,t.next=18;break;case 15:t.prev=15,t.t0=t.catch(0),console.log(t.t0);case 18:case"end":return t.stop()}}),t,null,[[0,15]])})))(),Object(g.a)({url:"https://statecharts.io/inspect",iframe:!1});var I=Object(p.a)({id:"root",type:"parallel",states:{dm:Object(o.a)({},E),asrtts:{initial:"idle",states:{idle:{on:{LISTEN:"recognising",SPEAK:{target:"speaking",actions:Object(l.b)((function(t,e){return{ttsAgenda:e.value}}))}}},recognising:{initial:"noinput",entry:"recStart",exit:"recStop",on:{ASRRESULT:{actions:["recLogResult",Object(l.b)((function(t,e){return{recResult:e.value}}))],target:".match"},RECOGNISED:"idle"},states:{noinput:{entry:d.a.send({type:"TIMEOUT"},{delay:function(t){return 5e3},id:"timeout"}),on:{TIMEOUT:"#root.asrtts.idle",STARTSPEECH:"inprogress"},exit:d.a.cancel("timeout")},inprogress:{},match:{entry:d.a.send("RECOGNISED")}}},speaking:{entry:"ttsStart",on:{ENDSPEECH:"idle"}}}}}},{actions:{recLogResult:function(t){console.log("<< ASR: "+t.recResult[0].utterance)},test:function(){console.log("test")},logIntent:function(t){console.log("<< NLU intent: "+t.nluData.intent.name)}}}),C=function(t){switch(!0){case t.state.matches({asrtts:"recognising"}):return Object(x.jsx)("button",Object(o.a)(Object(o.a)({type:"button",className:"glow-on-hover",style:{animation:"glowing 20s linear"}},t),{},{children:"Listening..."}));case t.state.matches({asrtts:"speaking"}):return Object(x.jsx)("button",Object(o.a)(Object(o.a)({type:"button",className:"glow-on-hover",style:{animation:"bordering 1s infinite"}},t),{},{children:"Speaking..."}));case t.state.matches({dm:"fail"}):return Object(x.jsx)("button",Object(o.a)(Object(o.a)({type:"button",className:"glow-on-hover"},t),{},{children:"FAILURE! reload the page"}));default:return Object(x.jsx)("button",Object(o.a)(Object(o.a)({type:"button",className:"glow-on-hover"},t),{},{children:"Click to start"}))}};function N(){c.useEffect((function(){function t(){return(t=Object(r.a)(a.a.mark((function t(){var e,n,s,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(R,{method:"POST",headers:{"Ocp-Apim-Subscription-Key":"2e15e033f605414bbbfe26cb631ab755"}});case 2:return e=t.sent,t.next=5,e.text();case 5:return n=t.sent,t.next=8,y()({credentials:{region:A,authorizationToken:n}});case 8:s=t.sent,o=s.SpeechRecognition,h.a.applyPolyfill(o),h.a.getRecognition().onresult=function(t){console.log(t.results);var e=t.results[0];e.isFinal?d.a.send({type:"ASRRESULT",value:[{utterance:e[0].transcript,confidence:e[0].confidence}]}):d.a.send({type:"STARTSPEECH"})};case 13:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]);var t=Object(f.b)(I,{devTools:!0,actions:{recStart:Object(f.a)((function(){console.log("Ready to receive a voice input."),h.a.startListening({continuous:!0,language:"en-US"})})),recStop:Object(f.a)((function(){console.log("Recognition stopped."),h.a.stopListening()})),ttsStart:Object(f.a)((function(t){console.log("Speaking...");var e=T.getVoices();console.log(e);var n=new k(t.ttsAgenda);n.voice=e.find((function(t){return/en\x2DUS\x2DAriaNeural/.test(t.name)})),n.onend=function(){return d.a.send("ENDSPEECH")},T.speak(n)})),ttsCancel:Object(f.a)((function(){console.log("TTS STOP..."),speechSynthesis.cancel()}))}}),e=Object(s.a)(t,2),n=e[0],o=e[1];return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(C,{state:n,onClick:function(){return o("CLICK")}})})}var w=document.getElementById("root");u.render(Object(x.jsx)(N,{}),w)}},[[337,1,2]]]);
//# sourceMappingURL=main.194e0e2f.chunk.js.map