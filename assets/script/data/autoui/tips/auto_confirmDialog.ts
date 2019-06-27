/** This is an automatically generated class by Auto-UI. Please do not modify it. **/
const {
	ccclass,
	property
} = cc._decorator;

@ccclass
export default class auto_confirmDialog extends cc.Component {
	confirmDialog: cc.Node;
	background: cc.Node;
	lbl_title: cc.Node;
	lbl_content: cc.Node;
	btn_cancel: cc.Node;
	btn_certain: cc.Node;
	public static URL:string = "db://assets/resources/prefab/tips/confirmDialog.prefab"

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
		this.confirmDialog = this.node
		this.background = this.confirmDialog.getChildByName("background");
		this.lbl_title = this.confirmDialog.getChildByName("lbl_title");
		this.lbl_content = this.confirmDialog.getChildByName("lbl_content");
		this.btn_cancel = this.confirmDialog.getChildByName("btn_cancel");
		this.btn_certain = this.confirmDialog.getChildByName("btn_certain");

	}
    start() {}

    // update (dt) {}
}

