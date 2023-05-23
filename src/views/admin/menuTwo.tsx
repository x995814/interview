import {useSelector} from 'react-redux'
import MyChart from "../../component/MyChart";

function MenuTwo() {
  // 获取图表数据
  let data = useSelector((state:any)=>state.user.antvArr)
  return (
    <div>
      {/* 图表组件 */}
      <MyChart data={JSON.parse(JSON.stringify(data))}></MyChart>
    </div>
  );
}

export default MenuTwo;
