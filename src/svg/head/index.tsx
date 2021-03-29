
import Logo from './../image/logo.png'
function SvgTemplate() {
    return <div>
        <div className="toputool-hd">
            <img src={Logo}  className="logo" />
            <span className="qa">
                <a className="wiki"
                   href="http://km.oa.com/group/15849/articles/show/327096"
                   target="_Blank">
                    工具教程
                </a>
                问题反馈请联系企业微信:wildemou(牟贵定)
            </span>
        </div>
    </div>
}

export default SvgTemplate;