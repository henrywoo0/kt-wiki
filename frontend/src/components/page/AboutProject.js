import { Viewer } from "@toast-ui/react-editor";
import Markdown from "../markdown/Markdown";
import "./AboutProject.css";

function AboutProject() {
  const aboutProjectText =
    "`경태위키`는 경태의 고등학교 3년동안의 추억을 담아 선물하는 `위키 서비스`입니다. 읽어보다 보면 어질어질할 수도 있지만, `경태`라는 친구와 내적친밀감을 형성할 수 있을 겁니다.";
  const aboutDeveloperText =
    "`경태위키`는 [whitebear](https://github.com/whitebear05)에 의해 개발되었으며, 백엔드는 `NestJS`로, 프론트엔드는 `React`로 개발되었습니다. 이 위키 서비스는 타 서비스처럼 개발자 뿐만이 아닌 기여자분들과 함께 성장하는 위키입니다.";
  return (
    <div className="about">
      <h3>이 프로젝트는?</h3>
      <Viewer initialValue={aboutProjectText} />
      <h3>이 프로젝트의 개발자는?</h3>
      <Viewer initialValue={aboutDeveloperText} />
    </div>
  );
}

export default AboutProject;
