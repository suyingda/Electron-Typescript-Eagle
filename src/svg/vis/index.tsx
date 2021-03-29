import * as React from 'react';

import {css, cx} from '@emotion/css';

function Vis() {
    return <div>
        <div className="logo-box" id="logoBox">

            <p className="logo-title ul-title marginleft20" id="logo-title">属性菜单<a href="javascript:;"
                                                                                   className="btn-arrow"><i
                className="ico-arrow"></i></a></p>
            <div id="logoPanel" className="logo-grid c-scrollbar" style={{zIndex: 2}}>

                <div className="mask align-mask" id="logoMask "></div>
                <div className="mask prot-mask" id="logoMask "></div>
                <div className="align-box disabled">
                    <p className="ul-title  ul-title-small">模块布局</p>
                    <div className="ul-box">
                        <div className="cui-bubble-icon ">
                            <a id="alignTop" className="a-btn a-top-btn"><i className="ico"></i></a>
                            <div className={cx('cui-bubble cui-bubble-top', css`
            margin-left:-70px;margin-top:5px;width: 130px;
              `)}
                            >
                                <div className="cui-bubble-inner">
                                    上对齐
                                </div>
                            </div>
                        </div>
                        <div className="cui-bubble-icon ">
                            <a id="alignBottom" className="a-btn a-bottom-btn"><i className="ico"></i></a>
                            <div
                                className={cx("cui-bubble cui-bubble-top", css`margin-left:-70px;margin-top:5px;width: 130px;`)}>
                                <div className="cui-bubble-inner">
                                    下对齐
                                </div>
                            </div>
                        </div>
                        <div className="cui-bubble-icon ">
                            <a id="alignLeft" className="a-btn a-left-btn"><i className="ico"></i></a>
                            <div
                                className={cx("cui-bubble cui-bubble-top", css`margin-left:-70px;margin-top:5px;width: 130px;`)}>
                                <div className="cui-bubble-inner">
                                    左对齐
                                </div>
                            </div>
                        </div>
                        <div className="cui-bubble-icon ">
                            <a id="alignRight" className="a-btn a-right-btn"><i className="ico"></i></a>
                            <div
                                className={cx("cui-bubble cui-bubble-top", css`margin-left:-70px;margin-top:5px;width: 130px;`)}>
                                <div className="cui-bubble-inner">
                                    右对齐
                                </div>
                            </div>
                        </div>
                        <div className="cui-bubble-icon ">
                            <a id="alignVerticalCenteral" className="a-btn a-h-center-btn"><i className="ico"></i></a>
                            <div
                                className={cx("cui-bubble cui-bubble-top", css`margin-left:-70px;margin-top:5px;width: 130px;`)}>
                                <div className="cui-bubble-inner">
                                    纵向居中
                                </div>
                            </div>
                        </div>
                        <div className="cui-bubble-icon ">
                            <a id="alignHorizontalCenteral" className="a-btn a-a-center-btn"><i className="ico"></i></a>
                            <div
                                className={cx("cui-bubble cui-bubble-top", css`margin-left:-70px;margin-top:5px;width: 130px;`)}>
                                <div className="cui-bubble-inner">
                                    横向居中
                                </div>
                            </div>
                        </div>
                        <div className="cui-bubble-icon ">
                            <a id="alignHorizontal" className="a-btn a-ver-btn"><i className="ico"></i></a>
                            <div
                                className={cx("cui-bubble cui-bubble-top", css`margin-left:-70px;margin-top:5px;width: 130px;`)}>
                                <div className="cui-bubble-inner">
                                    横向均分
                                </div>
                            </div>
                        </div>
                        <div className="cui-bubble-icon ">
                            <a id="alignVertical" className="a-btn a-hor-btn"><i className="ico"></i></a>
                            <div
                                className={cx("cui-bubble cui-bubble-top", css`margin-left:-70px;margin-top:5px;width: 130px;`)}>
                                <div className="cui-bubble-inner">
                                    纵向均分
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="ul-title ul-title-small tab-ul-title"><a id="rectSwitch" href="javascript:;">元素属性</a><a
                    id="lineSwitch" href="javascript:;">线条属性</a></p>
                <div className="ul-box line-box hidden">
                    <label className="checkbox" htmlFor="checkbox1">
                        <input type="checkbox" value="" id="linkDashCheckbox" data-toggle="checkbox"
                               className="custom-checkbox"/><span>虚线</span>
                    </label>
                    <label className="checkbox" htmlFor="checkbox1">
                        <input type="checkbox" value="" id="linkBlueCheckbox" data-toggle="checkbox"
                               className="custom-checkbox "/><span>蓝色</span>
                    </label>
                </div>
                <div className="ul-box rect-box disabled">
                    <p className="lp">
                        <span className="txt">文本：</span>
                        <input className="text-input input-right" type="text" id="rectText_right" placeholder=""
                               disabled=""/>
                    </p>
                    <div className="lp">
                        <span className="txt">对齐：</span>
                        <div className="cui-bubble-icon ">
                            <a id="horizontalCenter" className="a-btn a-align-btn"><i className="ico">水平居中</i></a>
                            <div
                                className={cx("cui-bubble cui-bubble-top", css`margin-left:-70px;margin-top:5px;width: 130px;`)}>
                                <div className="cui-bubble-inner">
                                    水平居中
                                </div>
                            </div>
                        </div>
                        <div className="cui-bubble-icon ">
                            <a id="verticalCenter" className="a-btn  a-vertical-btn"><i className="ico">垂直居中</i></a>
                            <div
                                className={cx("cui-bubble cui-bubble-top", css`margin-left:-70px;margin-top:5px;width: 130px;`)}>
                                <div className="cui-bubble-inner">
                                    垂直居中
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="lp">
                        <span className="txt">层级：</span>
                        <div className="cui-bubble-icon ">
                            <a id="moveToTop" className="a-btn a-up-btn"><i className="ico">最上层</i></a>
                            <div
                                className={cx("cui-bubble cui-bubble-top", css`margin-left:-70px;margin-top:5px;width: 130px;`)}>
                                <div className="cui-bubble-inner">
                                    移到最上层
                                </div>
                            </div>
                        </div>
                        <div className="cui-bubble-icon ">
                            <a id="moveToButtom" className="a-btn a-down-btn"><i className="ico">最下层</i></a>
                            <div
                                className={cx("cui-bubble cui-bubble-top", css`margin-left:-70px;margin-top:5px;width: 130px;`)}>
                                <div className="cui-bubble-inner">

                                    移到最下层
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="lp">
                        <span className="txt">宽度：</span>
                        <input className="text-input short input-right" type="text" id="rectWidth" disabled=""/>
                    </p>
                    <p className="lp">
                        <span className="txt">高度：</span>
                        <input className="text-input short input-right" type="text" id="rectHeight" disabled=""/>
                    </p>
                    <p className="lp">
                        <button className="d3-down-btn copy"
                            // onClick="confirmRectDialog()"
                        >保存
                        </button>
                        <button className="d3-down-btn copy "
                            // onClick="copyRectDialog()"
                        >复制
                        </button>
                        <button className="d3-down-btn copy last "
                            // onClick="deleteRectItem()"
                        >删除
                        </button>
                    </p>
                </div>
                <div className="logo-content disabled">
                    <p className="ul-title  ul-title-small">替换图标</p>
                    <div className="ul-box ">
                        <div className="uploadicon">
                            <p className="uploadicon-btn">
                                <a href="javascript:;" className="d3-down-btn copy" title="上传图标">
                                    <span>上传图标</span>
                                    <input className="change" type="file" id="rectLogoFile" name="rectLogoFile[]"/>
                                </a>
                                <a href="javascript:;" className="d3-down-btn copy weak" title="上传图标">
                                    <span>删除图标</span>
                                    <input className="change" id="rectLogoDelect"/>
                                </a>
                            </p>

                            <textarea className="text-input" type="text" id="rectLogo" placeholder="logo" rows="3"
                                      disabled=""/>
                            <label className="checkbox hidden" htmlFor="checkbox1">
                                <input type="checkbox" value="" id="logoBlueCheckbox" data-toggle="checkbox"
                                       className="custom-checkbox"/><span className="radio-txt">蓝色图标</span>
                            </label>
                        </div>
                    </div>
                    <div id="logoSubPanel" className="all-logo-box">
                        <p className="ul-title logo-ul-title"><a id="32x32Switch" href="javascript:;"
                                                                 className="current">32x32</a><a id="16x16Switch"
                                                                                                 href="javascript:;">16x16</a>
                        </p>
                        <div className="mask"></div>
                        <ul id="32x32LogoUl" className="box-32 clearfix">
                        </ul>
                        <ul id="16x16LogoUl" className="box-16 clearfix hidden">
                        </ul>
                        {/*    // <!-- 新手指引 -->*/}

                    </div>

                </div>


            </div>
        </div>
    </div>
}

export default Vis;