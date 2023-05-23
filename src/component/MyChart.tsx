import React, { useEffect } from "react";
import G6 from "@antv/g6";

const MyChart: React.FC<any> = (props) => {
  let { data } = props;
  useEffect(() => {
    //基于准备好的dom，初始化antv实例
    const container = document.getElementById("container");
    // 宽高
    const width = container?.scrollWidth || 800;
    const height = container?.scrollHeight || 500;
    // 定义图表
    let graph = new G6.TreeGraph({
      container: "container",
      width,
      height,
      fitView:true,
      modes: {
        default: [
          {
            type: "collapse-expand",
            onChange: function onChange(item, collapsed) {
              const data = item?.getModel();
              data!.collapsed = collapsed;
              return true;
            },
          },
          "drag-canvas",
          "zoom-canvas",
        ],
      },
      defaultNode: {
        size: 26,
        anchorPoints: [
          [0, 0.5],
          [1, 0.5],
        ],
      },
      defaultEdge: {
        type: "cubic-horizontal",
      },
      layout: {
        type: "compactBox",
        direction: "LR",
        getId: function getId(d: any) {
          return d.id;
        },
        getHeight: function getHeight() {
          return 16;
        },
        getWidth: function getWidth() {
          return 16;
        },
        getVGap: function getVGap() {
          return 10;
        },
        getHGap: function getHGap() {
          return 100;
        },
      },
    });
    graph.node(function (node: any) {
      return {
        label: node.id,
        labelCfg: {
          offset: 10,
          position:
            node.children && node.children.length > 0 ? "left" : "right",
        },
      };
    });
    // 绘制图表
    graph.data(data);
    graph.render();
    // 自适应
    graph.fitView();
    if (typeof window !== "undefined")
      window.onresize = () => {
        if (!graph || graph.get("destroyed")) return;
        if (!container || !container.scrollWidth || !container.scrollHeight)
          return;
        graph.changeSize(container.scrollWidth, container.scrollHeight);
      };
  }, [props]);
  return (
    <div
      id="container"
      style={{ width: "100%", height: "100%" }}
    ></div>
  );
};

export default MyChart;
