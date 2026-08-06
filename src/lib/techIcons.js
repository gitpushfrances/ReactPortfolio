import {
  SiAngular, SiReact, SiHtml5, SiCss, SiBootstrap, SiFigma,
  SiLaravel, SiMysql, SiFirebase, SiAndroid, SiFlutter, SiGithub,
  SiPostman, SiJira, SiArduino, SiPhp, SiTailwindcss, SiSqlite,
  SiElectron, SiLivewire
} from 'react-icons/si';
import { Code2 } from 'lucide-react';

const iconMap = {
  'angular': SiAngular,
  'react': SiReact,
  'html5': SiHtml5,
  'css3': SiCss,
  'bootstrap': SiBootstrap,
  'figma': SiFigma,
  'laravel': SiLaravel,
  'laravel 10': SiLaravel,
  'mysql': SiMysql,
  'firebase': SiFirebase,
  'android (java)': SiAndroid,
  'flutter': SiFlutter,
  'git & github': SiGithub,
  'github': SiGithub,
  'postman': SiPostman,
  'jira (agile/scrum)': SiJira,
  'jira': SiJira,
  'arduino': SiArduino,
  'arduino/iot': SiArduino,
  'php': SiPhp,
  'tailwind css': SiTailwindcss,
  'sqlite': SiSqlite,
  'electron': SiElectron,
  'livewire 3': SiLivewire,
  'livewire': SiLivewire
};

export const getTechIcon = (techName) => {
  const key = techName.toLowerCase().trim();
  return iconMap[key] || Code2;
};
