export type ProjectCategory = 'main' | 'experiment';

export interface Project {
  slug: string;          // унікальний, не змінюється
  name: string;
  description: string;
  technologies: string[];
  code_url: string;
  live_url?: string;
  image: string;
  category: ProjectCategory;
  details?: Details;
}

interface Details {
  year: number;
  description: string;
  motivation?: string;
  takeaways?: string;
  status?: status;
  downloadLink?: string;
}

export type status = 'finished' | 'inprogress' | 'archived';

export const projectsData: Project[] = [
  {
    slug: 'rerule34',
    name: 're:rule34',
    description: 'Кастомний веб-клієнт для імідж-борда: пошук за тегами, фільтри й власний бекенд на Express.',
    technologies: ['React', 'Typescript', 'Express'],
    code_url: 'https://github.com/SitewrkU/rerule34',
    image: 'images/projects/rerule34.png',
    category: 'main',
    details: {
      year: 2026,
      description: 'Повністю open-source клієнт для Rule34. Не комерційний продукт, а спроба переосмислити існуючий сервіс - зробити його сучаснішим, зручнішим і просто приємнішим у використанні.',
      motivation: 'Гуляючи просторами інтернету, я випадково дізнався, що сайт rule34.xxx має публічне API. Я давно помітив, що інтерфейс сайту досить незручний і застарілий, а пошук якісного контенту ускладнюється через нетолерантність пошуку до тегів. Саме ці проблеми й має вирішити цей проєкт.',
      takeaways: 'Значно покращив свої навички роботи з серверною частиною, а також роботою з чужим API. Також отримав кращі знання в TypeScript',
      status: 'inprogress',
      downloadLink: 'https://github.com/SitewrkU/rerule34/releases',
    }
  },
  {
    slug: 'orebreaker-reborn',
    name: 'OreBreaker-reborn',
    description: 'Просунутий клікер з системою добування руд.',
    technologies: ['React', 'Typescript', 'Zustand'],
    code_url: 'https://github.com/SitewrkU/OreBreaker-reborn',
    image: 'images/projects/orebreaker-reborn.png',
    category: 'main',
  },
  {
    slug: 'portfolio',
    name: 'Portfolio',
    description: 'Минула версія мого портфоліо',
    technologies: ['React', 'JavaScript'],
    code_url: 'https://github.com/SitewrkU/portfolio',
    live_url: 'https://sitewrku.github.io/portfolio/',
    image: 'images/projects/portfolio.png',
    category: 'experiment',
  },
  {
    slug: 'secretshub',
    name: 'Secrets Hub',
    description: 'Фул-стак соцмережа щоб ділитися секретами.',
    technologies: ['React', 'Express', 'MongoDB'],
    code_url: 'https://github.com/SitewrkU/SecretsHub',
    image: 'images/projects/secretshub.png',
    category: 'main',
  },
  {
    slug: 'reallifeweb',
    name: 'RealLife Web',
    description: 'Жартівливий проєкт який демонструє наше життя як гру.',
    technologies: ['React', 'JavaScript', 'mantine'],
    code_url: 'https://github.com/SitewrkU/RealLifeWeb',
    image: 'images/projects/reallifeweb.png',
    category: 'main',
  },
  {
    slug: 'orebreaker',
    name: 'Ore Breaker',
    description: 'Класична версія клікера з добуванням руд (базовий варіант)',
    technologies: ['HTML', 'CSS', 'JS'],
    code_url: 'https://github.com/SitewrkU/OreBreaker',
    live_url: 'https://sitewrku.github.io/OreBreaker/',
    image: 'images/projects/orebreaker.png',
    category: 'main'
  },
  {
    slug: 'zynetic',
    name: 'Zynetic CLI',
    description: 'Уявний інструмент для автоматизації створення проєктів, налаштування середовища та інтеграції.',
    technologies: ['HTML', 'CSS'],
    code_url: 'https://github.com/SitewrkU/Zynetic',
    live_url: 'https://sitewrku.github.io/Zynetic/',
    image: 'images/projects/zynetic.png',
    category: 'main',
  },
  {
    slug: 'mayo',
    name: 'Mayo',
    description: 'Дивний маленький проєкт про майонез, створений суто розваги заради та для експериментів із таким дизайном.',
    technologies: ['HTML', 'CSS', 'JS'],
    code_url: 'https://github.com/IvanWuser/Mayo',
    live_url: 'https://ivanwuser.github.io/Mayo/',
    image: 'images/projects/mayo.png',
    category: 'experiment',
    details: {
      year: 2025,
      description: 'Жартівливий проєкт з видуманою історією про аномалію \'Майонейс\', та записник пропавшого',
      motivation: 'На момент створення проєкту в TikTok були популярні відео, де описувалися вигадані аномалії та правила поводження з ними. Я підхопив цю ідею й вирішив її реалізувати.',
      takeaways: 'Трохи покращив свої вміння дизайнити сайти, і взагалі на той момент це був перший дизайн такого типу.',
      status: 'finished',
    }
  },
  {
    slug: 'fecebak',
    name: 'Fecebak',
    description: 'Гумористична пародія на Facebook, з особистою сторінкою Петровича.',
    technologies: ['React', 'CSS', 'JavaScript'],
    code_url: 'https://github.com/SitewrkU/ReactPetrovich',
    live_url: 'https://sitewrku.github.io/ReactPetrovich/',
    image: 'images/projects/fecebak.png',
    category: 'main',
  },
  {
    slug: 'fancydark',
    name: 'FancyDark',
    description: 'Демонстраційний веб-сайт видуманої фракції.',
    technologies: ['HTML', 'CSS'],
    code_url: 'https://github.com/SitewrkU/ReFancyDark',
    live_url: 'https://sitewrku.github.io/ReFancyDark',
    image: 'images/projects/fancydark.png',
    category: 'main',
  },
  {
    slug: 'petrovich',
    name: 'Petrovich',
    description: 'Оригінальний та архівний сайт Петровича. (Fecebak)',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    code_url: 'https://github.com/SitewrkU/PetrovichOriginal',
    live_url: 'https://sitewrku.github.io/PetrovichOriginal/',
    image: 'images/projects/petrovich.png',
    category: 'main',
    details: {
      year: 2023,
      description: 'Один із перших і настайріших моїх проєктів, які збереглися до сьогодні. Якась дуже галіма пародія на facebook. P.S. Дизайн та код, через старість проєкту, жахливі, але добавив для історії',
      motivation: 'Спонтанна та рандомна ідея для реалізації такого. Я тільки розпочав знайомитися з веб-розробкою',
      takeaways: 'Просто загальний досвід в розробці проєктів (хоч і не дуже коректний, але любий проєкт це досвід)',
      status: 'archived',
    }
  },
  {
    slug: 'poshivak',
    name: 'Poshivak',
    description: 'Сайт створений для одного з викладачів.',
    technologies: ['React'],
    code_url: 'https://github.com/SitewrkU/poshivakWeb',
    live_url: 'https://sitewrku.github.io/poshivakWeb/',
    image: 'images/projects/poshivak.png',
    category: 'experiment',
  },
]

if (import.meta.env.DEV) {
  const fields = ['slug', 'code_url', 'live_url'] as const;
  const errors: string[] = [];

  for (const field of fields) {
    const seen = new Set<string>();

    for (const project of projectsData) {
      const value = project[field];
      if (!value) continue;

      if (seen.has(value)) {
        errors.push(`Дублікат ${field}: "${value}"`);
      }
      seen.add(value);
    }
  }
  if (errors.length) throw new Error(errors.join('\n'));
}