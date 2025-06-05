import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '안녕하세요, 다양한 플랫폼에서 사용자 경험을 설계하고 구현해온 프론트엔드 개발자 서수빈입니다. iOS Native와 React Native 기반의 모바일 앱 개발 경험을 바탕으로, React를 활용한 웹 서비스와 관리자 페이지 개발까지 경험 범위를 확장해 왔습니다. 새로운 기술과 플랫폼을 빠르게 습득해온 강점을 살려, 사용자에게 일관된 경험을 제공하는 프론트엔드 개발자로 성장해 나가고 있습니다.',
    '전기차 충전 플랫폼의 초기 개발자로 참여해 React Native 기반 MVP를 신속히 출시하고, 이후 PNC(Plug and Charge) 기능 등 고도화된 기능을 iOS 네이티브로 안정적으로 전환하며 전반적인 앱 개발을 주도했습니다.',
    '이후 새로운 회사에 합류해 팀 단위의 협업 환경에서 GitHub 기반 브랜치 전략과 CI/CD 프로세스를 실무에 적용하며 체계적인 개발 방식에 익숙해졌습니다. 또한 React를 활용한 관리자 페이지 및 웹 서비스 개발을 통해, 모바일 중심의 경험을 자연스럽게 웹 프론트엔드 영역으로 확장했습니다.',
    '모바일과 웹 모두를 이해하는 개발자로서, 다양한 사용자 접점에서 일관된 경험을 설계하고 구현하는 데 강점을 가지고 있으며, 주어진 문제에 책임감을 갖고 완성도 있게 마무리하는 개발자가 되고자 합니다.',
  ],
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
