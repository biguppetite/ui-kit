import { useEffect } from "react";

export default function (
  theme: { [key: string]: string },
  classData?: { [key: string]: string }
) {
  useEffect(() => {
    var r: any = document.querySelector(":root");
    if (r.style) {
      for (let i in theme) {
        r.style.setProperty(i, theme[i]);
      }
    }

    if (classData)
      for (let i in classData) {
        const el = document.getElementsByClassName(i);
        if (el)
          for (let j = 0; j < el.length; j++)
            el[j].classList?.add(classData[i]);
      }
  }, []);
}
