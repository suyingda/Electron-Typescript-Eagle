import * as React from 'react';

function ToolTemplate() {
    return <>
        <div className="btn-grid" id="shapeBox">
            <ul className="c-scrollbar">
                <li className="ul-title">区域</li>
                <li>
                    <div className="simple area-size" id="GrayRectGroup" draggable="true">
                        <div className="c-media-img "><img
                            src="http://abc.oa.com/tools/tcloud-diagram/img/items/group-basic.svg" alt=""/></div>
                        <button className="d3-add-btn">添加服务区</button>
                    </div>
                </li>
                <li>
                    <div className="simple area-size" id="BlueRectGroup" draggable="true">
                        <div className="c-media-img "><img
                            src="http://abc.oa.com/tools/tcloud-diagram/img/items/group-blue.svg" alt=""/></div>
                        <button className="d3-add-btn">添加云产品区</button>
                    </div>
                </li>
                <li>
                    <div className="simple area-size" id="DashRectGroup" draggable="true">
                        <div className="c-media-img"><img
                            src="http://abc.oa.com/tools/tcloud-diagram/img/items/group-dash.svg" alt=""/></div>
                        <button className="d3-add-btn">添加系统区</button>
                    </div>
                </li>
                <li>
                    <div className="simple area-size" id="DashRectBlueGroup" draggable="true">
                        <div className="c-media-img"><img
                            src="http://abc.oa.com/tools/tcloud-diagram/img/items/group-dash-blue.svg" alt=""/></div>
                        <button className="d3-add-btn">添加系统区</button>
                    </div>
                </li>
                <li>
                    <div className="simple area-size" id="QcloudBasicGroup" draggable="true">
                        <div className="c-media-img"><img
                            src="http://abc.oa.com/tools/tcloud-diagram/img/items/group-qcloud-basic.svg" alt=""/></div>
                        <button className="d3-add-btn">添加腾讯云可用区</button>
                    </div>
                </li>
                <li>
                    <div className="simple area-size" id="QcloudGroup" draggable="true">
                        <div className="c-media-img"><img
                            src="http://abc.oa.com/tools/tcloud-diagram/img/items/group-qcloud.svg" alt=""/></div>
                        <button className="d3-add-btn">添加腾讯云区</button>
                    </div>
                </li>
                <li className="ul-title">卡片</li>


                <li className="ul-title">元素</li>
                <li>
                    <div className="simple area-size" id="Textbasic" draggable="true">
                        <div className="c-media-img "><img
                            src="http://abc.oa.com/tools/tcloud-diagram/img/items/text_basic.svg" alt=""/></div>
                        <button className="d3-add-btn">添加</button>
                    </div>
                </li>
                <li>
                    <div className="simple area-size" id="Textdot" draggable="true">
                        <div className="c-media-img "><img
                            src="http://abc.oa.com/tools/tcloud-diagram/img/items/text_dot.svg" alt=""/></div>
                        <button className="d3-add-btn">添加</button>
                    </div>
                </li>
                <li>
                    <div className="simple area-size" id="Textbasic_big" draggable="true">
                        <div className="c-media-img "><img
                            src="http://abc.oa.com/tools/tcloud-diagram/img/items/text_basic_big.svg" alt=""/></div>
                        <button className="d3-add-btn">添加</button>
                    </div>
                </li>
                <li>
                    <div className="simple area-size" id="Texticon" draggable="true">
                        <div className="c-media-img "><img
                            src="http://abc.oa.com/tools/tcloud-diagram/img/items/text_icon.svg" alt=""/></div>
                        <button className="d3-add-btn">添加</button>
                    </div>
                </li>
                <li>
                    <div className="simple smallsize" id="Icon16" draggable="true">
                        <div className="c-media-img "><img
                            src="http://abc.oa.com/tools/tcloud-diagram/img/items/icon-16.svg" alt=""/></div>
                        <button className="d3-add-btn">添加小号图标</button>
                    </div>
                </li>
                <li>
                    <div className="simple area-size" id="Icon" draggable="true">
                        <div className="c-media-img "><img
                            src="http://abc.oa.com/tools/tcloud-diagram/img/items/icon.svg" alt=""
                            style={{width: '32px', height: '32px'}}/></div>
                        <button className="d3-add-btn">添加大号图标</button>
                    </div>
                </li>
                <li className="ul-title">终端卡片</li>
                <li>
                    <div className="simple " id="RectEndPoint" draggable="true" text="客户">
                        <div className="c-media-img"><img
                            src="http://abc.oa.com/tools/tcloud-diagram/img/items/rect_user.svg" alt=""/></div>
                        <button className="d3-add-btn">添加</button>
                    </div>
                </li>
                <li>
                    <div className="simple" id="RectEndPoint" draggable="true" text="网关">
                        <div className="c-media-img"><img
                            src="http://abc.oa.com/tools/tcloud-diagram/img/items/rect_gateway.svg" alt=""/></div>
                        <button className="d3-add-btn">添加</button>
                    </div>
                </li>
                <li>
                    <div className="simple" id="RectEndPoint" draggable="true" text="防火墙">
                        <div className="c-media-img"><img
                            src="http://abc.oa.com/tools/tcloud-diagram/img/items/rect_firewall.svg" alt=""/></div>
                        <button className="d3-add-btn">添加</button>
                    </div>
                </li>
                <li>
                    <div className="simple" id="RectEndPoint" draggable="true" text="手游">
                        <div className="c-media-img "><img
                            src="http://abc.oa.com/tools/tcloud-diagram/img/items/rect_game.svg" alt=""/></div>
                        <button className="d3-add-btn">添加</button>
                    </div>
                </li>
                <li>
                    <div className="simple" id="RectEndPoint" draggable="true" text="页游">
                        <div className="c-media-img "><img
                            src="http://abc.oa.com/tools/tcloud-diagram/img/items/rect_pcgame.svg" alt=""/></div>
                        <button className="d3-add-btn">添加</button>
                    </div>
                </li>
                <li>
                    <div className="simple" id="RectEndPoint" draggable="true" text="端游">
                        <div className="c-media-img"><img
                            src="http://abc.oa.com/tools/tcloud-diagram/img/items/rect_pc.svg" alt=""/></div>
                        <button className="d3-add-btn">添加</button>
                    </div>
                </li>

            </ul>
        </div>
    </>
}

export default ToolTemplate;

