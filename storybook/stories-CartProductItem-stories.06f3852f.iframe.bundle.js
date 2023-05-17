"use strict";(self.webpackChunkreact_shopping_cart=self.webpackChunkreact_shopping_cart||[]).push([[23],{"./src/stories/CartProductItem.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Standard:function(){return Standard},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return CartProductItem_stories}});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_Standard$parameters,_Standard$parameters2,_Standard$parameters3,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),CheckBox=__webpack_require__("./src/components/common/CheckBox/CheckBox.tsx"),DeleteButton=__webpack_require__("./src/components/common/DeleteButton/DeleteButton.tsx"),RectangleQuantityInput=__webpack_require__("./src/components/RectangleQuantityInput/RectangleQuantityInput.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),CartProductItem=function CartProductItem(_ref){var productId=_ref.productId,productImage=_ref.productImage,productName=_ref.productName,productPrice=_ref.productPrice;return(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)(ProductCheckBox,{notifyParentWhenCheckedChanged:function notifyParentWhenCheckedChanged(){}}),(0,jsx_runtime.jsx)(ProductImage,{src:productImage}),(0,jsx_runtime.jsx)(ProductName,{children:productName}),(0,jsx_runtime.jsx)(DeleteButtonContainer,{children:(0,jsx_runtime.jsx)(DeleteButton.Z,{productId:productId,notifyParentWhenDeleteTriggered:function notifyParentWhenDeleteTriggered(){}})}),(0,jsx_runtime.jsx)(QuantityInputContainer,{children:(0,jsx_runtime.jsx)(RectangleQuantityInput.Z,{productId:productId})}),(0,jsx_runtime.jsxs)(ProductPrice,{children:["₩ ",productPrice.toLocaleString()]})]})},Container=styled_components_browser_esm.ZP.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  box-sizing: content-box;\n  display: grid;\n  width: 736px;\n  height: 144px;\n  padding: 15px;\n  background-color: ",';\n  grid-template-columns: 28px 144px 405px 114px;\n  grid-template-rows: 28px 60px 28px;\n  column-gap: 15px;\n  row-gap: 14px;\n  grid-template-areas:\n    "checkbox image name deleteButton"\n    "checkbox image name quantityInput"\n    "checkbox image name price";\n'])),"#111"),ProductCheckBox=(0,styled_components_browser_esm.ZP)(CheckBox.Z)(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  grid-area: checkbox;\n"]))),ProductImage=styled_components_browser_esm.ZP.img(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n  width: 100%;\n  height: 100%;\n  grid-area: image;\n"]))),ProductName=styled_components_browser_esm.ZP.div(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.Z)(["\n  color: white;\n  grid-area: name;\n  font-size: 20px;\n"]))),DeleteButtonContainer=styled_components_browser_esm.ZP.div(_templateObject5||(_templateObject5=(0,taggedTemplateLiteral.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  grid-area: deleteButton;\n"]))),QuantityInputContainer=styled_components_browser_esm.ZP.div(_templateObject6||(_templateObject6=(0,taggedTemplateLiteral.Z)(["\n  grid-area: quantityInput;\n"]))),ProductPrice=styled_components_browser_esm.ZP.div(_templateObject7||(_templateObject7=(0,taggedTemplateLiteral.Z)(["\n  color: white;\n  text-align: right;\n  grid-area: price;\n"]))),CartProductItem_CartProductItem=CartProductItem;try{CartProductItem.displayName="CartProductItem",CartProductItem.__docgenInfo={description:"",displayName:"CartProductItem",props:{productId:{defaultValue:null,description:"",name:"productId",required:!0,type:{name:"number"}},productImage:{defaultValue:null,description:"",name:"productImage",required:!0,type:{name:"string"}},productName:{defaultValue:null,description:"",name:"productName",required:!0,type:{name:"string"}},productPrice:{defaultValue:null,description:"",name:"productPrice",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CartProductItem/CartProductItem.tsx#CartProductItem"]={docgenInfo:CartProductItem.__docgenInfo,name:"CartProductItem",path:"src/components/CartProductItem/CartProductItem.tsx#CartProductItem"})}catch(__react_docgen_typescript_loader_error){}var Standard={args:{productId:1,productImage:"https://user-images.githubusercontent.com/87642422/237034991-962fecb7-42cb-499f-b9c4-32ef863031ee.png",productName:"프리미엄 초콜릿 조각 케이크",productPrice:9800}},CartProductItem_stories={title:"CartProductItem",component:CartProductItem_CartProductItem,parameters:{docs:{description:{component:"`CartProductItem` 는 사용자가 장바구니에 담아 둔 상품 하나를 관리할 수 있는 컴포넌트입니다."}}}};Standard.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Standard.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Standard$parameters=Standard.parameters)||void 0===_Standard$parameters?void 0:_Standard$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:'{\n  args: {\n    productId: 1,\n    productImage: "https://user-images.githubusercontent.com/87642422/237034991-962fecb7-42cb-499f-b9c4-32ef863031ee.png",\n    productName: "프리미엄 초콜릿 조각 케이크",\n    productPrice: 9800\n  }\n}'},null===(_Standard$parameters2=Standard.parameters)||void 0===_Standard$parameters2||null===(_Standard$parameters3=_Standard$parameters2.docs)||void 0===_Standard$parameters3?void 0:_Standard$parameters3.source)})});var __namedExportsOrder=["Standard"]},"./src/components/RectangleQuantityInput/RectangleQuantityInput.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_icons_ai__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react-icons/ai/index.esm.js"),_hooks_useQuantityUpdater__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/hooks/useQuantityUpdater.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),RectangleQuantityInput=function RectangleQuantityInput(_ref){var productId=_ref.productId,_ref$step=_ref.step,step=void 0===_ref$step?1:_ref$step,_useQuantityUpdater=(0,_hooks_useQuantityUpdater__WEBPACK_IMPORTED_MODULE_0__.Z)({productId:productId}),inputValue=_useQuantityUpdater.inputValue,setIsFocused=_useQuantityUpdater.setIsFocused,updateInputValue=_useQuantityUpdater.updateInputValue,incrementInputValue=_useQuantityUpdater.incrementInputValue;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Container,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Input,{value:inputValue,onChange:updateInputValue,onBlur:function onBlur(){return setIsFocused(!1)}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(IncreaseButton,{type:"button",onClick:function onClick(){return incrementInputValue(step)},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ArrowUpIcon,{})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(DecreaseButton,{type:"button",onClick:function onClick(){return incrementInputValue(-step)},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ArrowDownIcon,{})})]})},colors_gold="#ffdf7e",Container=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div(_templateObject||(_templateObject=(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.Z)(['\n  display: grid;\n  width: 114px;\n  height: 60px;\n  text-align: center;\n  grid-template-columns: 73px 41px;\n  grid-template-rows: 29px 29px;\n  grid-template-areas:\n    "input upButton"\n    "input downButton";\n\n  & * {\n    background-color: transparent;\n    color: ',";\n  }\n"])),colors_gold),Input=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.input(_templateObject2||(_templateObject2=(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.Z)(["\n  border: 1px solid ",";\n  grid-area: input;\n  color: ",';\n  font-size: 24px;\n  font-family: "Rubik";\n  text-align: center;\n'])),colors_gold,colors_gold),IncreaseButton=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.button(_templateObject3||(_templateObject3=(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.Z)(["\n  border: 1px solid ",";\n  grid-area: upButton;\n"])),colors_gold),DecreaseButton=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.button(_templateObject4||(_templateObject4=(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.Z)(["\n  border: 1px solid ",";\n  grid-area: downButton;\n"])),colors_gold),ArrowUpIcon=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.Vs3)(_templateObject5||(_templateObject5=(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.Z)([""]))),ArrowDownIcon=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.i0B)(_templateObject6||(_templateObject6=(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.Z)([""])));__webpack_exports__.Z=RectangleQuantityInput;try{RectangleQuantityInput.displayName="RectangleQuantityInput",RectangleQuantityInput.__docgenInfo={description:"",displayName:"RectangleQuantityInput",props:{productId:{defaultValue:null,description:"",name:"productId",required:!0,type:{name:"number"}},step:{defaultValue:{value:"1"},description:"",name:"step",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/RectangleQuantityInput/RectangleQuantityInput.tsx#RectangleQuantityInput"]={docgenInfo:RectangleQuantityInput.__docgenInfo,name:"RectangleQuantityInput",path:"src/components/RectangleQuantityInput/RectangleQuantityInput.tsx#RectangleQuantityInput"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/CheckBox/CheckBox.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return CheckBox_CheckBox}});var taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),useToggler=function useToggler(_ref){var initialIsChecked=_ref.initialIsChecked,notifyFunction=_ref.notifyFunction,_useState=(0,react.useState)(initialIsChecked),_useState2=(0,slicedToArray.Z)(_useState,2),isChecked=_useState2[0],setIsChecked=_useState2[1];(0,react.useEffect)((function(){notifyFunction(isChecked)}),[isChecked,notifyFunction]);return{isChecked:isChecked,toggleIsChecked:function toggleIsChecked(){setIsChecked((function(previousIsChecked){return!previousIsChecked}))}}},hooks_useToggler=useToggler;try{useToggler.displayName="useToggler",useToggler.__docgenInfo={description:"",displayName:"useToggler",props:{initialIsChecked:{defaultValue:null,description:"",name:"initialIsChecked",required:!0,type:{name:"boolean"}},notifyFunction:{defaultValue:null,description:"",name:"notifyFunction",required:!0,type:{name:"(isChecked: boolean) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/hooks/useToggler.tsx#useToggler"]={docgenInfo:useToggler.__docgenInfo,name:"useToggler",path:"src/hooks/useToggler.tsx#useToggler"})}catch(__react_docgen_typescript_loader_error){}var _templateObject,_templateObject2,_templateObject3,index_esm=__webpack_require__("./node_modules/react-icons/fa/index.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),CheckBox=function CheckBox(_ref){var notifyParentWhenCheckedChanged=_ref.notifyParentWhenCheckedChanged,_useToggler=hooks_useToggler({initialIsChecked:!1,notifyFunction:notifyParentWhenCheckedChanged}),isChecked=_useToggler.isChecked,toggleIsChecked=_useToggler.toggleIsChecked;return(0,jsx_runtime.jsxs)("label",{children:[(0,jsx_runtime.jsx)(CheckBoxInput,{type:"checkbox",checked:isChecked,onClick:toggleIsChecked}),(0,jsx_runtime.jsx)(FakeCheckBox,{children:(0,jsx_runtime.jsx)(CheckIcon,{})})]})},colors_gold="#ffff7f",CheckBoxInput=styled_components_browser_esm.ZP.input(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  width: 26px;\n  height: 26px;\n  border: 2px solid ",";\n  display: none;\n"])),colors_gold),FakeCheckBox=styled_components_browser_esm.ZP.div(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  width: 26px;\n  height: 26px;\n  border: 2px solid ",";\n  transition: 0.3s;\n  cursor: pointer;\n\n  ",":checked + & {\n    background-color: ",";\n    box-shadow: 0 0 9px ",";\n  }\n"])),colors_gold,CheckBoxInput,colors_gold,colors_gold),CheckIcon=(0,styled_components_browser_esm.ZP)(index_esm.l_A)(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n  font-size: 18px;\n  opacity: 0;\n  transition: 0.3s;\n  line-height: 18px;\n  margin: 2px;\n\n  ",":checked + "," > & {\n    opacity: 1;\n  }\n"])),CheckBoxInput,FakeCheckBox),CheckBox_CheckBox=CheckBox;try{CheckBox.displayName="CheckBox",CheckBox.__docgenInfo={description:"",displayName:"CheckBox",props:{notifyParentWhenCheckedChanged:{defaultValue:null,description:"",name:"notifyParentWhenCheckedChanged",required:!0,type:{name:"(isChecked: boolean) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/CheckBox/CheckBox.tsx#CheckBox"]={docgenInfo:CheckBox.__docgenInfo,name:"CheckBox",path:"src/components/common/CheckBox/CheckBox.tsx#CheckBox"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/DeleteButton/DeleteButton.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _templateObject,_templateObject2,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_icons_bi__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-icons/bi/index.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),DeleteButton=function DeleteButton(_ref){var productId=_ref.productId,notifyParentWhenDeleteTriggered=_ref.notifyParentWhenDeleteTriggered;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Button,{onClick:function onClick(){return notifyParentWhenDeleteTriggered(productId)},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DeleteIcon,{})})},colors_slightBrightRed="#f44343",Button=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.button(_templateObject||(_templateObject=(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.Z)(["\n  width: 24px;\n  height: 24px;\n  border: none;\n  background: none;\n  cursor: pointer;\n\n  &:hover {\n    text-shadow: 0px 0px 21px ",";\n  }\n"])),colors_slightBrightRed),DeleteIcon=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP)(react_icons_bi__WEBPACK_IMPORTED_MODULE_3__.SW4)(_templateObject2||(_templateObject2=(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.Z)(["\n  color: ",";\n  font-size: 22px;\n  transition: 0.3s;\n\n  ",":hover > & {\n    filter: drop-shadow(0 0 5px ",");\n  }\n"])),colors_slightBrightRed,Button,colors_slightBrightRed);__webpack_exports__.Z=DeleteButton;try{DeleteButton.displayName="DeleteButton",DeleteButton.__docgenInfo={description:"",displayName:"DeleteButton",props:{productId:{defaultValue:null,description:"",name:"productId",required:!0,type:{name:"number"}},notifyParentWhenDeleteTriggered:{defaultValue:null,description:"",name:"notifyParentWhenDeleteTriggered",required:!0,type:{name:"(productId: number) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/DeleteButton/DeleteButton.tsx#DeleteButton"]={docgenInfo:DeleteButton.__docgenInfo,name:"DeleteButton",path:"src/components/common/DeleteButton/DeleteButton.tsx#DeleteButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/hooks/useQuantityUpdater.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),recoil__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/recoil/es/index.js"),_store_cartProductAtom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/store/cartProductAtom.tsx");__webpack_exports__.Z=function useQuantityUpdater(_ref){var productId=_ref.productId,_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("0"),_useState2=(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__.Z)(_useState,2),inputValue=_useState2[0],setInputValue=_useState2[1],_useState3=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),_useState4=(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__.Z)(_useState3,2),isFocused=_useState4[0],setIsFocused=_useState4[1],_useState5=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),_useState6=(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__.Z)(_useState5,2),isButtonMode=_useState6[0],setIsButtonMode=_useState6[1],setCartProducts=(0,recoil__WEBPACK_IMPORTED_MODULE_1__.Zl)(_store_cartProductAtom__WEBPACK_IMPORTED_MODULE_2__.Z),updateProduct=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){isFocused||setCartProducts((function(previousCartProducts){return(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},previousCartProducts),{},(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.Z)({},productId,Number(inputValue)))}))}),[isFocused,setCartProducts,productId,inputValue]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){updateProduct()}),[updateProduct]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){var newInputValue=Math.max(Number(inputValue),0);setIsButtonMode((function(){return!isFocused&&0===newInputValue}))}),[isFocused,inputValue]);return{inputValue:inputValue,isButtonMode:isButtonMode,setIsFocused:setIsFocused,updateInputValue:function updateInputValue(event){setInputValue((function(){var newInputValue=function removeNonDigits(value){return value.replace(/[^0-9]/g,"")}(event.target.value);return setIsFocused((function(){return!0})),newInputValue}))},initializeInputValue:function initializeInputValue(){setInputValue((function(){return"1"}))},incrementInputValue:function incrementInputValue(incrementValue){setInputValue((function(previousInputValue){return Math.max(Number(previousInputValue)+incrementValue,0).toString()}))}}}},"./src/store/cartProductAtom.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var cartProductsState=(0,__webpack_require__("./node_modules/recoil/es/index.js").cn)({key:"cartProductsState",default:{}});__webpack_exports__.Z=cartProductsState}}]);