import * as React from 'react';

import './index.less';

function LineModule(props: any) {
    const {Icon, title, value} = props || {};
    return <div className={'line-module'}>
        <div>
            {Icon}<span>{title}</span>
        </div>
        <div>
            {value || 0}
        </div>
    </div>
}

export default LineModule;
