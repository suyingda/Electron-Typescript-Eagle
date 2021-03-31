import * as React from 'react';
import './index.less';
import './s-index.less';
import HeadTemplate from './head/index'
import ToolTemplate from './tool/index'
import Visualization from './vis/index'
import ContentTemplate from './content/index'
import {css, cx} from '@emotion/css'

function SvgTemplate() {
    return <div>
        <HeadTemplate/>
        <br/>
        <section>
            <ToolTemplate/>

            <div className="c-msg c-msg-success">
                <div
                    className={cx("c-msg-info", css`padding: 11px 20px;`)}>指引：1.双击卡片进入编辑态，点击右侧icon库替换icon;&nbsp;&nbsp;&nbsp;&nbsp;2.连接卡片圆点，可以连线;
                    &nbsp;&nbsp;&nbsp;&nbsp;3.卡片右下角可以放大缩小元素;&nbsp;&nbsp;&nbsp;&nbsp;</div>
            </div>
            <ContentTemplate/>
            <Visualization/>
        </section>

        svg
    </div>
}

export default SvgTemplate;