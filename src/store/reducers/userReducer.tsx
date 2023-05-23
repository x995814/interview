import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  // 数据源
  initialState: {
    antvArr: {
      id: "A-1",
      title: "A-1",
      key: "00",
      children: [
        {
          id: "B-1",
          title: "B-1",
          key: "0",
          children: [
            {
              id: "C-0-1",
              title: "C-0-1",
              key: "0-0",
              children: [],
            },
            {
              id: "C-0-2",
              title: "C-0-2",
              key: "0-1",
              children: [],
            },
          ],
        },
        {
          id: "B-2",
          title: "B-2",
          key: "1",
          children: [
            {
              id: "C-1-1",
              title: "C-1-1",
              key: "1-0",
              children: [],
            },
            {
              id: "C-1-2",
              title: "C-1-2",
              key: "1-1",
              children: [],
            },
          ],
        },
      ],
    }, //图表数据
  },
  reducers: {
    // 增加数据
    ADD_ANTV(state: any, action) {
      let index = action.payload[0];
      if (index == "00") {
        //父节点
        let obj = {
          id: `B-${
            state.antvArr.children.length
              ? state.antvArr.children[
                  state.antvArr.children.length - 1
                ].id.split("-")[1] *
                  1 +
                1
              : 1
          }`,
          title: `B-${
            state.antvArr.children.length
              ? state.antvArr.children[
                  state.antvArr.children.length - 1
                ].id.split("-")[1] *
                  1 +
                1
              : 1
          }`,
          key: `${
            state.antvArr.children.length
              ? state.antvArr.children[
                  state.antvArr.children.length - 1
                ].id.split("-")[1] * 1
              : 1
          }`,
          children: [],
        };
        state.antvArr.children.push(obj);
      } else {
        // 循环遍历
        let temp = compareAdd(state.antvArr.children, index);
        state.antvArr.children = temp;
      }
    },
    // 删除数据
    DELETE_ANTV(state: any, action) {
      let index = action.payload[0];
      let temp = compareDelete(state.antvArr.children, index);
      state.antvArr.children = temp;
    },
  },
});
// 递归循环比较增加
function compareAdd(params: any, index: string) {
  for (let i = 0; i < params.length; i++) {
    if (params[i].key == index) {
      let obj = {
        id: `C-${i}-${
          params[i].children.length
            ? params[i].children[params[i].children.length - 1].id.split(
                "-"
              )[2] *
                1 +
              1
            : 1
        }`,
        title: `C-${i}-${
          params[i].children.length
            ? params[i].children[params[i].children.length - 1].id.split(
                "-"
              )[2] *
                1 +
              1
            : 1
        }`,
        key: `${index}-${
          params[i].children.length
            ? params[i].children[params[i].children.length - 1].id.split(
                "-"
              )[2] * 1
            : 0
        }`,
        children: [],
      };
      params[i].children.push(obj);
    } else {
      if (params[i].children && params[i].children.length) {
        compareAdd(params[i].children, index);
      }
    }
  }
  return params;
}
// 递归循环比较删除
function compareDelete(params: any, index: string) {
  for (let i = 0; i < params.length; i++) {
    if (params[i].key == index) {
      params.splice(i, 1);
    } else {
      if (params[i].children && params[i].children.length) {
        compareDelete(params[i].children, index);
      }
    }
  }
  return params;
}

export const { ADD_ANTV, DELETE_ANTV } = userSlice.actions;
export const userReducer = userSlice.reducer;
