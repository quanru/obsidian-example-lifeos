const { Area, Date } = customJS;
const condition = Date.parse(dv.current().file.name);
const scope = ['## 要事维度', '## 角色维度'];

Area.filter(condition, scope).then((areaList) =>
  areaList.map((area, index) =>
    dv.paragraph(
      `${index + 1}. [[${area}|${area.match(/\/(.*)\//)[1]}]]`
    )
  )
);
