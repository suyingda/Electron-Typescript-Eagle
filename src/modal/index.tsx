import * as React from 'react'
import {Input, Modal, Tabs} from "antd";

const {TabPane} = Tabs;
import './index.less';

function ModalTemplate(props: any) {
    const {method} = props;
    return <Modal
        onCancel={() => {
            method({})
        }}
        title={<>
            <Tabs defaultActiveKey="1">
                <TabPane tab={<span>folders(9)</span>} key="1">
                    <Input.Search allowClear style={{width: '40%'}}/>
                    <div>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </div>
                </TabPane>
                <TabPane tab="Tags" key="2">
                    Content of Tab Pane 2
                </TabPane>
                <TabPane tab="Smart Folder" key="3">
                    Content of Tab Pane 3
                </TabPane>
            </Tabs>
        </>}
        footer={[]}
        visible
    >


    </Modal>
}

export default ModalTemplate;
