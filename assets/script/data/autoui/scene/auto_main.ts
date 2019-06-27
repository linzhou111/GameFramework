/** This is an automatically generated class by Auto-UI. Please do not modify it. **/
const {
	ccclass,
	property
} = cc._decorator;

@ccclass
export default class auto_main extends cc.Component {
	Canvas: cc.Node;
	background: cc.Node;
	lbl_title: cc.Node;
	btn_notice: cc.Node;
	lbl_notice: cc.Node;
	public static URL:string = "db://assets/scene/main.fire"

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
		let parent = this.node.getParent();
		this.Canvas = parent.getChildByName("Canvas");
		this.background = this.Canvas.getChildByName("background");
		this.lbl_title = this.Canvas.getChildByName("lbl_title");
		this.btn_notice = this.Canvas.getChildByName("btn_notice");
		this.lbl_notice = this.btn_notice.getChildByName("lbl_notice");

	}
    start() {}

    // update (dt) {}
}

