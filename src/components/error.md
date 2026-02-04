Welcome.jsx:58 Uncaught TypeError: titleCleanup is not a function
    at Welcome.jsx:58:7
    at chunk-VGRCMLUR.js?v=004720cf:2813:18
    at Array.forEach (<anonymous>)
    at chunk-VGRCMLUR.js?v=004720cf:2812:19
    at Context2.kill (chunk-VGRCMLUR.js?v=004720cf:2816:9)
    at Context2.revert (chunk-VGRCMLUR.js?v=004720cf:2831:10)
    at @gsap_react.js?v=004720cf:38:36
    at Object.react_stack_bottom_frame (react-dom_client.js?v=004720cf:18573:13)
    at runWithFiberInDEV (react-dom_client.js?v=004720cf:997:72)
    at commitHookEffectListUnmount (react-dom_client.js?v=004720cf:9449:160)
(anonymous) @ Welcome.jsx:58
(anonymous) @ chunk-VGRCMLUR.js?v=004720cf:2813
(anonymous) @ chunk-VGRCMLUR.js?v=004720cf:2812
kill @ chunk-VGRCMLUR.js?v=004720cf:2816
revert @ chunk-VGRCMLUR.js?v=004720cf:2831
(anonymous) @ @gsap_react.js?v=004720cf:38
react_stack_bottom_frame @ react-dom_client.js?v=004720cf:18573
runWithFiberInDEV @ react-dom_client.js?v=004720cf:997
commitHookEffectListUnmount @ react-dom_client.js?v=004720cf:9449
commitHookLayoutUnmountEffects @ react-dom_client.js?v=004720cf:9394
disappearLayoutEffects @ react-dom_client.js?v=004720cf:10801
recursivelyTraverseDisappearLayoutEffects @ react-dom_client.js?v=004720cf:10852
disappearLayoutEffects @ react-dom_client.js?v=004720cf:10827
recursivelyTraverseDisappearLayoutEffects @ react-dom_client.js?v=004720cf:10852
disappearLayoutEffects @ react-dom_client.js?v=004720cf:10806
recursivelyTraverseDisappearLayoutEffects @ react-dom_client.js?v=004720cf:10852
disappearLayoutEffects @ react-dom_client.js?v=004720cf:10836
doubleInvokeEffectsOnFiber @ react-dom_client.js?v=004720cf:13339
runWithFiberInDEV @ react-dom_client.js?v=004720cf:997
recursivelyTraverseAndDoubleInvokeEffectsInDEV @ react-dom_client.js?v=004720cf:13312
commitDoubleInvokeEffectsInDEV @ react-dom_client.js?v=004720cf:13347
flushPassiveEffects @ react-dom_client.js?v=004720cf:13157
(anonymous) @ react-dom_client.js?v=004720cf:12776
performWorkUntilDeadline @ react-dom_client.js?v=004720cf:36
<Welcome>
exports.jsxDEV @ react_jsx-dev-runtime.js?v=004720cf:247
App @ App.jsx:8
react_stack_bottom_frame @ react-dom_client.js?v=004720cf:18509
renderWithHooksAgain @ react-dom_client.js?v=004720cf:5729
renderWithHooks @ react-dom_client.js?v=004720cf:5665
updateFunctionComponent @ react-dom_client.js?v=004720cf:7475
beginWork @ react-dom_client.js?v=004720cf:8525
runWithFiberInDEV @ react-dom_client.js?v=004720cf:997
performUnitOfWork @ react-dom_client.js?v=004720cf:12561
workLoopSync @ react-dom_client.js?v=004720cf:12424
renderRootSync @ react-dom_client.js?v=004720cf:12408
performWorkOnRoot @ react-dom_client.js?v=004720cf:11766
performWorkOnRootViaSchedulerTask @ react-dom_client.js?v=004720cf:13505
performWorkUntilDeadline @ react-dom_client.js?v=004720cf:36
<App>
exports.jsxDEV @ react_jsx-dev-runtime.js?v=004720cf:247
(anonymous) @ main.jsx:8
App.jsx:8 An error occurred in the <Welcome> component.

Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.

