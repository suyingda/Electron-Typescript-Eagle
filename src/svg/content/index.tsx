import * as React from 'react';
import {css, cx} from '@emotion/css'
import SvgTemplate from './../components/ST'
function ContentTemplate() {
    return <div>
        <div id="mainBox" className={cx("main-box", css`top: 110px;`)}>
            <div className="control clearfix">
                <div className="size-box">
                    {/* // <!--  <span>画板尺寸：</span> -->*/}
                    <div className="cui-bubble-icon ">
                        <a id="changeSmallTable" className="d3-tab-btn">810*640</a>
                        <div
                            className={cx("cui-bubble cui-bubble-top", css`margin-left:-70px;margin-top: 15px;width: 130px;`)}>
                            <div className="cui-bubble-inner">
                                {/* <!-- code -->*/}
                                解决方案页图尺寸
                            </div>
                        </div>
                    </div>

                    <div className="cui-bubble-icon ">
                        <a id="changeBigTable" className="d3-tab-btn">830*640</a>
                        <div
                            className={cx("cui-bubble cui-bubble-top", css`margin-left:-70px;margin-top: 15px;width: 130px;`)}>
                            <div className="cui-bubble-inner">
                                {/*<!-- code -->*/}
                                产品介绍页图尺寸
                            </div>
                        </div>
                    </div>
                    {/*/* <!-- <div class="cui-bubble-icon ">
                        <a id="changeSBigTable" class="d3-tab-btn">1180*750</a>
                        <div class="cui-bubble cui-bubble-top" style="margin-left:-70px;margin-top: 15px;width: 130px;">
                             <div class="cui-bubble-inner">
                                 全屏图尺寸
                             </div>
                         </div>
                     </div> -->*/}
                    <input className="text-input wrapper-input" type="text" id="WrapperWidth" placeholder="宽:"/>
                    <input className="text-input wrapper-input" type="text" id="WrapperHeight" placeholder="高:"/>
                    <a className="a-btn a-btn-save wrapper-btn" id="wrapper-btn" title="保存">
                        <i className="ico"/></a>

                </div>
                <div className="import-box">
                    <button id="cleanSvgWrapper" className="d3-down-btn">清空</button>

                    <button id="copyToClickboard" className="d3-down-btn">复制代码</button>
                    <a href="javascript:;" className="d3-down-btn upload special-upload" title="打开本地文件">
                        上传源文件
                        <input className="change" type="file" id="uploadSvgFile" name="uploadSvgFile[]"/>
                    </a>
                    <div className="cui-bubble-icon ">
                        <a download="tcloud_svg.源文件" className="d3-down-btn" id="saveSvgToFile">下载源文件</a>
                        <div
                            className={cx("cui-bubble cui-bubble-top", css`margin-left:-70px;margin-top: 15px;width: 130px;`)}>
                            <div className="cui-bubble-inner">

                                可通过源文件进行多人协作编辑
                            </div>
                        </div>
                    </div>
                    <div className="cui-bubble-icon ">
                        <a download="tcloud_svg.svg" className="d3-down-btn" id="downloadSvg">导SVG</a>
                        <div
                            className={cx("cui-bubble cui-bubble-top", css`margin-left:-70px;margin-top: 15px;width: 130px;`)}>
                            <div className="cui-bubble-inner">
                                可直接使用，或在Illustrate内再次编辑
                            </div>
                        </div>
                    </div>
                    <button id="convertToPng" className="d3-down-btn">导PNG</button>
                </div>

            </div>
            <div className="logos" id="logos"></div>
            <div id="svgwrapper" className={cx("svgwrapper", css`width: 1068px; height: 980px;`)}>
                <div id="svgHeightWidth" className="svg-height-width"><span>1068 x 980</span></div>
                <div className="show-btn" id="show_btn"><i className="ico"></i></div>
                <div className="btn-addsize left" id="svgAddHeight">加高</div>
                <div className="btn-addsize " id="svgAddWidth">加宽</div>
               {/* <svg height="100%" width="100%" viewBox="0 0 1068 980 " id="svgwrapper_svg"
                     onContextMenu="return false;" preserveAspectRatio="xMinYMin meet">
                    <style> g#assistantgroup
                        rect.outer {fill: none;stroke: #1abc9c;stroke-dasharray: 2,4;stroke-width: 1px;} rect.selection {stroke: gray;stroke-dasharray: 4px;stroke-opacity: 0.5; fill: transparent;} svg
                        *::selection {background : transparent;}</style>
                    <defs g_shapeid="0" id="svg_defs">
                        <marker id="end-arrow" viewBox="0 -5 10 10" refX="6" markerWidth="10" markerHeight="10"
                                orient="auto">
                            <path d="M5,5L10 0 5 -5z" fill="#999999"></path>
                        </marker>
                        <filter width="2000" height="2000" x="0" y="0" id="rect-shadow-2000"
                                filterUnits="userSpaceOnUse">
                            <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                        </filter>
                        <marker id="start-arrow" viewBox="0 -5 10 10" refX="4" markerWidth="10" markerHeight="10"
                                orient="auto">
                            <path d="M5,5L10 0 5 -5z" fill="#000"></path>
                        </marker>
                    </defs>
                    <path d="M 0, 0 L 0, 0"
                          style="fill: none; stroke: rgb(153, 153, 153); stroke-width: 1px; display: none;"></path>
                    <g transform="translate(0,0)" id="bottomgroup"></g>
                    <g transform="translate(0,0)" id="middlegroup"></g>
                    <g transform="translate(0,0)" id="maingroup"></g>
                    <g transform="translate(0,0)" id="textgroup"></g>
                    <g transform="translate(0,0)" id="assistantgroup"></g>
                </svg>*/}
                <SvgTemplate />
            </div>
        </div>
    </div>
}

export default ContentTemplate;