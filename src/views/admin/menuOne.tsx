import { useSelector, useDispatch } from "react-redux";
import { DownOutlined } from "@ant-design/icons";
import { Tree, Button, message } from "antd";
import type { DataNode, TreeProps } from "antd/es/tree";
import { ADD_ANTV, DELETE_ANTV } from "../../store/reducers/userReducer";
import "../../css/menuOne.css";
import { useState } from "react";

function MenuOne() {
  // 弹框
  const [messageApi, contextHolder] = message.useMessage();
  // 触发redux
  let dispatch = useDispatch();
  // 获取redux中的数据
  let data = useSelector((state: any) => state.user.antvArr);
  // 树形结构数据
  const treeData: DataNode[] = [data];
  let [key, setKey] = useState<any>([]);
  // 点击树节点触发
  const onSelect: TreeProps["onSelect"] = (selectedKeys) => {
    setKey([...selectedKeys]);
  };
  // 增加节点
  let addInfo = () => {
    if (key[0].split('-').length >= 2) {
      messageApi.open({
        type: "error",
        content: "末节点无法增加",
      });
    } else {
      if (!key.length) {
        messageApi.open({
          type: "error",
          content: "请选择节点",
        });
      } else {
        dispatch(ADD_ANTV(key));
      }
    }
  };
  // 删除节点
  let deleteInfo = () => {
    if (key == "00") {
      messageApi.open({
        type: "error",
        content: "根节点无法删除",
      });
    } else {
      if (!key.length) {
        messageApi.open({
          type: "error",
          content: "请选择节点",
        });
      } else {
        dispatch(DELETE_ANTV(key));
      }
    }
  };
  return (
    <div className="one-box">
      {/* 显示弹框信息 */}
      {contextHolder}
      {/* 树形结构 */}
      <Tree
        showLine
        switcherIcon={<DownOutlined />}
        defaultExpandedKeys={["0"]}
        onSelect={onSelect}
        treeData={treeData}
      />
      {/* 按钮区域 */}
      <div className="one-btn">
        <Button type="primary" onClick={addInfo}>
          增加子节点
        </Button>
        <Button type="primary" danger onClick={deleteInfo}>
          删除节点
        </Button>
      </div>
    </div>
  );
}

export default MenuOne;
