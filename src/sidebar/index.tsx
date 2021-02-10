import * as React from "react";
import {Collapse, Popover} from "antd";
import LineModule from "../module/line";
import {BarsOutlined, SwapOutlined, PlusOutlined, SplitCellsOutlined, CopyOutlined} from '@ant-design/icons';

const {Panel} = Collapse;
import LineModule from "./module/line";
import {useState} from "react";
import ModalTemplate from "../modal";

const content = (
    <div>
        <p>
            <Popover placement="rightTop" title={"6666"} content={() => 666} trigger="hover">
                <div>66666</div>
            </Popover>
        </p>
        <p>
            <Popover placement="rightTop" title={"6666"} content={() => 666} trigger="hover">
                <div>66666</div>
            </Popover>
        </p>
    </div>
);

function SideBar() {
    const [modalStatus, setModalStatus] = useState<any>({
        visible: false
    });
    return <>
        <div className={'home-container__left-header'}>
            <div className={'home-container__left-header__container'}>
                <div className={'home-container__left-header__left'}>
                      <span>
                        <Popover placement="rightTop" title={"6666"} content={content} trigger="click">
                            <BarsOutlined/>
                        </Popover>
                    </span>
                </div>
                <div className={'home-container__left-header__right'}>
                    <span onClick={() => {
                        setModalStatus({
                            visible: true
                        })
                    }}><SwapOutlined/></span>
                    <span onClick={() => {

                        // mkdir()
                    }}>
                        <PlusOutlined/>
                    </span>
                    <span><SplitCellsOutlined/></span>
                </div>
            </div>

            <div>Eagle-directory<CopyOutlined/></div>
        </div>
        <div className={'home-container__left-middle'}>
            <LineModule Icon={<CopyOutlined/>} title={'All'} value={100}/>
            <LineModule Icon={<CopyOutlined/>} title={'Uncategorized'} value={100}/>
            <LineModule Icon={<CopyOutlined/>} title={'UntaggedUntagged'} value={100}/>
            <LineModule Icon={<CopyOutlined/>} title={'Random'} value={100}/>
            <LineModule Icon={<CopyOutlined/>} title={'All Tags'} value={100}/>
            <LineModule Icon={<CopyOutlined/>} title={'Trash'} value={100}/>
            <Collapse defaultActiveKey={['1', '2']}>
                <Panel header="Smarts Folders" key="1">
                    <div><CopyOutlined/><span>All</span></div>
                    <div><CopyOutlined/><span>Uncategorized</span></div>
                    <div><CopyOutlined/><span>Untagged</span></div>
                    <div><CopyOutlined/><span>Random</span></div>
                    <div><CopyOutlined/><span>All Tags</span></div>
                    <div><CopyOutlined/><span>Trash</span></div>
                </Panel>
                <Panel header="Folders" key="2">
                    <p>23</p>
                </Panel>
            </Collapse>
        </div>
        <div className={'home-container__left-bottom'}>
            6666
        </div>
        {
            modalStatus.visible && <ModalTemplate
                method={setModalStatus}
            />
        }
    </>
}

export default SideBar;
