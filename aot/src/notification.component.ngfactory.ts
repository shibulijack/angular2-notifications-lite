/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../src/notification.component';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '../../src/notifications.service';
import * as import10 from '@angular/platform-browser/src/security/dom_sanitization_service';
import * as import11 from '@angular/core/src/zone/ng_zone';
import * as import12 from '@angular/core/src/animation/animation_transition';
import * as import13 from '@angular/core/src/animation/animation_sequence_player';
import * as import14 from '@angular/core/src/animation/animation_styles';
import * as import15 from '@angular/core/src/animation/animation_style_util';
import * as import16 from '@angular/core/src/animation/animation_keyframe';
import * as import17 from '@angular/core/src/animation/animation_player';
import * as import18 from '../node_modules/@angular/common/src/directives/ng_class.ngfactory';
import * as import19 from '@angular/core/src/linker/view_container';
import * as import20 from '../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import21 from '../../src/max.pipe';
import * as import22 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import23 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import24 from '@angular/core/src/linker/element_ref';
import * as import25 from '@angular/core/src/linker/template_ref';
import * as import26 from '@angular/common/src/directives/ng_if';
import * as import27 from '@angular/common/src/directives/ng_class';
import * as import28 from '@angular/core/src/security';
import * as import29 from '../node_modules/@angular/common/src/directives/ng_style.ngfactory';
import * as import30 from '@angular/common/src/directives/ng_style';
export class Wrapper_NotificationComponent {
  /*private*/ _eventHandler:Function;
  context:import0.NotificationComponent;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_8:any;
  /*private*/ _expr_9:any;
  constructor(p0:any,p1:any,p2:any) {
    this._changed = false;
    this.context = new import0.NotificationComponent(p0,p1,p2);
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
    this._expr_2 = import1.UNINITIALIZED;
    this._expr_3 = import1.UNINITIALIZED;
    this._expr_4 = import1.UNINITIALIZED;
    this._expr_5 = import1.UNINITIALIZED;
    this._expr_6 = import1.UNINITIALIZED;
    this._expr_7 = import1.UNINITIALIZED;
    this._expr_8 = import1.UNINITIALIZED;
    this._expr_9 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    this.context.ngOnDestroy();
  }
  check_timeOut(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.timeOut = currValue;
      this._expr_0 = currValue;
    }
  }
  check_showProgressBar(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.showProgressBar = currValue;
      this._expr_1 = currValue;
    }
  }
  check_pauseOnHover(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_2,currValue))) {
      this._changed = true;
      this.context.pauseOnHover = currValue;
      this._expr_2 = currValue;
    }
  }
  check_clickToClose(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_3,currValue))) {
      this._changed = true;
      this.context.clickToClose = currValue;
      this._expr_3 = currValue;
    }
  }
  check_maxLength(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_4,currValue))) {
      this._changed = true;
      this.context.maxLength = currValue;
      this._expr_4 = currValue;
    }
  }
  check_theClass(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_5,currValue))) {
      this._changed = true;
      this.context.theClass = currValue;
      this._expr_5 = currValue;
    }
  }
  check_rtl(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_6,currValue))) {
      this._changed = true;
      this.context.rtl = currValue;
      this._expr_6 = currValue;
    }
  }
  check_animate(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_7,currValue))) {
      this._changed = true;
      this.context.animate = currValue;
      this._expr_7 = currValue;
    }
  }
  check_position(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_8,currValue))) {
      this._changed = true;
      this.context.position = currValue;
      this._expr_8 = currValue;
    }
  }
  check_item(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_9,currValue))) {
      this._changed = true;
      this.context.item = currValue;
      this._expr_9 = currValue;
    }
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); } }
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_NotificationComponent_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_NotificationComponent_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.NotificationComponent>;
  _NotificationComponent_0_3:Wrapper_NotificationComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_NotificationComponent_Host0,renderType_NotificationComponent_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'simple-notification',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_NotificationComponent0(this.viewUtils,this,0,this._el_0);
    this._NotificationComponent_0_3 = new Wrapper_NotificationComponent(this.injectorGet(import9.NotificationsService,this.parentIndex),this.injectorGet(import10.DomSanitizer,this.parentIndex),this.injectorGet(import11.NgZone,this.parentIndex));
    this.compView_0.create(this._NotificationComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._NotificationComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.NotificationComponent) && (0 === requestNodeIndex))) { return this._NotificationComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._NotificationComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._NotificationComponent_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const NotificationComponentNgFactory:import8.ComponentFactory<import0.NotificationComponent> = new import8.ComponentFactory<import0.NotificationComponent>('simple-notification',View_NotificationComponent_Host0,import0.NotificationComponent);
const styles_NotificationComponent:any[] = ['\n        .simple-notification {\n            width: 100%;\n            padding: 10px 20px;\n            box-sizing: border-box;\n            position: relative;\n            float: left;\n            margin-bottom: 10px;\n            color: #fff;\n            cursor: pointer;\n            transition: all 0.5s;\n        }\n\n        .simple-notification .sn-title {\n            margin: 0;\n            padding: 0 50px 0 0;\n            line-height: 30px;\n            font-size: 20px;\n        }\n\n        .simple-notification .sn-content {\n            margin: 0;\n            font-size: 16px;\n            padding: 0 50px 0 0;\n            line-height: 20px;\n        }\n\n        .simple-notification svg {\n            position: absolute;\n            box-sizing: border-box;\n            top: 0;\n            right: 0;\n            width: 70px;\n            height: 70px;\n            padding: 10px;\n            fill: #fff;\n        }\n\n        .simple-notification.rtl-mode {\n            direction: rtl;\n        }\n\n        .simple-notification.rtl-mode .sn-content {\n            padding: 0 0 0 50px;\n        }\n\n        .simple-notification.rtl-mode svg {\n            left: 0;\n            right: auto;\n        }\n\n        .simple-notification.error { background: #F44336; }\n        .simple-notification.success { background: #8BC34A; }\n        .simple-notification.alert { background: #ffdb5b; }\n        .simple-notification.info { background: #03A9F4; }\n\n        .simple-notification .sn-progress-loader {\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 5px;\n        }\n\n        .simple-notification .sn-progress-loader span {\n            float: left;\n            height: 100%;\n        }\n\n        .simple-notification.success .sn-progress-loader span { background: #689F38; }\n        .simple-notification.error .sn-progress-loader span { background: #D32F2F; }\n        .simple-notification.alert .sn-progress-loader span { background: #edc242; }\n        .simple-notification.info .sn-progress-loader span { background: #0288D1; }\n        .simple-notification.bare .sn-progress-loader span { background: #ccc; }\n    '];
var NotificationComponent_enterLeave_states:any = {
  fromRight: {
    opacity: '1',
    transform: 'translateX(0)'
  }
  ,
  fromRightOut: {
    opacity: '0',
    transform: 'translateX(-5%)'
  }
  ,
  fromLeft: {
    opacity: '1',
    transform: 'translateX(0)'
  }
  ,
  fromLeftOut: {
    opacity: '0',
    transform: 'translateX(5%)'
  }
  ,
  scale: {
    opacity: '1',
    transform: 'scale(1)'
  }
  ,
  scaleOut: {
    opacity: '0',
    transform: 'scale(0)'
  }
  ,
  rotate: {
    opacity: '1',
    transform: 'rotate(0deg)'
  }
  ,
  rotateOut: {
    opacity: '0',
    transform: 'rotate(-5deg)'
  }
  ,
  '*': {}
}
;
function NotificationComponent_enterLeave_factory(view:import2.AppView<any>,element:any,currentState:any,nextState:any):import12.AnimationTransition {
  var previousPlayers:any = view.animationContext.getAnimationPlayers(element,((nextState == 'void')? (null as any): 'enterLeave'));
  var collectedStyles:any = {};
  var player:any = (null as any);
  var totalTime:any = 0;
  var defaultStateStyles:any = NotificationComponent_enterLeave_states['*'];
  var startStateStyles:any = NotificationComponent_enterLeave_states[currentState];
  if ((startStateStyles == (null as any))) { (startStateStyles = defaultStateStyles); }
  var endStateStyles:any = NotificationComponent_enterLeave_states[nextState];
  if ((endStateStyles == (null as any))) { (endStateStyles = defaultStateStyles); }
  if (((player == (null as any)) && (true && (nextState == 'fromRight')))) {
      player = new import13.AnimationSequencePlayer([view.renderer.animate(element,new import14.AnimationStyles(import15.collectAndResolveStyles(collectedStyles,[
        startStateStyles,
        {
          opacity: '0',
          transform: 'translateX(5%)'
        }

      ]
      )),import15.balanceAnimationKeyframes(collectedStyles,endStateStyles,[
        new import16.AnimationKeyframe(0,new import14.AnimationStyles(import15.collectAndResolveStyles(collectedStyles,[{}]))),
        new import16.AnimationKeyframe(1,new import14.AnimationStyles(import15.collectAndResolveStyles(collectedStyles,[{}])))
      ]
    ),400,0,'ease-in-out',previousPlayers)]);
    totalTime = 400;
  }
  if (((player == (null as any)) && ((currentState == 'fromRight') && (nextState == 'fromRightOut')))) {
      player = new import13.AnimationSequencePlayer([view.renderer.animate(element,new import14.AnimationStyles(import15.collectAndResolveStyles(collectedStyles,[
        startStateStyles,
        {
          opacity: '1',
          transform: 'translateX(0)'
        }

      ]
      )),import15.balanceAnimationKeyframes(collectedStyles,endStateStyles,[
        new import16.AnimationKeyframe(0,new import14.AnimationStyles(import15.collectAndResolveStyles(collectedStyles,[{}]))),
        new import16.AnimationKeyframe(1,new import14.AnimationStyles(import15.collectAndResolveStyles(collectedStyles,[{}])))
      ]
    ),300,0,'ease-in-out',previousPlayers)]);
    totalTime = 300;
  }
  if (((player == (null as any)) && (true && (nextState == 'fromLeft')))) {
      player = new import13.AnimationSequencePlayer([view.renderer.animate(element,new import14.AnimationStyles(import15.collectAndResolveStyles(collectedStyles,[
        startStateStyles,
        {
          opacity: '0',
          transform: 'translateX(-5%)'
        }

      ]
      )),import15.balanceAnimationKeyframes(collectedStyles,endStateStyles,[
        new import16.AnimationKeyframe(0,new import14.AnimationStyles(import15.collectAndResolveStyles(collectedStyles,[{}]))),
        new import16.AnimationKeyframe(1,new import14.AnimationStyles(import15.collectAndResolveStyles(collectedStyles,[{}])))
      ]
    ),400,0,'ease-in-out',previousPlayers)]);
    totalTime = 400;
  }
  if (((player == (null as any)) && ((currentState == 'fromLeft') && (nextState == 'fromLeftOut')))) {
      player = new import13.AnimationSequencePlayer([view.renderer.animate(element,new import14.AnimationStyles(import15.collectAndResolveStyles(collectedStyles,[
        startStateStyles,
        {
          opacity: '1',
          transform: 'translateX(0)'
        }

      ]
      )),import15.balanceAnimationKeyframes(collectedStyles,endStateStyles,[
        new import16.AnimationKeyframe(0,new import14.AnimationStyles(import15.collectAndResolveStyles(collectedStyles,[{}]))),
        new import16.AnimationKeyframe(1,new import14.AnimationStyles(import15.collectAndResolveStyles(collectedStyles,[{}])))
      ]
    ),300,0,'ease-in-out',previousPlayers)]);
    totalTime = 300;
  }
  if (((player == (null as any)) && (true && (nextState == 'scale')))) {
      player = new import13.AnimationSequencePlayer([view.renderer.animate(element,new import14.AnimationStyles(import15.collectAndResolveStyles(collectedStyles,[
        startStateStyles,
        {
          opacity: '0',
          transform: 'scale(0)'
        }

      ]
      )),import15.balanceAnimationKeyframes(collectedStyles,endStateStyles,[
        new import16.AnimationKeyframe(0,new import14.AnimationStyles(import15.collectAndResolveStyles(collectedStyles,[{}]))),
        new import16.AnimationKeyframe(1,new import14.AnimationStyles(import15.collectAndResolveStyles(collectedStyles,[{}])))
      ]
    ),400,0,'ease-in-out',previousPlayers)]);
    totalTime = 400;
  }
  if (((player == (null as any)) && ((currentState == 'scale') && (nextState == 'scaleOut')))) {
      player = new import13.AnimationSequencePlayer([view.renderer.animate(element,new import14.AnimationStyles(import15.collectAndResolveStyles(collectedStyles,[
        startStateStyles,
        {
          opacity: '1',
          transform: 'scale(1)'
        }

      ]
      )),import15.balanceAnimationKeyframes(collectedStyles,endStateStyles,[
        new import16.AnimationKeyframe(0,new import14.AnimationStyles(import15.collectAndResolveStyles(collectedStyles,[{}]))),
        new import16.AnimationKeyframe(1,new import14.AnimationStyles(import15.collectAndResolveStyles(collectedStyles,[{}])))
      ]
    ),400,0,'ease-in-out',previousPlayers)]);
    totalTime = 400;
  }
  if (((player == (null as any)) && (true && (nextState == 'rotate')))) {
      player = new import13.AnimationSequencePlayer([view.renderer.animate(element,new import14.AnimationStyles(import15.collectAndResolveStyles(collectedStyles,[
        startStateStyles,
        {
          opacity: '0',
          transform: 'rotate(5deg)'
        }

      ]
      )),import15.balanceAnimationKeyframes(collectedStyles,endStateStyles,[
        new import16.AnimationKeyframe(0,new import14.AnimationStyles(import15.collectAndResolveStyles(collectedStyles,[{}]))),
        new import16.AnimationKeyframe(1,new import14.AnimationStyles(import15.collectAndResolveStyles(collectedStyles,[{}])))
      ]
    ),400,0,'ease-in-out',previousPlayers)]);
    totalTime = 400;
  }
  if (((player == (null as any)) && ((currentState == 'rotate') && (nextState == 'rotateOut')))) {
      player = new import13.AnimationSequencePlayer([view.renderer.animate(element,new import14.AnimationStyles(import15.collectAndResolveStyles(collectedStyles,[
        startStateStyles,
        {
          opacity: '1',
          transform: 'rotate(0deg)'
        }

      ]
      )),import15.balanceAnimationKeyframes(collectedStyles,endStateStyles,[
        new import16.AnimationKeyframe(0,new import14.AnimationStyles(import15.collectAndResolveStyles(collectedStyles,[{}]))),
        new import16.AnimationKeyframe(1,new import14.AnimationStyles(import15.collectAndResolveStyles(collectedStyles,[{}])))
      ]
    ),400,0,'ease-in-out',previousPlayers)]);
    totalTime = 400;
  }
  if ((player == (null as any))) { (player = new import17.NoOpAnimationPlayer()); }
  player.onDone(():void => {
    player.destroy();
    import15.renderStyles(element,view.renderer,import15.prepareFinalAnimationStyles(startStateStyles,endStateStyles));
  });
  new import13.AnimationSequencePlayer(previousPlayers).destroy();
  import15.renderStyles(element,view.renderer,import15.clearStyles(startStateStyles));
  view.animationContext.queueAnimation(element,'enterLeave',player);
  return new import12.AnimationTransition(player,currentState,nextState,totalTime);
}
var renderType_NotificationComponent:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,styles_NotificationComponent,{enterLeave: NotificationComponent_enterLeave_factory});
export class View_NotificationComponent0 extends import2.AppView<import0.NotificationComponent> {
  _text_0:any;
  _el_1:any;
  _NgClass_1_3:import18.Wrapper_NgClass;
  _text_2:any;
  _anchor_3:any;
  /*private*/ _vc_3:import19.ViewContainer;
  _TemplateRef_3_5:any;
  _NgIf_3_6:import20.Wrapper_NgIf;
  _text_4:any;
  _anchor_5:any;
  /*private*/ _vc_5:import19.ViewContainer;
  _TemplateRef_5_5:any;
  _NgIf_5_6:import20.Wrapper_NgIf;
  _text_6:any;
  _anchor_7:any;
  /*private*/ _vc_7:import19.ViewContainer;
  _TemplateRef_7_5:any;
  _NgIf_7_6:import20.Wrapper_NgIf;
  _text_8:any;
  _text_9:any;
  /*private*/ _expr_20:any;
  _map_21:any;
  _pipe_max_0:import21.MaxPipe;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_NotificationComponent0,renderType_NotificationComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
    this._expr_20 = import1.UNINITIALIZED;
    this._map_21 = import3.pureProxy6((p0:any,p1:any,p2:any,p3:any,p4:any,p5:any):{[key: string]:any} => {
      return {
        alert: p0,
        error: p1,
        success: p2,
        info: p3,
        bare: p4,
        'rtl-mode': p5
      }
      ;
    });
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n        ',(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'class','simple-notification'),(null as any));
    this._NgClass_1_3 = new import18.Wrapper_NgClass(this.parentView.injectorGet(import22.IterableDiffers,this.parentIndex),this.parentView.injectorGet(import23.KeyValueDiffers,this.parentIndex),new import24.ElementRef(this._el_1),this.renderer);
    this._text_2 = this.renderer.createText(this._el_1,'\n\n            ',(null as any));
    this._anchor_3 = this.renderer.createTemplateAnchor(this._el_1,(null as any));
    this._vc_3 = new import19.ViewContainer(3,1,this,this._anchor_3);
    this._TemplateRef_3_5 = new import25.TemplateRef_(this,3,this._anchor_3);
    this._NgIf_3_6 = new import20.Wrapper_NgIf(this._vc_3.vcRef,this._TemplateRef_3_5);
    this._text_4 = this.renderer.createText(this._el_1,'\n            ',(null as any));
    this._anchor_5 = this.renderer.createTemplateAnchor(this._el_1,(null as any));
    this._vc_5 = new import19.ViewContainer(5,1,this,this._anchor_5);
    this._TemplateRef_5_5 = new import25.TemplateRef_(this,5,this._anchor_5);
    this._NgIf_5_6 = new import20.Wrapper_NgIf(this._vc_5.vcRef,this._TemplateRef_5_5);
    this._text_6 = this.renderer.createText(this._el_1,'\n\n            ',(null as any));
    this._anchor_7 = this.renderer.createTemplateAnchor(this._el_1,(null as any));
    this._vc_7 = new import19.ViewContainer(7,1,this,this._anchor_7);
    this._TemplateRef_7_5 = new import25.TemplateRef_(this,7,this._anchor_7);
    this._NgIf_7_6 = new import20.Wrapper_NgIf(this._vc_7.vcRef,this._TemplateRef_7_5);
    this._text_8 = this.renderer.createText(this._el_1,'\n\n        ',(null as any));
    this._text_9 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_1,new import3.InlineArray8(6,'click',(null as any),'mouseenter',(null as any),'mouseleave',(null as any)),this.eventHandler(this.handleEvent_1));
    this._pipe_max_0 = new import21.MaxPipe();
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._anchor_3,
      this._text_4,
      this._anchor_5,
      this._text_6,
      this._anchor_7,
      this._text_8,
      this._text_9
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import25.TemplateRef) && (3 === requestNodeIndex))) { return this._TemplateRef_3_5; }
    if (((token === import26.NgIf) && (3 === requestNodeIndex))) { return this._NgIf_3_6.context; }
    if (((token === import25.TemplateRef) && (5 === requestNodeIndex))) { return this._TemplateRef_5_5; }
    if (((token === import26.NgIf) && (5 === requestNodeIndex))) { return this._NgIf_5_6.context; }
    if (((token === import25.TemplateRef) && (7 === requestNodeIndex))) { return this._TemplateRef_7_5; }
    if (((token === import26.NgIf) && (7 === requestNodeIndex))) { return this._NgIf_7_6.context; }
    if (((token === import27.NgClass) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 8)))) { return this._NgClass_1_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_20:any = this.context.item.state;
    if (import3.checkBinding(throwOnChange,this._expr_20,currVal_20)) {
      var animationTransition_enterLeave:any = this.componentType.animations['enterLeave'](this,this._el_1,((this._expr_20 == import1.UNINITIALIZED)? 'void': this._expr_20),((currVal_20 == import1.UNINITIALIZED)? 'void': currVal_20));
      this._expr_20 = currVal_20;
    }
    const currVal_1_0_0:any = this.context.theClass;
    this._NgClass_1_3.check_klass(currVal_1_0_0,throwOnChange,false);
    const currVal_1_0_1:any = this._map_21((this.context.item.type === 'alert'),(this.context.item.type === 'error'),(this.context.item.type === 'success'),(this.context.item.type === 'info'),(this.context.item.type === 'bare'),this.context.rtl);
    this._NgClass_1_3.check_ngClass(currVal_1_0_1,throwOnChange,false);
    this._NgClass_1_3.ngDoCheck(this,this._el_1,throwOnChange);
    const currVal_3_0_0:boolean = !this.context.item.html;
    this._NgIf_3_6.check_ngIf(currVal_3_0_0,throwOnChange,false);
    this._NgIf_3_6.ngDoCheck(this,this._anchor_3,throwOnChange);
    const currVal_5_0_0:any = this.context.item.html;
    this._NgIf_5_6.check_ngIf(currVal_5_0_0,throwOnChange,false);
    this._NgIf_5_6.ngDoCheck(this,this._anchor_5,throwOnChange);
    const currVal_7_0_0:any = this.context.showProgressBar;
    this._NgIf_7_6.check_ngIf(currVal_7_0_0,throwOnChange,false);
    this._NgIf_7_6.ngDoCheck(this,this._anchor_7,throwOnChange);
    this._vc_3.detectChangesInNestedViews(throwOnChange);
    this._vc_5.detectChangesInNestedViews(throwOnChange);
    this._vc_7.detectChangesInNestedViews(throwOnChange);
  }
  destroyInternal():void {
    this._vc_3.destroyNestedViews();
    this._vc_5.destroyNestedViews();
    this._vc_7.destroyNestedViews();
  }
  detachInternal():void {
    var animationTransition_enterLeave:any = this.componentType.animations['enterLeave'](this,this._el_1,this._expr_20,'void');
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 3)) { return new View_NotificationComponent1(this.viewUtils,this,3,this._anchor_3,this._vc_3); }
    if ((nodeIndex == 5)) { return new View_NotificationComponent3(this.viewUtils,this,5,this._anchor_5,this._vc_5); }
    if ((nodeIndex == 7)) { return new View_NotificationComponent4(this.viewUtils,this,7,this._anchor_7,this._vc_7); }
    return (null as any);
  }
  handleEvent_1(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.onClick($event)) !== false);
      result = (pd_sub_0 && result);
    }
    if ((eventName == 'mouseenter')) {
      const pd_sub_1:any = ((<any>this.context.onEnter()) !== false);
      result = (pd_sub_1 && result);
    }
    if ((eventName == 'mouseleave')) {
      const pd_sub_2:any = ((<any>this.context.onLeave()) !== false);
      result = (pd_sub_2 && result);
    }
    return result;
  }
}
class View_NotificationComponent1 extends import2.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _text_7:any;
  _anchor_8:any;
  /*private*/ _vc_8:import19.ViewContainer;
  _TemplateRef_8_5:any;
  _NgIf_8_6:import20.Wrapper_NgIf;
  _text_9:any;
  /*private*/ _expr_13:any;
  /*private*/ _expr_14:any;
  _pipe_max_0_0:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import19.ViewContainer) {
    super(View_NotificationComponent1,renderType_NotificationComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_13 = import1.UNINITIALIZED;
    this._expr_14 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n                ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'div',new import3.InlineArray2(2,'class','sn-title'),(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n                ',(null as any));
    this._el_5 = import3.createRenderElement(this.renderer,this._el_0,'div',new import3.InlineArray2(2,'class','sn-content'),(null as any));
    this._text_6 = this.renderer.createText(this._el_5,'',(null as any));
    this._text_7 = this.renderer.createText(this._el_0,'\n\n                ',(null as any));
    this._anchor_8 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._vc_8 = new import19.ViewContainer(8,0,this,this._anchor_8);
    this._TemplateRef_8_5 = new import25.TemplateRef_(this,8,this._anchor_8);
    this._NgIf_8_6 = new import20.Wrapper_NgIf(this._vc_8.vcRef,this._TemplateRef_8_5);
    this._text_9 = this.renderer.createText(this._el_0,'\n            ',(null as any));
    this._pipe_max_0_0 = import3.pureProxy2((<View_NotificationComponent0>this.parentView)._pipe_max_0.transform.bind((<View_NotificationComponent0>this.parentView)._pipe_max_0));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._text_7,
      this._anchor_8,
      this._text_9
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import25.TemplateRef) && (8 === requestNodeIndex))) { return this._TemplateRef_8_5; }
    if (((token === import26.NgIf) && (8 === requestNodeIndex))) { return this._NgIf_8_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const valUnwrapper:any = new import1.ValueUnwrapper();
    const currVal_8_0_0:any = (this.parentView.context.item.type !== 'bare');
    this._NgIf_8_6.check_ngIf(currVal_8_0_0,throwOnChange,false);
    this._NgIf_8_6.ngDoCheck(this,this._anchor_8,throwOnChange);
    this._vc_8.detectChangesInNestedViews(throwOnChange);
    const currVal_13:any = import3.inlineInterpolate(1,'',this.parentView.context.item.title,'');
    if (import3.checkBinding(throwOnChange,this._expr_13,currVal_13)) {
      this.renderer.setText(this._text_3,currVal_13);
      this._expr_13 = currVal_13;
    }
    valUnwrapper.reset();
    const currVal_14:any = import3.inlineInterpolate(1,'',valUnwrapper.unwrap(import3.castByValue(this._pipe_max_0_0,(<View_NotificationComponent0>this.parentView)._pipe_max_0.transform)(this.parentView.context.item.content,this.parentView.context.maxLength)),'');
    if ((valUnwrapper.hasWrappedValue || import3.checkBinding(throwOnChange,this._expr_14,currVal_14))) {
      this.renderer.setText(this._text_6,currVal_14);
      this._expr_14 = currVal_14;
    }
  }
  destroyInternal():void {
    this._vc_8.destroyNestedViews();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 8)) { return new View_NotificationComponent2(this.viewUtils,this,8,this._anchor_8,this._vc_8); }
    return (null as any);
  }
}
class View_NotificationComponent2 extends import2.AppView<any> {
  _el_0:any;
  /*private*/ _expr_1:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import19.ViewContainer) {
    super(View_NotificationComponent2,renderType_NotificationComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_1 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_1:any = this.parentView.parentView.context.safeSvg;
    if (import3.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementProperty(this._el_0,'innerHTML',this.viewUtils.sanitizer.sanitize(import28.SecurityContext.HTML,currVal_1));
      this._expr_1 = currVal_1;
    }
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
class View_NotificationComponent3 extends import2.AppView<any> {
  _el_0:any;
  /*private*/ _expr_1:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import19.ViewContainer) {
    super(View_NotificationComponent3,renderType_NotificationComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_1 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_1:any = this.parentView.context.item.html;
    if (import3.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementProperty(this._el_0,'innerHTML',this.viewUtils.sanitizer.sanitize(import28.SecurityContext.HTML,currVal_1));
      this._expr_1 = currVal_1;
    }
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
class View_NotificationComponent4 extends import2.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _NgStyle_2_3:import29.Wrapper_NgStyle;
  _text_3:any;
  _map_5:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import19.ViewContainer) {
    super(View_NotificationComponent4,renderType_NotificationComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._map_5 = import3.pureProxy1((p0:any):{[key: string]:any} => {
      return {width: p0};
    });
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',new import3.InlineArray2(2,'class','sn-progress-loader'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n                ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'span',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._NgStyle_2_3 = new import29.Wrapper_NgStyle(this.parentView.parentView.injectorGet(import23.KeyValueDiffers,this.parentView.parentIndex),new import24.ElementRef(this._el_2),this.renderer);
    this._text_3 = this.renderer.createText(this._el_0,'\n            ',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import30.NgStyle) && (2 === requestNodeIndex))) { return this._NgStyle_2_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2_0_0:any = this._map_5((this.parentView.context.progressWidth + '%'));
    this._NgStyle_2_3.check_ngStyle(currVal_2_0_0,throwOnChange,false);
    this._NgStyle_2_3.ngDoCheck(this,this._el_2,throwOnChange);
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}