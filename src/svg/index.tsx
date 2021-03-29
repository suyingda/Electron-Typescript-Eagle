import * as React from 'react';
import './index.less';
import HeadTemplate from './head/index'
import ToolTemplate from './tool/index'
import Visualization from './vis/index'

function SvgTemplate() {
    return <div>
        <HeadTemplate/>
        <ToolTemplate/>
        <Visualization/>
        svg
    </div>
}

export default SvgTemplate;