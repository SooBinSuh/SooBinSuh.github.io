import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '룩코',
      positions: [
        {
          title: '프런트엔드팀-앱개발',
          startedAt: '2024-03',
          endedAt: '2024-10',
          descriptions: [
            '자사 앱 서비스 Secondsold 및 LookoAi 서비스의 다수 신규 화면 개발 및 기능 확장에 기여',

            '자사 국내 모바일 앱 리브랜딩 작업 주도 (디자인 개편에 따른 주요 컴포넌트 전면 수정)',

            'React Hook Form을 활용한 상품 필터 기능 개발',

            'Firebase Remote Config 기반의 AB 테스트 기능 구현으로 앱 사용성 개선',

            'Reanimated의 Worklet을 적용해 주요 화면의 애니메이션 성능 최적화',

            'React Native 내 WebView를 활용한 커뮤니티 기능 설계 및 구현',
          ],
          skillKeywords: ['React Native', 'tanStack Query', 'react hook form', 'Reanimated'],
        },
        {
          title: '프런트엔드팀-웹개발',
          startedAt: '2024-03',
          endedAt: '2024-10',
          descriptions: [
            '자사 B2B 웹 솔루션 LookoAi 서비스 및 Secondsold 백오피스 웹 서비스 신규 기능 개발 및 운영 유지보수',
            '웹 서비스의 다수 신규 화면 개발 및 기능 확장에 기여',
          ],
          skillKeywords: ['React', 'vitejs', 'tanStack Query', 'react hook form'],
        },
      ],
    },
    {
      title: '플러그링크',
      positions: [
        {
          title: 'iOS 네이티브 앱 개발',
          startedAt: '2022-09',
          endedAt: '2023-08',
          descriptions: [
            'React Native에서 네이티브 SwiftUI로 전환 개발 및 배포',
            'BLE(Bluetooth Low Energy), iBeacon을 이용한 원격 충전 기능 개발',
            '전기차 충전기 펌웨어 업데이트 변경사항 대응 (2주 1회)',
            '푸시 알림 Deeplink를 통한 Nested 네비게이션 개발',
            '23년 1월 서비스 전체 UI/UX 리브랜딩 진행',
          ],
          skillKeywords: ['SwiftUI', 'Swift', 'MVVM'],
        },
        {
          title: 'React Native 앱 개발',
          startedAt: '2021-11',
          endedAt: '2022-08',
          descriptions: [
            '자사 전기차 서비스 초기 API 검토 및 협력사 수정 요청',
            'Firebase Crashlytics 사용하여 Crash Rate 5% 이하 상시 유지',
            'CodePush를 통한 실시간 기능 배포',
          ],
          skillKeywords: ['ReactNative', 'Redux', 'CodePush', 'Typescript'],
        },
      ],
    },
  ],
};

export default experience;