defaultOnUncaughtError @ react-dom_client.js?v=004720cf:6966
logUncaughtError @ react-dom_client.js?v=004720cf:7020
runWithFiberInDEV @ react-dom_client.js?v=004720cf:997
lane.callback @ react-dom_client.js?v=004720cf:7048
callCallback @ react-dom_client.js?v=004720cf:5491
commitCallbacks @ react-dom_client.js?v=004720cf:5503
runWithFiberInDEV @ react-dom_client.js?v=004720cf:999
commitLayoutEffectOnFiber @ react-dom_client.js?v=004720cf:9976
flushLayoutEffects @ react-dom_client.js?v=004720cf:12924
commitRoot @ react-dom_client.js?v=004720cf:12803
commitRootWhenReady @ react-dom_client.js?v=004720cf:12016
performWorkOnRoot @ react-dom_client.js?v=004720cf:11950
performSyncWorkOnRoot @ react-dom_client.js?v=004720cf:13517
flushSyncWorkAcrossRoots_impl @ react-dom_client.js?v=004720cf:13414
flushPassiveEffects @ react-dom_client.js?v=004720cf:13187
(anonymous) @ react-dom_client.js?v=004720cf:12776
performWorkUntilDeadline @ react-dom_client.js?v=004720cf:36
<Welcome>
exports.jsxDEV @ react_jsx-dev-runtime.js?v=004720cf:247
App @ App.jsx:8
react_stack_bottom_frame @ react-dom_client.js?v=004720cf:18509
renderWithHooksAgain @ react-dom_client.js?v=004720cf:5729
renderWithHooks @ react-dom_client.js?v=004720cf:5665
updateFunctionComponent @ react-dom_client.js?v=004720cf:7475
beginWork @ react-dom_client.js?v=004720cf:8525
runWithFiberInDEV @ react-dom_client.js?v=004720cf:997
performUnitOfWork @ react-dom_client.js?v=004720cf:12561
workLoopSync @ react-dom_client.js?v=004720cf:12424
renderRootSync @ react-dom_client.js?v=004720cf:12408
performWorkOnRoot @ react-dom_client.js?v=004720cf:11766
performWorkOnRootViaSchedulerTask @ react-dom_client.js?v=004720cf:13505
performWorkUntilDeadline @ react-dom_client.js?v=004720cf:36
<App>
exports.jsxDEV @ react_jsx-dev-runtime.js?v=004720cf:247
(anonymous) @ main.jsx:8
Welcome.jsx:58 Uncaught TypeError: titleCleanup is not a function
    at Welcome.jsx:58:7
    at chunk-VGRCMLUR.js?v=004720cf:2813:18
    at Array.forEach (<anonymous>)
    at chunk-VGRCMLUR.js?v=004720cf:2812:19
    at Context2.kill (chunk-VGRCMLUR.js?v=004720cf:2816:9)
    at Context2.revert (chunk-VGRCMLUR.js?v=004720cf:2831:10)
    at @gsap_react.js?v=004720cf:38:36
    at Object.react_stack_bottom_frame (react-dom_client.js?v=004720cf:18573:13)
    at runWithFiberInDEV (react-dom_client.js?v=004720cf:997:72)
    at commitHookEffectListUnmount (react-dom_client.js?v=004720cf:9449:160)
(anonymous) @ Welcome.jsx:58
(anonymous) @ chunk-VGRCMLUR.js?v=004720cf:2813
(anonymous) @ chunk-VGRCMLUR.js?v=004720cf:2812
kill @ chunk-VGRCMLUR.js?v=004720cf:2816
revert @ chunk-VGRCMLUR.js?v=004720cf:2831
(anonymous) @ @gsap_react.js?v=004720cf:38
react_stack_bottom_frame @ react-dom_client.js?v=004720cf:18573
runWithFiberInDEV @ react-dom_client.js?v=004720cf:997
commitHookEffectListUnmount @ react-dom_client.js?v=004720cf:9449
commitHookLayoutUnmountEffects @ react-dom_client.js?v=004720cf:9394
commitDeletionEffectsOnFiber @ react-dom_client.js?v=004720cf:10232
recursivelyTraverseDeletionEffects @ react-dom_client.js?v=004720cf:10115
commitDeletionEffectsOnFiber @ react-dom_client.js?v=004720cf:10165
recursivelyTraverseDeletionEffects @ react-dom_client.js?v=004720cf:10115
commitDeletionEffectsOnFiber @ react-dom_client.js?v=004720cf:10237
recursivelyTraverseDeletionEffects @ react-dom_client.js?v=004720cf:10115
commitDeletionEffectsOnFiber @ react-dom_client.js?v=004720cf:10272
recursivelyTraverseMutationEffects @ react-dom_client.js?v=004720cf:10379
commitMutationEffectsOnFiber @ react-dom_client.js?v=004720cf:10600
flushMutationEffects @ react-dom_client.js?v=004720cf:12822
commitRoot @ react-dom_client.js?v=004720cf:12802
commitRootWhenReady @ react-dom_client.js?v=004720cf:12016
performWorkOnRoot @ react-dom_client.js?v=004720cf:11950
performSyncWorkOnRoot @ react-dom_client.js?v=004720cf:13517
flushSyncWorkAcrossRoots_impl @ react-dom_client.js?v=004720cf:13414
flushPassiveEffects @ react-dom_client.js?v=004720cf:13187
(anonymous) @ react-dom_client.js?v=004720cf:12776
performWorkUntilDeadline @ react-dom_client.js?v=004720cf:36
<Welcome>
exports.jsxDEV @ react_jsx-dev-runtime.js?v=004720cf:247
App @ App.jsx:8
react_stack_bottom_frame @ react-dom_client.js?v=004720cf:18509
renderWithHooksAgain @ react-dom_client.js?v=004720cf:5729
renderWithHooks @ react-dom_client.js?v=004720cf:5665
updateFunctionComponent @ react-dom_client.js?v=004720cf:7475
beginWork @ react-dom_client.js?v=004720cf:8525
runWithFiberInDEV @ react-dom_client.js?v=004720cf:997
performUnitOfWork @ react-dom_client.js?v=004720cf:12561
workLoopSync @ react-dom_client.js?v=004720cf:12424
renderRootSync @ react-dom_client.js?v=004720cf:12408
performWorkOnRoot @ react-dom_client.js?v=004720cf:11766
performWorkOnRootViaSchedulerTask @ react-dom_client.js?v=004720cf:13505
performWorkUntilDeadline @ react-dom_client.js?v=004720cf:36
<App>
exports.jsxDEV @ react_jsx-dev-runtime.js?v=004720cf:247
(anonymous) @ main.jsx:8
App.jsx:8 An error occurred in the <Welcome> component.

Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.