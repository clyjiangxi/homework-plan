
import React from 'react';
import './Plan.css';

const Plan = () => {
  return (
    <div className="container mt-5">
      <header className="text-center mb-5">
        <h1>初中生暑假计划</h1>
        <p className="lead">一份兼顾学习、运动和出行的完美暑假指南</p>
      </header>

      <div className="card mb-5">
        <div className="card-header">
          <h3>周计划总览</h3>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered text-center">
              <thead className="table-light">
                <tr>
                  <th>时间</th>
                  <th>星期一</th>
                  <th>星期二</th>
                  <th>星期三</th>
                  <th>星期四</th>
                  <th>星期五</th>
                  <th className="table-success">星期六</th>
                  <th className="table-success">星期日</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><b>上午 (8:30-12:00)</b></td>
                  <td><b>数学 & 英语</b><br/>(主科搭配)</td>
                  <td><b>语文 & 生物</b><br/>(文理搭配)</td>
                  <td><b>数学 & 历史</b><br/>(主科+文科)</td>
                  <td><b>英语 & 地理</b><br/>(主科+文科)</td>
                  <td><b>语文 & 政治</b><br/>(文科组合)</td>
                  <td rowSpan="5" className="align-middle bg-light"><b>家庭/朋友出行日</b><br/><small>(全天活动，劳逸结合)</small></td>
                  <td className="align-middle"><b>兴趣发展/休息</b></td>
                </tr>
                <tr>
                  <td><b>中午 (12:00-14:00)</b></td>
                  <td colSpan="5">午餐 &amp; 午休</td>
                  <td className="align-middle">午餐 &amp; 自由安排</td>
                </tr>
                <tr>
                  <td><b>下午 (14:00-18:00)</b></td>
                  <td><b>继续完成作业</b><br/>(查漏补缺)</td>
                  <td><b>继续完成作业</b><br/>(查漏补缺)</td>
                  <td><b>继续完成作业</b><br/>(查漏补缺)</td>
                  <td><b>继续完成作业</b><br/>(查漏补缺)</td>
                  <td><b>周总结</b><br/>(检查本周作业完成情况)</td>
                  <td className="align-middle">家庭大扫除/看电影</td>
                </tr>
                <tr>
                  <td><b>晚餐 (18:00-19:00)</b></td>
                  <td colSpan="5">晚餐 &amp; 家庭时光</td>
                  <td className="align-middle">晚餐 &amp; 休息</td>
                </tr>
                <tr>
                  <td><b>晚上 (19:30-21:00)</b></td>
                  <td><b>运动时间</b><br/>(篮球/跳绳)</td>
                  <td><b>运动时间</b><br/>(游泳/跑步)</td>
                  <td><b>运动时间</b><br/>(羽毛球)</td>
                  <td><b>运动时间</b><br/>(骑行)</td>
                  <td><b>运动时间</b><br/>(跑步/跳绳)</td>
                  <td className="align-middle">制定下周计划</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="card mb-5">
        <div className="card-header bg-warning text-dark">
            <h3>作业计划说明</h3>
        </div>
        <div className="card-body">
            <p>考虑到初二学业较重，我们将上午的学习时间进行了细分，旨在提高效率：</p>
            <ul>
                <li><b>文理搭配：</b> 将逻辑思维要求高的理科（如数学）与需要记忆和理解的文科（如历史、地理）交叉安排，让大脑得到调剂。</li>
                <li><b>主科优先：</b> 保证了核心科目（语文、数学、英语）有足够、分散的练习时间。</li>
                <li><b>高效学习建议：</b>
                    <ul>
                        <li>使用<b>番茄工作法</b>：学习25-30分钟，休息5分钟，提高专注度。</li>
                        <li><b>先难后易：</b>精力最充沛的时候，先完成比较有挑战性的作业。</li>
                        <li><b>每日回顾：</b>完成作业后，花10分钟回顾当天学习的要点。</li>
                    </ul>
                </li>
            </ul>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-header bg-primary text-white">
              <h3>运动计划 (每周3-5次)</h3>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item"><b>周一 (球类):</b> 篮球、足球、乒乓球</li>
                <li className="list-group-item"><b>周二 (耐力):</b> 游泳、慢跑</li>
                <li className="list-group-item"><b>周三 (技巧):</b> 羽毛球、网球</li>
                <li className="list-group-item"><b>周四 (户外):</b> 骑行探索公园</li>
                <li className="list-group-item"><b>周五 (体能):</b> 跑步、跳绳、平板支撑</li>
              </ul>
              <p className="mt-3"><b>安全提示:</b> 运动安排在凉爽的夜晚进行。请确保在晚餐后有至少30分钟的休息时间再开始运动。运动前热身，运动后拉伸，并注意补充水分。</p>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-header bg-info text-white">
              <h3>出行建议 (每周1次)</h3>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item"><b>文化之旅:</b> 参观博物馆、科技馆、美术馆。</li>
                <li className="list-group-item"><b>自然之旅:</b> 去公园或郊野徒步、野餐。</li>
                <li className="list-group-item"><b>城市探索:</b> 发现一个陌生的街区，了解你所在的城市。</li>
                <li className="list-group-item"><b>社会实践:</b> 参加社区志愿者活动，或和家人去购物。</li>
              </ul>
              <p className="mt-3"><b>出行准备:</b> 提前规划路线，注意天气，带好必需品。</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-5 mb-4 text-center text-muted">
        <h4>给你的小建议</h4>
        <ul className="list-unstyled">
          <li>灵活调整，计划是为你服务的。</li>
          <li>控制电子产品使用时间，保护视力。</li>
          <li>坚持是关键，每天进步一点点。</li>
          <li>用照片或日记记录美好的暑假生活。</li>
        </ul>
        <p>&copy; 2025 暑假计划. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Plan;
