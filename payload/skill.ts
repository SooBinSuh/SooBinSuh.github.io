import { ISkill } from '../component/skill/ISkill';

const programmingLanguages: ISkill.Skill = {
  category: 'Web & Mobile Cross-Platform',
  items: [
    {
      title: 'ReactNative',
    },
    {
      title: 'React',
    },
    {
      title: 'Typescript',
    },
    {
      title: 'Vite',
    },
    {
      title: 'Next.js',
    },
  ],
};

const kernelDevelopment: ISkill.Skill = {
  category: 'iOS',
  items: [
    {
      title: 'SwiftUI',
    },
    {
      title: 'Swift',
    },
  ],
};

const virtualization: ISkill.Skill = {
  category: '협업 Tool',
  items: [
    {
      title: 'Git',
    },
    {
      title: 'Jira',
    },
    {
      title: 'Figma',
    },
    {
      title: 'Slack',
    },
    {
      title: 'Notion',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [programmingLanguages, kernelDevelopment, virtualization],
};

export default skill;
