import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '생활알람 창업',
      startedAt: '2020-11',
      endedAt: '2021-10',
      where: '4인 창업',
      descriptions: [
        {
          content: 'IOS Native 앱 개발(App Store 배포 후 철수)',
          descriptions: [
            {
              content:
                '파편화된 정보를 수집하여 음성 알람으로 제공하고자 하는 서비스를 기획하여 기획, 디자인, 개발에 참여',
              descriptions: [
                { content: '코로나 확진자수, 대중교통 버스 및 지하철 현재 위치 정보' },
              ],
            },
            {
              content:
                '앱 백그라운드 상태에서 백앤드 서버에서 데이터를 수신하여 클라이언트에서 TTS 음성알람 생성 및 재생, Local Push Notification 기능 구현',
            },
          ],
        },
      ],
    },
  ],
};

export default project;
